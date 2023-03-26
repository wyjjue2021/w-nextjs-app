import React from 'react';
import { Icon } from 'antd';
import styles from './aroundService.module.less';
import link from '../../../utils/urllink';
import youka from '@/assets/main/油卡.png';
import baoxian from '@/assets/main/保险.png';
import dingweijia from '@/assets/main/快捷应用-定位夹2x.png';
import changqujiaohao from '@/assets/main/快捷应用-厂区叫号2x.png';

class AroundService extends React.Component {
  render() {
    return (
      <div className={styles['around-service']}>
        <div className="around-service-title">
          <span>周边服务</span>
        </div>
        <div className="around-service-list">
          <div
            className="around-item"
            onClick={() => {
              link['jump']('/oilCard');
            }}
          >
            <img src={youka.src} alt="err" className="around-icon-img" />
            <span className="around-text">油卡</span>
            <span className="around-icon">
              <Icon type="right" className="around-icon-right" />
            </span>
          </div>
          <div
            className="around-item"
            onClick={() => {
              link['jump']('/insurance');
            }}
          >
            <img src={baoxian.src} alt="err" className="around-icon-img" />
            <span className="around-text">保险</span>
            <span className="around-icon">
              <Icon type="right" className="around-icon-right" />
            </span>
          </div>
          <div
            className="around-item"
            onClick={() => {
              link['jump2lingdan'](link.PATH_LINGDAN_LOCATOR);
            }}
          >
            <img src={dingweijia.src} alt="err" className="around-icon-img" />
            <span className="around-text">定位夹</span>
            <span className="around-icon">
              <Icon type="right" className="around-icon-right" />
            </span>
          </div>
          <div
            className="around-item"
            onClick={() => {
              link['jump2ryy'](link.PATH_RYY_BOOKING);
            }}
          >
            <img src={changqujiaohao.src} alt="err" className="around-icon-img" />
            <span className="around-text">厂区叫号</span>
            <span className="around-icon">
              <Icon type="right" className="around-icon-right" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default AroundService;
