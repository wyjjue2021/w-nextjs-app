/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2022-09-05 16:57:11
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:14:46
 * @FilePath: /tf-next-app/routers/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { lazy } from 'react';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  FormOutlined,
  UserOutlined,
  StarOutlined,
  WarningOutlined,
  FrownOutlined,
} from '@ant-design/icons';

// import BasicLayout from '@/layouts/BasicLayout';
// import BlankLayout from '@/layouts/BlankLayout';


export const pageRoute =  [
    {
      path: '/',
      name: '首页',
      icon: <SmileOutlined />,
      component: lazy(() => import('@/pages/index')),
    },
    // {
    //   path: '/home',
    //   name: 'home主页',
    //   icon: <HomeOutlined />,
    //   component: lazy(() => import('@/pages/home')),
    // },
    {
      path: '/example',
      name: '示例页',
      icon: <HomeOutlined />,
      component: lazy(() => import('@/pages/example')),
    },
    // {
    //   path: '/list',
    //   name: '列表',
    //   icon: <FormOutlined />,
    //   // component: lazy(() => import('@/pages/List')),
    // },
    // {
    //   path: '/system',
    //   name: '系统管理',
    //   icon: <SettingFilled />,
    //   childRoutes: [
    //     {
    //       path: '/system/groovySet',
    //       name: 'Groovy脚本管理',
    //       // component: lazy(() => import('@/pages/System/GroovySet')),
    //     },
    //     {
    //       path: '/user',
    //       name: '用户配置',
    //       icon: <UserOutlined />,
    //       // component: lazy(() => import('@/pages/System/User')),
    //     },
    //     {
    //       path: '/star',
    //       name: '个人中心',
    //       icon: <StarOutlined />,
    //       // component: lazy(() => import('@/pages/System/Star')),
    //     },
    //   ],
    // },
    {
      path: '/exception',
      name: '异常页',
      // exact: true,
      icon: <WarningOutlined />,
      childRoutes: [
        {
          path: '/403',
          name: '403',
          icon: <FrownOutlined />,
          component: lazy(() => import('@/pages/403')),
        },
        {
          path: '/404',
          name: '404',
          exact: true,
          icon: <FrownOutlined />,
          component: lazy(() => import('@/pages/404')),
        },
        {
          path: '/500',
          name: '500',
          icon: <FrownOutlined />,
          component: lazy(() => import('@/pages/500')),
        },
      ],
    },
    { path: '*', exact: true, redirect: '/exception/404' },
  ]

export default [
  pageRoute
]
