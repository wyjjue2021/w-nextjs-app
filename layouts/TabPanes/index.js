import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Component,
  Suspense
} from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
import {useRouter, Link,withRouter} from 'next/router'

import { Tabs, Alert, Dropdown, Menu } from 'antd'
import Welcome from '@/pages/welcome'
import { getKeyName, isAuthorized } from '@/utils/publicFunc'
import LoadingPage from '@/components/LoadingPage'
import { indexRouteKey } from '../../utils'
import { SyncOutlined } from '@ant-design/icons'
import style from './TabPanes.module.less'
import { inject, observer } from 'mobx-react';

const { TabPane } = Tabs

const initPane = [
  {
    title: '首页',
    key: indexRouteKey,
    content: Welcome,
    closable: false,
    path: indexRouteKey
  }
]

// 多页签组件

const TabPanes = (props) => {

  let {
    tabPanesStore: {curTab, reloadPath, setCurTab},
    defaultActiveKey,
    panesItem,
    tabActiveKey,
    router:{
      pathname,
      query:search,
      push,
      asPath
    }
  } = props

  const [activeKey, setActiveKey] = useState('')
  const [panes, setPanes] = useState(initPane)
  const [isReload, setIsReload] = useState(false)
  const [selectedPanel, setSelectedPanel] = useState({})
  const pathRef = useRef(null)
  
  // const history = useHistory()
  // const { pathname, search } = useLocation()

  const fullPath = pathname + search

  // 记录当前打开的tab
  const storeTabs = useCallback(
    (ps) => {
      const pathArr = ps.reduce(
        (prev, next) => [
          ...prev,
          getKeyName(next.path).tabKey
        ],
        []
      )
      setCurTab(pathArr)
    },
    [setCurTab]
  )

  // 从本地存储中恢复已打开的tab列表
  const resetTabs = useCallback(()=> {
    const initPanes = curTab.reduce(
      (prev, next) => {
        const { title, tabKey, component: Content } = getKeyName(next)
        return [
          ...prev,
          {
            title,
            key: tabKey,
            content: Content,
            closable: tabKey !== indexRouteKey,
            path: next
          }
        ]
      },
      []
    )
    console.log(pathname, 22)

    const { tabKey } = getKeyName(pathname)
    setPanes(initPanes)
    setActiveKey(tabKey)
  }, [curTab, pathname])

  // 初始化页面
  useEffect(() => {
    resetTabs()
  }, [resetTabs])

  // tab切换
  const onChange = (tabKey) => {
    setActiveKey(tabKey)
  }

  // 移除tab
  const remove = (targetKey)=> {
    const delIndex = panes.findIndex(
      (item) => item.key === targetKey
    )
    panes.splice(delIndex, 1)

    // 删除非当前tab
    if (targetKey !== activeKey) {
      const nextKey = activeKey
      setPanes(panes)
      setActiveKey(nextKey)
      storeTabs(panes)
      return
    }

    // 删除当前tab，地址往前推
    const nextPath = curTab[delIndex - 1]
    console.log(nextPath, 1)
    const { tabKey } = getKeyName(nextPath)
    // 如果当前tab关闭后，上一个tab无权限，就一起关掉
    if (!isAuthorized(tabKey) && nextPath !== '/' && false) {
      remove(tabKey)
      push(curTab[delIndex - 2])
    } else {
      push(`/${nextPath}`)
    }
    setPanes(panes)
    storeTabs(panes)
  }

  // tab新增删除操作
  const onEdit = (targetKey, action) =>
    action === 'remove' && remove(targetKey)

  // tab点击
  const onTabClick = (targetKey) => {
    const { path } = panes.filter(
      (item) => item.key === targetKey
    )[0]
    push({ pathname: path })
  }

  // 刷新当前 tab
  const refreshTab = () => {
    setIsReload(true)
    setTimeout(() => {
      setIsReload(false)
    }, 1000)

    setTimeout(() => {
    }, 500)
  }

  // 关闭其他或关闭所有
  const removeAll = async (isCloseAll) => {
    const { path, key } = selectedPanel
    push(isCloseAll ? '/' : path)

    const homePanel = [
      {
        title: '首页',
        key: indexRouteKey,
        content: Welcome,
        closable: false,
        path: '/'
      }
    ]

    const nowPanes =
      key !== '/welcome' && !isCloseAll ? [...homePanel, selectedPanel] : homePanel
    setPanes(nowPanes)
    setActiveKey(isCloseAll ? indexRouteKey : key)
    storeTabs(nowPanes)
  }

  useEffect(() => {
    const newPath = asPath

    // 当前的路由和上一次的一样，return
    if (!panesItem.path || panesItem.path === pathRef.current) return

    // 保存这次的路由地址
    pathRef.current = newPath
    
    const index = panes.findIndex(
      (_) => _.key === panesItem.key
    )
    // 无效的新tab，return
    if (!panesItem.key || (index > -1 && newPath === panes[index].path)) {
      return
    }

    // 新tab已存在，重新覆盖掉（解决带参数地址数据错乱问题）
    if (index > -1) {
      panes[index].path = newPath
      setPanes(panes)
      setActiveKey(tabActiveKey)
      return
    }
    // 添加新tab并保存起来
    panes.push(panesItem)
    setPanes([
      ...panes
    ])
    setActiveKey(tabActiveKey)
    storeTabs(panes)
  }, [panes, panesItem, pathname, resetTabs, search, storeTabs, setCurTab,tabActiveKey])

  const isDisabled = () => selectedPanel.key === indexRouteKey
  // tab右击菜单
  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => refreshTab()}
        disabled={selectedPanel.path !== fullPath}
      >
        刷新
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={(e) => {
          e.domEvent.stopPropagation()
          remove(selectedPanel.key)
        }}
        disabled={isDisabled()}
      >
        关闭
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={(e) => {
          e.domEvent.stopPropagation()
          removeAll()
        }}
      >
        关闭其他
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={(e) => {
          e.domEvent.stopPropagation()
          removeAll(true)
        }}
        disabled={isDisabled()}
      >
        全部关闭
      </Menu.Item>
    </Menu>
  )
  // 阻止右键默认事件
  const preventDefault = (e, panel) => {
    e.preventDefault()
    setSelectedPanel(panel)
  }
  
  return (
    <div className={style.tabsBox}>
      <Tabs
        size="small"
        activeKey={activeKey}
        className={style.tabs}
        // defaultActiveKey={defaultActiveKey}
        hideAdd
        onChange={onChange}
        onEdit={onEdit}
        onTabClick={onTabClick}
        type="editable-card"
      >
        {panes.map((pane) => {
          return <TabPane
            closable={pane.closable}
            key={pane.key}
            tab={
              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={['contextMenu']}
              >
                <span onContextMenu={(e) => preventDefault(e, pane)}>
                  {isReload &&
                    pane.path === fullPath &&
                    pane.path !== '/403' && (
                      <SyncOutlined title="刷新" spin={isReload} />
                    )}
                  {pane.title}
                </span>
              </Dropdown>
            }
          >
            <Suspense fallback={<LoadingPage />}>
              {reloadPath !== pane.path ? (
                <pane.content path={pane.path} />
              ) : (
                <div style={{ height: '100vh' }}>
                  <Alert message="刷新中..." type="info" />
                </div>
              )}
            </Suspense>
          </TabPane>
          }
        )}
      </Tabs>
    </div>
  )
}

export default inject('tabPanesStore')(observer(withRouter(TabPanes)))