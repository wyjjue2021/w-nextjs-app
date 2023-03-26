/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-03-09 19:42:53
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:21:59
 * @FilePath: /tf-next-app/pages/example/components/CapacityServiceCard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import WithCard from './WithCard';

const CapacityServiceCard = WithCard({
  titleImg: '运力服务-文字.png',
  titleText: '为制造业提供优质、高效的物流服务',
  bgImage: '运力服务背景.png',
  list: [
    {
      iconImg: require('@/assets/main/在线招标.png'),
      title: '在线招标',
      text: '在线招标，更多优质资源随心挑',
      height: 70,
      textColor: '#5A6576',
    },
    {
      iconImg: require('@/assets/main/在线招标.png'),
      title: '整车运力列表',
      text: '海量运力，提供更优质、更高效的服务',
      height: 70,
      textColor: '#5A6576',
      jumpMethod: 'jump',
      jumpPath: '/vehicleSchedule',
    },
  ],
});

export default CapacityServiceCard;
