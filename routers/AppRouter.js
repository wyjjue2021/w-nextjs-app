import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,useHistory, useLocation  } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
import LoadingPage from '@/components/LoadingPage'
import routes,{pageRoute}from './config';

const renderRoutes = (routes) => {
  let isLogin = true
  if (!Array.isArray(routes)) {
    return null;
  }
  let loginRoute = routes[0]
  let pageRoute = routes[1]
  const helpFun = (_routes) => {
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
