import WithCard from './WithCard';

const PeripheralServicesCard = WithCard({
  titleImg: '周边服务-文字.png',
  titleText: '为物流企业提供系统化的智能物流服务',
  bgImage: '周边服务背景.png',
  list: [
    {
      iconImg: require('@/assets/main/油卡.png'),
      title: '油卡',
      text: '高效、便捷的油卡管理方案，助力物流发展',
      textColor: '#9BA0AA',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: '/oilCard',
    },
    {
      iconImg: require('@/assets/main/保险.png'),
      title: '保险',
      text: '让每一批货都有保障，让货主、企业更放心',
      textColor: '#9BA0AA',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: '/insurance',
    },
    {
      iconImg: require('@/assets/main/保理.png'),
      title: '保理',
      text: '供应链科技金融，构筑产业端信用体系',
      textColor: '#9BA0AA',
      height: 70,
      jumpMethod: 'jump',
      jumpPath: '/factoring',
    },
  ],
});

export default PeripheralServicesCard;
