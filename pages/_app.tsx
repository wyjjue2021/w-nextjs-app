/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 15:43:13
 * @FilePath: /个人工作/tf-next-app/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '../styles/globals.css'
import "antd/dist/antd.less";

import type { AppProps } from 'next/app'
import { Provider } from "mobx-react";
import store from "@/stores/index";
import routes,{pageRoute}from '../routers/config';

import BasicLayout from '@/layouts/BasicLayout';

function MyApp({ Component, pageProps,router }: AppProps) {
  // console.log(pageRoute, 'pageRoute')
  return (
    <Provider {...store}>
      <BasicLayout route={pageRoute}> 
      {/* <Component {...pageProps} /> */}
      </BasicLayout> 
    </Provider>)
  
}

export default MyApp
