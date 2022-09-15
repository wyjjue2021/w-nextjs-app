/*
 * @Description:
 * @Author: wjunj
 * @Date: 2020-12-09 18:36:39
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 10:00:08
 * @FilePath: /react-web-pro/src/layouts/SiderMenu/index.js
 */
import React, { useState, useEffect, useCallback,useMemo } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import {useRouter, Link} from 'next/router'
import { observer } from 'mobx-react';
import { Layout, Menu, Row } from 'antd';
import { RocketTwoTone } from '@ant-design/icons';
import { getKeyName, flattenRoutes } from '@/utils/publicFunc'
import { appStores } from '@/stores';
import style from './style.module.less';
const SiderMenu = ({ routes }) => {
  
  const flatMenu = flattenRoutes(routes)
  const { pathname, push } = useRouter();
  // console.log(pathname);
  const { globalStore } = appStores();
  const [openKeys, setOpenKeys] = useState([]);

  const getSelectedKeys = useMemo(() => {
    const list = pathname.split('/').splice(1);
    return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
  }, [pathname]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const handlerLink = (e) => {
    console.log(e,'123')
    push(e.key)
  }

  const renderMenuItem = (target = []) =>
    target
      .filter((item) => item.path && item.name)
      .map((subMenu) => {
        if (subMenu.childRoutes && !!subMenu.childRoutes.find((child) => child.path && child.name)) {
          return (
            <Menu.SubMenu
              key={subMenu.path}
              title={
                <div>
                  {!!subMenu.icon && subMenu.icon}
                  <span>{subMenu.name}</span>
                </div>
              }
            >
              {renderMenuItem(subMenu.childRoutes)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={subMenu.path} onClick={handlerLink}>
              <span>
                  {!!subMenu.icon && subMenu.icon}
                  <span>{subMenu.name}</span>
                </span>
          </Menu.Item>
        );
      });

  // useEffect(() => {
  //   const list = pathname.split('/').splice(1);
  //   setOpenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
  // }, []);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={globalStore.collapsed} className={style.mainLeftSlider}>
    
      <Menu
        mode="inline"
        theme="dark"
        style={{ paddingLeft: 0, marginBottom: 0 }}
        className="main-menu"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={getSelectedKeys}
      >
        {renderMenuItem(routes)}
      </Menu>
    </Layout.Sider>
  );
};

export default observer(SiderMenu);
