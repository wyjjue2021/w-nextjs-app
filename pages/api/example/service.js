/*
 * @Author: your name
 * @Date: 2022-04-07 15:42:26
 * @LastEditTime: 2023-03-12 21:00:15
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hywportal/src/pages/main/service.js
 */
import request from '@/utils/newRequest';
import config from '@/utils/apiConfig';

// 保存快捷方式
export function saveUserFunction(params) {
  return request(config.pc + '/local/function/saveUserFunction', {
    method: 'post',
    body: JSON.stringify(params),
  });
}

// 公路港统计信息
export function selectStatistics(params) {
  return request(config.pc + '/local/count/selectStatistics', {
    method: 'GET',
    body: params,
  });
}

// 货主最新订单:（等到开始地-目的地区域code）
export function getNewOrder(params) {
  return request(config.pc + '/atms/atmsTrade/pc/orderWholeCar/commonOrderList', {
    method: 'POST',
    type: 'form',
    body: params,
  });
}

// 优质专线
export function getHotLine(params) {
  return request(config.pc + '/atms/atmsCore/visitorSupplierPool/querySpecialLineList', {
    method: 'POST',
    type: 'form',
    body: params,
  });
}

// 企业人气倒序
export function getHotCompany(params) {
  return request(config.pc + '/atms/atmsCore/visitorSupplierPool/querySpecialLineList', {
    method: 'POST',
    type: 'form',
    body: params,
  });
}

// 车辆信息
export function getHotCar(params) {
  return request(config.pc + '/transport/tfvehicle/noLoginSearch', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

// 整车运力统计
export function getUnifiedCarCard(params) {
  return request(config.pc + '/local/aiweb/queryUnifiedCarSearch', {
    method: 'get',
    type: 'form',
    body: params,
  });
}

// 零担运力统计
export function getLdCard(params) {
  return request(config.pc + '/local/statistics/ldylStatistics', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
