/*
 * @Author: your name
 * @Date: 2022-04-25 18:18:08
 * @LastEditTime: 2023-03-13 08:57:03
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /hywportal/src/pages/main/components/FastCard.js
 */
import React from 'react';
import FastCardSetting from './FastCard-setting';
import styles from './fastCard.module.less';
import settingPng from '@/assets/main/设置.png';
import link from '../../../utils/urllink';
import { baseUrl } from '@/utils/constant';

class FastCard extends React.Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    // empty here
  }

  getList = () => {
    // this.props.dispatch({
    //   type: 'user/selectShortcut',
    //   payload: {},
    // });
  };

  handleSetting = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible } = this.state;
    const { shortcut = {}, isLogin } = this.props?.user || {};
    return (
      <div className={styles['fastCard-box']}>
        <div className="fastCard-header">
          <span className="fastCard-header-title">快捷服务</span>
          <div className="fastCard-setting">
            {isLogin && (
              <>
                <img src={settingPng} alt="err" />
                <span className="fastCard-header-setting-text" onClick={this.handleSetting}>
                  设置
                </span>
              </>
            )}
          </div>
        </div>
        <div className="fastCard-list">
          {(shortcut.selectedData || []).map(item => (
            <div
              className="list-item"
              key={item.functionName}
              style={item.jumpUrl ? { cursor: 'pointer' } : { cursor: 'initial' }}
              onClick={() => {
                link.jumpUnique(item.jumpUrl, item.target);
              }}
            >
              <div className="list-item-icon-box">
                <img src={item.pictureUrl} alt="err" />
              </div>
              <div className="list-item-text-box">
                <span>{item.functionName}</span>
              </div>
            </div>
          ))}
        </div>
        {visible && (
          <FastCardSetting
            selectedData={shortcut.selectedData}
            unSelectedData={shortcut.unSelectedData}
            onUpdateCallback={this.getList}
            handleCancel={this.handleCancel}
          />
        )}
      </div>
    );
  }
}

export default FastCard;
