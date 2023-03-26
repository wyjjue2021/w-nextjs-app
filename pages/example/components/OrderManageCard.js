/*
 * @Author: your name
 * @Date: 2022-04-25 18:18:08
 * @LastEditTime: 2023-03-16 15:31:34
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hywportal/src/pages/main/components/OrderManageCard.js
 */
import WithCard from './WithCard';
const originStr = typeof window !== 'undefined' ? window.location.origin : '';
import { baseUrl } from '@/utils/constant';

const OrderManage = WithCard({
  titleImg: '订单管理-文字.png',
  titleText: '使能物流企业实现平台化的端到端协同，服务货主企业供应链降本增效',
  titleTextColor: '#552D09',
  bgImage: '订单管理背景.png',
  list: [
    {
      iconImg: require('@/assets/main/订单.png'),
      title: '订单',
      text: '订单可视跟踪，在线查询更加便捷',
      height: 83,
      titleColor: '#7C4514',
      textColor: '#552D09',
      hot: true,
      jumpMethod: 'jump',
      jumpPath: originStr + `${baseUrl}/order/index`,
    },
    {
      iconImg: require('@/assets/main/回单.png'),
      title: '回单',
      text: '统一归纳收集回单，提升工作效率更智能',
      height: 83,
      titleColor: '#7C4514',
      textColor: '#552D09',
      jumpMethod: 'jump',
      jumpPath: originStr + `${baseUrl}/receipt/index`,
    },
    {
      iconImg: require('@/assets/main/结算.png'),
      title: '结算',
      textColor: '#552D09',
      text: '提升系统服务能力，优化整体业务模式',
      height: 83,
    },
    {
      iconImg: require('@/assets/main/异常.png'),
      title: '异常',
      textColor: '#552D09',
      text: '异常订单提醒，帮助客户及时处理',
      height: 83,
      jumpMethod: 'jump',
      jumpPath: originStr + `${baseUrl}/exception/index`,
    },
  ],
});

export default OrderManage;
