/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-05 14:30:21
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 10:04:19
 * @FilePath: /个人工作/tf-next-app/layouts/BasicLayout/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState, useEffect, useRef, Component} from 'react';
import { useRouter, withRouter } from 'next/router'
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SiderMenu from '../SiderMenu';
import MainHeader from '../MainHeader';
// import MainFooter from "../MainFooter";
import { getKeyName, isAuthorized } from '@/utils/publicFunc'
import AuthStorage from '@/utils/auth-storage';
import { indexRouteKey } from '@/utils'

import TabPanes from '../TabPanes';
import style from './style.module.less';

const noNewTab = ['/login'] // 不需要新建 tab的页面

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};


const BasicLayout = (props) => {
  const { push:pushRouter } = useRouter();

  const {
    route, children,
    router:{
      pathname,
      query:search,
      push,
      asPath,
      replace
    },
    component,
    pageProps
  }= props
  const [tabActiveKey, setTabActiveKey] = useState('/')
  const [panesItem, setPanesItem] = useState({
    title: '',
    content: null,
    key: '',
    closable: false,
    path: ''
  })
  const pathRef = useRef('')


  useEffect(() => {
    // setStoreData('SET_COLLAPSED', document.body.clientWidth <= 1366)

    // 未登录
    // if (!AuthStorage.loggedIn) {
    //   pushRouter('/login')
    //   return
    // }
    const { tabKey, title, component: Content } = getKeyName(pathname)

    // 新tab已存在或不需要新建tab，return
    if (pathname === pathRef.current || noNewTab.includes(pathname)) {
      setTabActiveKey(tabKey)
      return
    }

    // 检查权限，比如直接从地址栏输入的，提示无权限
    const isHasAuth = true  //checkAuth(pathname)
    if (!isHasAuth) {
      const errorUrl = '/403'
      const {
        tabKey: errorKey,
        title: errorTitle,
        component: errorContent
      } = getKeyName(errorUrl)
      setPanesItem({
        title: errorTitle,
        content: errorContent,
        key: errorKey,
        closable: true,
        path: errorUrl
      })
      pathRef.current = errorUrl
      setTabActiveKey(errorKey)
      replace(errorUrl)
      return
    }

    // 记录新的路径，用于下次更新比较
    const newPath = asPath
    pathRef.current = newPath
    setPanesItem({
      title,
      content: Content,
      key: tabKey,
      closable: tabKey !== indexRouteKey,
      path: newPath
    })
    setTabActiveKey(tabKey)
  }, [search])

  console.log(component, 'layout_component')

  return <Layout className={style.mainLayout}>
    <SiderMenu routes={route} />
    {/* 左侧菜单导航 */}
    <Layout className="main-layout-right">
      <MainHeader />
      <TabPanes
          pageProps={pageProps}
          defaultActiveKey={indexRouteKey}
          panesItem={panesItem}
          tabActiveKey={tabActiveKey}
          component={component}
        ></TabPanes>      
    </Layout>
  </Layout>
};

BasicLayout.propTypes = propTypes;
BasicLayout.defaultProps = defaultProps;

export default withRouter(BasicLayout);