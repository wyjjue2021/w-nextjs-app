import React from 'react';

const context = {};

const req = require.context('.', true, /Store$/);
const pageReq= require.context('../pages/', true, /Store$/);
req.keys().forEach((key) => {
  const name = key.match(/([a-zA-Z0-9].*)$/)[1];
  const Store = req(key).default;
  context[name] = new Store();
});
pageReq.keys().forEach((key) => {
  let nameStr = key.match(/([a-zA-Z0-9].*)$/)[1];
  let nameArr = nameStr.split('/')
  let name = nameArr[nameArr.length - 1]

  const Store = pageReq(key).default;
  console.log(name, 1)
  console.log(Store, 1)
  context[name] = new Store();
});

export const storesContext = React.createContext(context);

export function appStores() {
  return React.useContext(storesContext);
}
export default {...context}
