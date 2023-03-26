/*
 * @Description:
 * @Author: wjunj
 * @Date: 2020-12-09 18:36:39
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 14:46:49
 * @FilePath: /react-web-pro/src/pages/Home/store.js
 */
import { createContext } from 'react';
import { observable, action } from 'mobx';
import request from '@/utils/newRequest';
import AuthStorage from '@/utils/auth-storage';
import {specialLineListServerApi} from '@/pages/api/example/index'

export default class MainStore {
  @observable tableData = [];

  @observable pageTitle = '登录';

  @observable loading = false;

  // 列表数据
  @action.bound
  async getList(payload:any) {
    // this.loading = true;
    const res:any = await request({
      url: '/api/example',
      method: 'post',
      data: payload,
    });
    // console.log(res,'11')
    // this.loading = false;
    if (res.success) {
      return res.data
    }
  }

  // 列表数据
  @action.bound
  async getListServer(payload:any) {
    // this.loading = true;
    const res:any = await specialLineListServerApi(payload);
    // console.log(res.data,'11')
    // this.loading = false;
    if (res.success) {
      return res.data
    }
  }
}



