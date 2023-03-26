import React from 'react';
import styles from './specialOffer.module.less';
import car1Icon from '@/assets/specialOffer/car1.png';
import car2Icon from '@/assets/specialOffer/car2.png';
import jtIcon from '@/assets/specialOffer/icon-jt.png';
import queIcon from '@/assets/specialOffer/que-icon.png';
import titleIcon from '@/assets/specialOffer/title-icon.png';
import moment from 'moment';
let timer = null;
class SpecialOffer extends React.Component {
  state = {
    listData: [
      {
        icon: car1Icon.src,
        time: '仅剩21时56分',
        start: '杭州市',
        end: '成都市',
        company: '杭州速邦物流有限公司',
        weight: '470.00',
        weightPrice: '590.00元',
        volume: '128.00',
        volumePrice: '160.00元',
        queWeight: '5.00',
        queVolume: '20.00',
        address: '杭州市钱塘区党湾镇大江东产业集聚区红十五线',
      },
      {
        icon: car2Icon.src,
        time: '仅剩13时48分',
        start: '杭州市',
        end: '石家庄市',
        company: '杭州老郑物流有限公司',
        weight: '300.00',
        weightPrice: '380.00元',
        volume: '80.00',
        volumePrice: '95.00元',
        queWeight: '4.00',
        queVolume: '16.05',
        address: '杭州市钱塘区党湾镇大江东产业集聚区红十五线',
      },
    ],
  };
  componentDidMount() {
    this.setTime();
    timer = setInterval(() => {
      this.setTime();
    }, 1000 * 60);
  }
  setTime() {
    let { listData } = this.state;
    let hour = moment().get('hour');
    let minute = moment().get('minute');
    listData[0].time = `仅剩${23 - hour}时${59 - minute}分`;
    listData[1].time = `仅剩${22 - hour > 0 ? 22 - hour : 0}时${59 - minute}分`;
    this.setState({ listData });
  }
  componentWillUnmount() {
    timer && clearInterval(timer);
  }
  render() {
    return (
      <div className={styles['specialOffer-box']}>
        <img className={styles.tit} src={titleIcon.src}></img>
        <div className={styles.content}>
          {this.state.listData.map((item, index) => {
            return (
              <div key={index} className={styles.listBox}>
                <div className={styles.main}>
                  {/* left */}
                  <div className={styles.mainLeftImg}>
                    <img src={item.icon}></img>
                    <div className={styles.timer}>{item.time}</div>
                  </div>
                  {/* right */}
                  <div className={styles.mainRight}>
                    <div className={styles.startend}>
                      <span>{item.start}</span>
                      <img src={jtIcon.src} width="28px"></img>
                      <span>{item.end}</span>
                    </div>
                    <div className={styles.company}>{item.company}</div>
                    <div className={styles.info}>
                      <div className={styles.left}>
                        <p>
                          <span className={styles.bold}>重货：</span>
                          <span className={styles.orange}>{item.weight}</span>
                          <span className={styles.bold}>元/吨</span>
                          <span className={styles.gray}>{item.weightPrice}</span>
                          <span className={styles.bold}>泡货：</span>
                          <span className={styles.orange}>{item.volume}</span>
                          <span className={styles.bold}>元/吨</span>
                          <span className={styles.gray}>{item.volumePrice}</span>
                        </p>
                        <p className={styles.address}>地址：{item.address}</p>
                      </div>
                      <div className={styles.right}>
                        <img className={styles.queIcon} src={queIcon.src}></img>
                        <span className={styles.bold}>
                          <span className={styles.orange}>{item.queWeight}</span>吨重货，
                          <span className={styles.orange}>{item.queVolume}</span>方泡货
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default SpecialOffer;
