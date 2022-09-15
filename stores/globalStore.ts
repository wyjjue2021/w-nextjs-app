/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-05 14:30:54
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 16:41:07
 * @FilePath: /个人工作/tf-next-app/stores/globalStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { observable, action } from 'mobx';
// import request from '@/services/request';

export default class GlobalStore {
  @observable appTitle:string = '管理平台';

  @observable collapsed:boolean = false; // 菜单收起展开

  @observable userInfo:Record<any, string> = {
    // 当前用户信息
    loginName: 'wjunj',
  };

  @action 
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  @action 
  setData(data:Partial<Record<keyof GlobalStore,any>> = {
  }) {
    Object.keys(data).forEach((key) => {
      let _key = key as keyof GlobalStore;
      let self = this as Record<keyof GlobalStore,any>;
      self[_key]  = data[_key];
    });
  }
}
