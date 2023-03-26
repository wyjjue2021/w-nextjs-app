/*
 * @Author: your name
 * @Date: 2022-04-25 18:18:08
 * @LastEditTime: 2023-03-16 15:34:08
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hywportal/src/pages/main/components/PersonalizedServiceCard.js
 */
import WithCard from './WithCard';
import link from '../../../utils/urllink';
const originStr = typeof window !== 'undefined' ? window.location.origin : '';
import { baseUrl } from '@/utils/constant';

const PersonalizedServiceCard = WithCard({
  titleImg: '个性化服务-文字.png',
  titleText: '大数据、区块链、物联网等先进技术为依托，提供个性化服务',
  bgImage: '个性化服务背景.png',
  list: [
    {
      iconImg: require('@/assets/main/区块链回单.png'),
      title: '区块链回单',
      text: '合规高效签署，让物流更高效、风险更低',
      textColor: '#384F3D',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: originStr + `${baseUrl}/receipt/index?receiptType=区块链回单`,
    },
    {
      iconImg: require('@/assets/main/定位夹.png'),
      title: '定位夹',
      text: '物联网服务实现车辆在途可控可管',
      textColor: '#384F3D',
      height: 70,
      jumpMethod: 'jump2lingdan',
      jumpPath: link.PATH_LINGDAN_LOCATOR,
    },
    {
      iconImg: require('@/assets/main/数据.png'),
      title: '数据',
      text: '多维度运营数据展示、提供经营决策支撑',
      textColor: '#384F3D',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: originStr + baseUrl,
    },
    {
      iconImg: require('@/assets/main/厂区叫号.png'),
      title: '厂区叫号',
      text: '预约叫号，优化秩序提升作业效率',
      textColor: '#384F3D',
      height: 70,
      jumpMethod: 'jump2ryy',
      jumpPath: link.PATH_RYY_BOOKING,
    },
  ],
});

export default PersonalizedServiceCard;
