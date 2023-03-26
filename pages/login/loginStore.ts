/*
 * @Description:
 * @Author: wjunj
 * @Date: 2020-12-09 18:36:39
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-27 19:12:56
 * @FilePath: /react-web-pro/src/pages/Home/store.js
 */
import { createContext } from 'react';
import { observable, action } from 'mobx';
import request from '@/utils/newRequest';
import AuthStorage from '@/utils/auth-storage';

export default class HomeStore {
  @observable tableData = [];

  @observable pageTitle = '登录';

  @observable loading = false;

  // 列表数据
  @action.bound
  async actionLogin(payload:any) {
    this.loading = true;
    const res:any = await request({
      url: '/api/users/login',
      method: 'post',
      data: payload,
    });
    debugger;
    this.loading = false;
    if (res.code === 0) {
      const resData = res.data || {};
      const user = resData.user
    
      AuthStorage.value = {
        token: resData.id,
        userId: resData.userId,
      };
      document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
      console.log(resData, 'home');
      return res
    }
   
  }
}



