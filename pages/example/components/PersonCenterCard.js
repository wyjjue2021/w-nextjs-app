import React from 'react';
import { Divider } from 'antd';
import { toLoginPage, toRegisterPage } from '@/utils/index';
import styles from './personCenterCard.module.less';
import link from '../../../utils/urllink';
import settingPng from '@/assets/main/设置.png';
import { baseUrl } from '@/utils/constant';

class PersonCenterCard extends React.Component {
  onLink = path => {
    const originStr = typeof window !== 'undefined' ? window.location.origin : '';
    const newPath = originStr + path;
    link['jump'](newPath);
  };
  render() {
    const { currentUser, isLogin } = this.props.user;
    const { data = {} } = this.props || {};
    return (
      <div className={styles['personCenterCard-box']}>
        {isLogin && (
          <>
            <div className="personCenterCard-header">
              <div className="personCenterCard-header-img">
                <img src={require('@/assets/main/默认头像.png').src} alt="err" />
              </div>
              <div className="personCenterCard-info-outer">
                <div className="info-welcome">
                  <span>欢迎你，{currentUser.realName || currentUser.partyName}</span>
                </div>
                <div className="info-time">
                  <span>{currentUser.organization || ''}</span>
                </div>
              </div>
            </div>
            {/* <div className="personCenterCard-list">
              <div
                className="list-item"
                onClick={this.onLink.bind(this, `${baseUrl}/order/index?status=待接单`)}
              >
                <div className="list-item-number">{data.waitTakeOrderCnt || 0}</div>
                <div className="list-item-text">
                  <span>待接单</span>
                </div>
                <div className="item-line"></div>
              </div>
              <div
                className="list-item"
                onClick={this.onLink.bind(this, `${baseUrl}/order/index?status=运输中`)}
              >
                <div className="list-item-number">{data.inTransOrderCnt || 0}</div>
                <div className="list-item-text">
                  <span>运输中</span>
                </div>
                <div className="item-line"></div>
              </div>
              <div
                className="list-item"
                onClick={this.onLink.bind(this, `${baseUrl}/order/index?status=待回单`)}
              >
                <div className="list-item-number">{data.waitReceiptOrderCnt || 0}</div>
                <div className="list-item-text">
                  <span>待回单</span>
                </div>
              </div>
              <div
                className="list-item"
                onClick={this.onLink.bind(this, `${baseUrl}/order/index?status=已完成`)}
              >
                <div className="list-item-number">{data.finishOrderCnt || 0}</div>
                <div className="list-item-text">
                  <span>已完成</span>
                </div>
                <div className="item-line"></div>
              </div>
              <div
                className="list-item"
                onClick={this.onLink.bind(this, `${baseUrl}/exception/index`)}
              >
                <div className="list-item-number">{data.exceptionCount || 0}</div>
                <div className="list-item-text">
                  <span>异常</span>
                </div>
              </div>
            </div> */}
          </>
        )}
        {!isLogin && (
          <>
            <div className="header-img">
              <img src={require('@/assets/main/默认头像.png').src} alt="err" />
              <div>
                <span>你好，欢迎光临！</span>
                <div className="login-action">
                  <addEventListener className="login-btn" onClick={toLoginPage}>
                    登录
                  </addEventListener>
                  <Divider type="vertical" />
                  <a className="login-btn" onClick={toRegisterPage}>
                    注册
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default PersonCenterCard;
