import WithCard from './WithCard';
import link from '../../../utils/urllink';

const LineShipCard = WithCard({
  titleImg: '在线发货-文字.png',
  titleText: '海量运力、运输管理、运力支持、一键代发等多项优质服务为您保驾护航！',
  bgImage: '在线发货背景.png',
  list: [
    {
      iconImg: require('@/assets/main/整车直发.png'),
      title: (
        <div className="blue-outer">
          <span>整车直发</span>
          <div className="blue-box">
            <span className="blue-title">融易运</span>
          </div>
        </div>
      ),
      text: '精准运力、可视运输及合规结算',
      textColor: '#071635',
      height: 83,
      titleColor: '#0085FF',
      hot: true,
      jumpMethod: 'jump2ryy',
      jumpPath: link.PATH_RYY_CREATE_ORDER,
      jumpParam: 'type=add',
    },
    {
      iconImg: require('@/assets/main/整车代发.png'),
      title: (
        <div className="blue-outer">
          <span>整车代发</span>
          <div className="blue-box">
            <span className="blue-title">陆运通</span>
          </div>
        </div>
      ),
      text: '海量运力、平台结算安全有保障',
      textColor: '#071635',
      height: 83,
      jumpMethod: 'jump2lyt',
      jumpPath: link.PATH_LYT_DELIVERY,
    },
    {
      iconImg: require('@/assets/main/零担直发.png'),
      title: '零担直发',
      text: '一点发全国，直选专线',
      textColor: '#071635',
      height: 83,
      titleColor: '#0085FF',
      hot: true,
      jumpMethod: 'jump2lingdan',
      jumpPath: link.PATH_LINGDAN_ADD_ORDER,
    },
    {
      iconImg: require('@/assets/main/零担代发.png'),
      title: '零担代发',
      text: '一对一服务，直托无忧',
      textColor: '#071635',
      height: 83,
    },
  ],
});

export default LineShipCard;
