import React from 'react';
import { Icon } from 'antd';
import pic1 from '@/assets/main/pic1.png';
import pic2 from '@/assets/main/pic2.png';
import iconMoreText from '@/assets/main/多快好省.png';
import iconDriver from '@/assets/main/我要发货文字.png';
import iconHot from '@/assets/main/hot.png';
import iconForYou from '@/assets/main/为您发货.png';
import iconRightGrey from '@/assets/main/箭头灰色.png';
import iconRightZong from '@/assets/main/箭头棕色.png';
import link from '@/utils/urllink';
import styles from './driverGoods.module.less';

class DriverGoods extends React.Component {
  render() {
    return (
      <div className={styles['driverGoods']}>
        <div className="driverGoods-header">
          <img src={iconForYou.src} alt="err" height={52} />
          <span className="driverGoods-header-text">全景发货</span>
        </div>
        <div className="driverGoods-content">
          <div className="content-card">
            <div className="content-card-left">
              <div className="content-card-left-title">
                <img src={iconDriver.src} alt="err" className="title-img" />
                <img src={iconHot.src} alt="err" className="title-hot-img" />
              </div>
              <div className="content-card-left-text">
                <img src={iconMoreText.src} alt="err" className="text-img" />
              </div>
            </div>
            <div className="content-card-right">
              <div
                className="action-btn"
                onClick={() => {
                  link.jumpUnique('/hywportal/manage', '_blank');
                }}
              >
                <span>立即进入</span>
                <img src={iconRightZong.src} className="icon-right" alt="err" />
              </div>
            </div>
          </div>
          <div className="content-footerAction">
            <div className="content-footerAction-left">
              <div
                className="action-text"
                onClick={() => {
                  link.jump2ryy(link.PATH_RYY_CREATE_ORDER, 'type=add');
                }}
              >
                <span>传化融易运</span>
                <img src={iconRightGrey.src} className="icon-right" alt="err" />
              </div>
              <div className="action-line"></div>
              <div
                className="action-text"
                onClick={() => {
                  link.jump2lyt(link.PATH_LYT_BOOKING);
                }}
              >
                <span>传化陆运通</span>
                <img src={iconRightGrey.src} className="icon-right" alt="err" />
              </div>
            </div>
            <div className="content-footerAction-right">
              <div
                className="action-text"
                onClick={() => {
                  link.jumpUnique('/hywportal/manage/order/create?type=create', '_blank');
                }}
              >
                <span>平台发货</span>
                <img src={iconRightGrey.src} className="icon-right" alt="err" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DriverGoods;
