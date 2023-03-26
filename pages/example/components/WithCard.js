/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-03-09 19:42:53
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:28:16
 * @FilePath: /tf-next-app/pages/example/components/WithCard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import link from '../../../utils/urllink';
import styles from './withCard.module.less';
// import hotImg from '@/assets/main/hot.png';
// import bgImage from '@/assets/main/在线发货背景.png';

const WithCard = ({ titleImg, titleText, titleTextColor, bgImage, list }) => {
  class NewWrappedComponent extends React.Component {
    render() {
      return (
        <div
          className={styles['withCard-common']}
          // style={{ backgroundImage: `url(${require(`../../../assets/main/bg/${bgImage}`)})` }}
        >
          <div className="withCard-common-titleBox">
            {/* <img
              src={require(`@/assets/main/${titleImg}`)}
              alt="err"
              className="withCard-common-titleImg"
            /> */}
            <div className="withCard-common-textBox">
              <span
                className="withCard-common-text"
                style={titleTextColor && { color: titleTextColor }}
              >
                {titleText}
              </span>
            </div>
          </div>
          <div className="withCard-common-listBox">
            {list.map(item => (
              <div
                key={item.title}
                className={
                  !(item.jumpMethod && item.jumpPath) ? 'list-item disable-list-item' : 'list-item'
                }
                style={{ height: item.height || 80 }}
                onClick={() => {
                  if (item.jumpMethod) {
                    link[item.jumpMethod](item.jumpPath, item.jumpParam || '');
                  }
                }}
              >
                <div className="list-item-icon">
                  {/* <img className="img-icon" src={item.iconImg} alt="err" /> */}
                </div>
                <div className="list-item-container">
                  <div className="list-item-title">
                    <span style={item.titleColor && { color: item.titleColor }}>{item.title}</span>
                    {/* {item.hot && <img className="img-hot" src={hotImg.src} alt="err" />} */}
                  </div>
                  <div className="list-item-text">
                    <span style={item.textColor && { color: item.textColor }}>{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  return NewWrappedComponent;
};

export default WithCard;
