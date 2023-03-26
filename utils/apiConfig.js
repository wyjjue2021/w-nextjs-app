/*
 * @Author: your name
 * @Date: 2022-03-28 14:14:28
 * @LastEditTime: 2022-04-06 10:10:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hywportal/src/services/config.js
 */
const baseApi = '/entryApi';
const carrierBaseApi = '/unifiedCarrierWeb';

module.exports = {
  apiPrefix: '/businessWeb',
  omsApiPrefix: '/scmOmsWeb',
  routePrefix: '/business',
  scmOpAdmin: '/scmOpAdmin',
  pc: baseApi + '/pc',
  app: baseApi + '/app',
  tmsPc: baseApi + '/pc/atms',
  carrierPc: baseApi + '/pc/oms',
  localPc: baseApi + '/pc/local',
  bill: baseApi + '/pc/bill',
  carrierPCTms: carrierBaseApi + '/pc/tms',
};
