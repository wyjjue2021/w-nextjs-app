/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-03-12 20:56:36
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:18:02
 * @FilePath: /tf-next-app/components/WithMain/Breadcrumb.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import { getHistoryBreadcrumb, setHistoryBreadcrumb } from './utils';

class BreadcrumbComponent extends React.Component {
  state = {
    locationKey: '',
    historyBreadcrumb: [], // 历史记录面包屑
  };
  componentDidMount() {
    this.setPath();
  }
  setPath = () => {
    const { pathname, search } = this.props.location || {};
    const { breadCrumbs } = this.props;
    if (!breadCrumbs) {
      return;
    }
    const newBreadCrumbs = breadCrumbs
      .map(item => {
        const curr = (getHistoryBreadcrumb() || []).find(ele => ele.title === item.title);
        if (curr) {
          item.path = curr.path;
        }
        return item;
      })
      .map(item => ({
        path: item.path === pathname ? pathname + search : item.path,
        title: item.title,
      }));
    setHistoryBreadcrumb(newBreadCrumbs);
    this.setState({ historyBreadcrumb: newBreadCrumbs });
  };
  /**
   * 历史面包屑跳转
   */
  onHistoryLink = ({ path }) => {
    this.props.history.push(path);
  };
  render() {
    const { historyBreadcrumb } = this.state;
    const { breadCrumbs } = this.props;
    return (
      <>
        {breadCrumbs && (
          <div className="content-breadcrumb">
            <span>
              {/* <svg
                fill="#6E7382"
                t="1649174382409"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6440"
                width="12"
                height="12"
              >
                <path
                  d="M508.5 61.7c-193.9 0-351 157.2-351 351s269.7 544.1 351 544.1 351-350.2 351-544.1-157.1-351-351-351z m0 527.6c-97.5 0-176.6-79-176.6-176.6s79-176.6 176.6-176.6 176.6 79 176.6 176.6S606 589.3 508.5 589.3z"
                  p-id="6441"
                ></path>
              </svg> */}
              <span style={{ marginLeft: 3 }}>当前位置：</span>
            </span>
            <Breadcrumb separator=">">
              <Breadcrumb.Item
                onClick={() => {
                  this.onHistoryLink({ path: '/hywportal' });
                }}
              >
                <a>
                  <span>首页</span>
                </a>
              </Breadcrumb.Item>
              {historyBreadcrumb.map((ele, index, arr) =>
                index < arr.length - 1 ? (
                  <Breadcrumb.Item
                    key={ele.title}
                    onClick={this.onHistoryLink.bind(this, { path: ele.path })}
                  >
                    <a>{ele.title}</a>
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item key={ele.title}>{ele.title}</Breadcrumb.Item>
                ),
              )}
            </Breadcrumb>
          </div>
        )}
      </>
    );
  }
}

export default BreadcrumbComponent;
