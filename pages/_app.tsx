/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:07:32
 * @FilePath: /个人工作/tf-next-app/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "../styles/globals.css";
import "antd/dist/antd.less";
import "tf-payApply/libs/index.css";

import { useEffect, useLayoutEffect, useState } from "react";

import type { AppProps } from "next/app";
import { Provider } from "mobx-react";
import store, { initializeStore, isServer } from "@/stores/index";
import AuthStorage from "@/utils/auth-storage";
import { useAsync } from "react-use";
import cookie from "react-cookies";
import NProgress from "nprogress";
import { useRouter } from "next/router";

import routes, { pageRoute } from "../routers/config";

import BasicLayout from "@/layouts/BasicLayout";
import Login from "@/pages/login";

const urlsIgnore = [
  "/forgot-password",
  "/login-first",
  "/login",
  "/sign-up",
  "/verify-email",
  "/reset-password",
];


const MyApp = (props: { Component: any; pageProps: any;initialMobxState:any }) => {

  //ssr mobx
  const mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState)
  // console.log(mobxStore,'mobxStore')

  const { Component, pageProps } = props;
  const [awaitLoading, setAwaitLoading] = useState(true);
  const router = useRouter();

  const Layout = Component.Layout;

  useEffect(() => {
    const handleRouteChange = (url:any, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        NProgress.start();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", () => NProgress.done());
      router.events.off("routeChangeError", () => NProgress.done());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAsync(async () => {
    if (AuthStorage.loggedIn) {
      try {
        // await dispatch(await actionGetUserAuth());
      } catch (error: any) {
        if (
          (error.status === 403 || error.status === 401) &&
          error.code !== "AUTHORIZATION_REQUIRED"
        ) {
          AuthStorage.destroy();
          // dispatch({ type: 'LOGOUT_SUCCESS' });

          if (router.pathname !== "/login") {
            router.push("/login");
          }
        }
      }
      setAwaitLoading(false);
    } else {
      setAwaitLoading(false);
    }
  }, [AuthStorage.loggedIn]);

  useAsync(async () => {
   
    console.log(process.env, 'process')
    if (
      !AuthStorage.loggedIn &&
      typeof window !== "undefined" &&
      !urlsIgnore.includes(router.pathname)
    ) {
      router.push("/login");
    }
  }, [router.pathname]);
  // console.log(pageProps,'app.')
  return (
    <div>
    <Provider {...mobxStore}>
      {Layout ? (
        <Layout>
          <Component {...pageProps} router={router} />
        </Layout>
      ) : (
        <BasicLayout  pageProps={pageProps}  route={pageRoute} component={Component}></BasicLayout>
      )}
      
    </Provider>
    </div>
  );
};

MyApp.getInitialProps = async (context: {
  mobxStore: any; ctx: any; Component: any; 
}) => {
  const { ctx, Component } = context;

  ctx.mobxStore = initializeStore()
  
  if (!process.browser) {
    cookie.plugToRequest(ctx.req, ctx.res);
  }

  if (!AuthStorage.loggedIn && !urlsIgnore.includes(ctx.pathname)) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    }
  }

  if (AuthStorage.loggedIn && urlsIgnore.includes(ctx.pathname)) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  let pageProps = {};
  if (Component?.getInitialProps) {
    // console.log(1)
    pageProps = await Component?.getInitialProps(ctx);
  }

  const propsData = {
    ...pageProps,
  };

  let layoutProps = {};

  if (Component?.Layout) {
    // console.log(2)
    layoutProps = await Component?.Layout?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  } else {
    // console.log(3)
    layoutProps = await (BasicLayout as any)?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  }

  return {
    pageProps: {
      ...propsData,
      ...layoutProps,
    },
    initialMobxState: ctx.mobxStore
  };
};

export default MyApp;
