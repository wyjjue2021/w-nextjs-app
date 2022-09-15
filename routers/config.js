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


export const pageRoute = {
  path: '/',
  // exact: true,
  // component: , // 基本布局
  childRoutes: [
    {
      path: '/welcome',
      name: '首页',
      icon: <SmileOutlined />,
      component: lazy(() => import('@/pages/welcome')),
    },
    {
      path: '/home',
      name: 'home主页',
      icon: <HomeOutlined />,
      component: lazy(() => import('@/pages/home')),
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
    { path: '/', exact: true, redirect: '/welcome' },
    { path: '*', exact: true, redirect: '/exception/404' },
  ],
}

export const loginRoute = {
  path: '/',
  // exact: true,
  // component: BlankLayout, // 基本布局
  childRoutes: [
    {
      path: '/login',
      name: '登录',
      // component: lazy(() => import('@/pages/Login')),
    }
  ]
}

export default [
  loginRoute,
  pageRoute
]
