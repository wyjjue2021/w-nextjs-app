/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-03-12 20:56:36
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-12 21:05:33
 * @FilePath: /tf-next-app/components/WithMain/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Breadcrumb from './Breadcrumb';
import styles from './index.module.less';

const WithMain = ({ breadCrumbs } = {}) => WrappedComponent => {
  class WithComponent extends React.Component {
    state = {
      locationKey: '',
      historyBreadcrumb: [], // 历史记录面包屑
    };
    /**
     * 统一跳转方法
     */
    onLink = ({ isLogin, url, path, from } = {}) => {
      let cPath = path;
      if (isLogin) {
        // 判断登录的逻辑
      }
      if (from === '') {
        // 判断从某个具体页面跳转的逻辑（特殊情况）
      }
      if (url) {
        // 跳转打开新卡片
        window.open(url);
        return;
      }
      if (cPath) {
        // 跳转打开当前项目路由
        this.props.history.push(cPath);
      }
    };
    render() {
      console.log(this.props,'1231')
      const { key } = this.props?.location || {};
      return (
        <div key={key} className={styles['with-main']}>
          <Breadcrumb {...this.props} breadCrumbs={breadCrumbs} />
          <div
            className={breadCrumbs ? 'content-common content-common-breadcrumb' : 'content-common'}
          >
            <WrappedComponent {...this.props} onLink={this.onLink} />
          </div>
        </div>
      );
    }
  }
  return WithComponent;
};

export default WithMain;
