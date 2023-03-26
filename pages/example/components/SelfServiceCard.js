import WithCard from './WithCard';

const SelfServiceCard = WithCard({
  titleImg: '自助服务-文字.png',
  titleText: '海量优质线路，服务更可靠，运营更细致。',
  bgImage: '自助服务背景.png',
  list: [
    {
      iconImg: require('@/assets/main/找专线.png'),
      title: '找专线',
      text: '海量优质线路，省时更省心',
      textColor: '#5A6576',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: '/specialLineList?tabsKey=line',
    },
    {
      iconImg: require('@/assets/main/轨迹查询.png'),
      title: '轨迹查询',
      text: '终端用户订单可视化，运输位置一目了然',
      textColor: '#5A6576',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: '/trajectoryFind?tabsKey=order',
    },
    {
      iconImg: require('@/assets/main/库存查询.png'),
      title: '库存查询',
      text: '库存可视化，提升库存周转率',
      textColor: '#5A6576',
      height: 70,
      jumpMethod: 'jumpUnique',
      jumpPath: 'https://yuncang/queryStorage',
    },
  ],
});

export default SelfServiceCard;
