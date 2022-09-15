/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-05 14:30:54
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 10:39:10
 * @FilePath: /个人工作/tf-next-app/stores/tabPanesStore.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { observable ,action} from 'mobx';
import { indexRouteKey } from '../utils';

export default class TabPanes {
  @observable curTab =  [indexRouteKey]
  @observable reloadPath  = {}

  @action setCurTab = (arr: string[]) => {
      this.curTab = arr;
  }
}
