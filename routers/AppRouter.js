/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2022-09-05 16:57:11
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-12 16:16:58
 * @FilePath: /tf-next-app/routers/AppRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useHistory, useLocation  } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import LoadingPage from '@/components/LoadingPage'
import routes,{pageRoute}from './config';

const renderRoutes = (routes) => {
  let isLogin = false
  if (!Array.isArray(routes)) {
    return null;
  }
  let loginRoute = routes[0]
  let pageRoute = routes[1]
  const helpFun = (_routes) => {
    debugger;
    return _routes.map((route, index) => {
      if (route.redirect) {
        return (
          <Redirect
            key={route.path || index}
            exact={route.exact}
            strict={route.strict}
            from={route.path}
            to={route.redirect}
          />
        );
      }

      return (
        <Route
          key={route.path || index}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={() => {
            if(route.path === '/login'){
              debugger;
              const renderChildRoutes = renderRoutes(route.childRoutes);
              if(route.component){
                return <Suspense fallback={<LoadingPage></LoadingPage>}>
                    <route.component route={route}>{renderChildRoutes}</route.component>
                  </Suspense>
              }
              return renderChildRoutes
            }
            return null
          }}
        />
      );
    })
  }
  return (     
      <div>
        {
          isLogin && <BasicLayout route={pageRoute}></BasicLayout>
        }
        <Switch>
          {
            loginRoute.childRoutes && helpFun(loginRoute.childRoutes)
          }
          {
            pageRoute.childRoutes && helpFun(pageRoute.childRoutes)
          }
        </Switch>
      </div> 
  );
};

const AppRouter = () => <Router>{renderRoutes(routes)}</Router>;

export default AppRouter;
