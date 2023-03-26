/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2022-09-05 14:30:54
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:05:45
 * @FilePath: /tf-next-app/stores/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import {useStaticRendering} from 'mobx-react'
import TabPane from 'antd/lib/tabs/TabPane';

export const isServer = !(typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement !== 'undefined')
// Comment 1
useStaticRendering(isServer)

const context = {};
const config = {}

const req = require.context('.', true, /Store$/);
const pageReq= require.context('../pages/', true, /Store$/);
req.keys().forEach((key) => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  config[name] = Store
  context[name] = new Store();
});
pageReq.keys().forEach((key) => {
  let nameStr = key.match(/([a-zA-Z0-9].*)$/)[1];
  let nameArr = nameStr.split('/')
  let name = nameArr[nameArr.length - 1]

  const Store = pageReq(key).default;
  // console.log(name, 1)
  // console.log(Store, 1)
  config[name] = Store
  context[name] = new Store();
});

export const storesContext = React.createContext(context);

export function appStores() {
  return React.useContext(storesContext);
}
export default {...context}

// console.log(config,'config')

export class Store {
  // Comment 2
  constructor(initialState = {}) {
    for (const k in config) {
      if (config.hasOwnProperty(k)) {
        this[k] = new config[k](initialState[k])
      }
    }
  }
}

// server
let store = null
// Comment 3
export function initializeStore(initialState = {}) {
  if (isServer) {
    return new Store(initialState)
  }
  if (store === null) {
    store = new Store(initialState)
  }

  return store
}