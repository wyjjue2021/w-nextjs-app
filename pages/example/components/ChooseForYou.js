import React from 'react';
import { Icon } from 'antd';
import pic1 from '@/assets/main/整车.png';
import pic2 from '@/assets/main/零担.png';
import pic3 from '@/assets/main/港仓.png';
import iconHot from '@/assets/main/hot.png';
import inconForYou from '@/assets/main/供您所用.png';
import iconRight from '@/assets/main/箭头灰色.png';
import link from '@/utils/urllink';
// import Countup from 'react-countup';
// import * as service from '../service';
import styles from './chooseForYou.module.less';

class ChooseForYou extends React.Component {
  state = {
    // carInfo: {
    //   currentCount: 0,
    //   deltaCount: 0,
    //   historyCount: 0,
    // },
    // ldInfo: {
    //   id: 1,
    //   lineCnt: 0,
    //   yestLineCnt: 0,
    // },
  };
  componentDidMount() {
    // this.getCarInfo();
    // this.getLdInfo();
  }
  // getCarInfo = async () => {
  //   const fetchPromise = service.getUnifiedCarCard();
  //   const res = await fetchPromise;
  //   if (res.data) {
  //     this.setState({
  //       carInfo: res.data,
  //     });
  //     if (res.data.deltaCount > 0) {
  //       this.setState({
  //         carClass: 'cartip-actived',
  //       });
  //       setTimeout(() => {
  //         this.setState({
  //           carClass: 'cartip-end',
  //         });
  //       }, 2000);
  //     }
  //   }
  // };
  // getLdInfo = async () => {
  //   const fetchPromise = service.getLdCard();
  //   const res = await fetchPromise;
  //   if (res.data) {
  //     console.log('res', res);
  //     this.setState({
  //       ldInfo: res.data,
  //     });
  //     if (res.data.yestLineCnt > 0) {
  //       this.setState({
  //         ldClass: 'ldtip-actived',
  //       });
  //       setTimeout(() => {
  //         this.setState({
  //           ldClass: 'ldtip-end',
  //         });
  //       }, 2000);
  //     }
  //   }
  // };
  render() {
    const { carInfo, ldInfo, carClass = '', ldClass = '' } = this.state;
    return (
      <div className={styles['chooseForYou']}>
        <div className="chooseForYou-header">
          <img src={inconForYou.src} alt="err" height={52} />
          <span className="chooseForYou-header-text">海量资源</span>
        </div>
        <div className="chooseForYou-content">
          <div className="list-item-box">
            <div className="list-item">
              <div className="pos-tab-tip">车辆</div>
              <div className={`pos-tip ${carClass}`}>
                <div className="tip-text">
                  <span>
                    今日新增车辆
                    <br />
                    <strong style={{ color: '#2B82D8', fontSize: 20 }}>
                      {carInfo && carInfo.deltaCount}
                    </strong>{' '}
                    辆
                  </span>
                </div>
              </div>
              <div className="num-card">
                <span>
                  {/* {carInfo && (
                    <Countup
                      start={carInfo.historyCount}
                      duration={0.5}
                      separator=","
                      end={carInfo.currentCount}
                      decimal=","
                      className="num-text"
                      itemHeight={30}
                    />
                  )} */}
                </span>
                <span className="num-unit">辆</span>
              </div>
              <img src={pic1.src} alt="" className="item-img" />
              <div className="list-item-action">
                <div className="action-title">
                  <span>整车运力</span>
                  <img src={iconHot.src} alt="err" className="icon-hot" />
                  <img src={iconRight.src} className="icon-right" alt="err" />
                </div>
                <div className="action-space">海量运力、平台结算安全有保障</div>
                <div
                  className="action-btn"
                  onClick={() => {
                    this.props.onLink({ path: '/hywportal/vehicleSchedule' });
                  }}
                >
                  <span>立即查看</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item-box">
            <div className="list-item">
              <div className="pos-tab-tip">专线</div>
              <div className={`pos-tip ${ldClass}`}>
                <div className="tip-text">
                  <span>
                    今日新增专线
                    <br />
                    <strong style={{ color: '#2B82D8', fontSize: 20 }}>
                      {ldInfo && ldInfo.yestLineCnt}
                    </strong>{' '}
                    条
                  </span>
                </div>
              </div>
              <div className="num-card">
                <span>
                  {/* {ldInfo && (
                    <Countup
                      start={0}
                      duration={0.5}
                      separator=","
                      end={ldInfo.lineCnt}
                      decimal=","
                      className="num-text"
                      itemHeight={30}
                    />
                  )} */}
                </span>
                <span className="num-unit">条</span>
              </div>
              <img src={pic2.src} alt="" className="item-img" />
              <div className="list-item-action">
                <div className="action-title">
                  <span>零担运力</span>
                  <img src={iconRight.src} className="icon-right" alt="err" />
                </div>
                <div className="action-space">一点发全国，直选专线</div>
                <div
                  className="action-btn"
                  onClick={() => {
                    this.props.onLink({ path: '/hywportal/specialLineList?tabsKey=line' });
                  }}
                >
                  <span>立即查看</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list-item-box">
            <div className="list-item">
              <div className="num-card">
                <span>
                  {/* <Countup
                    start={0}
                    duration={0.5}
                    separator=","
                    end={420022}
                    decimal=","
                    className="num-text"
                    itemHeight={30}
                  /> */}
                </span>
                <span className="num-unit">㎡</span>
              </div>
              <img src={pic3.src} alt="" className="item-img" />
              <div className="list-item-action">
                <div className="action-title">
                  <span>传化港仓</span>
                  <img src={iconRight.src} className="icon-right" alt="err" />
                </div>
                <div className="action-space">库存可视化，提升库存周转率</div>
                <div
                  className="action-btn"
                  onClick={() => {
                    link['jump2yuncang'](link.PATH_YUNCANG_HOME);
                  }}
                >
                  <span>立即查看</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChooseForYou;
