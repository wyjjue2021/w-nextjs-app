/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-06 09:55:59
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 16:59:47
 * @FilePath: /个人工作/tf-next-app/pages/home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect, useContext, ReactElement } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import HomeStore from './homeStore'
import './style.module.less';

const HomePage:React.FC<ReactElement &{homeStore: HomeStore}> = (props) => {
  console.log(props, 1)
  // useContext 订阅mobx数据
  const pageStore  = props.homeStore;
  // useState state状态
  const [num, setNum] = useState(0);
  // useEffect副作用
  useEffect(() => {
    pageStore.qryTableDate();
  }, []);

  return (
    <div className="page-home page-content">
      <h2>{pageStore.pageTitle}</h2>
      <div>
        <span>num值：{num}</span>
        <Button type="primary" size="small" style={{ marginLeft: 10 }} onClick={() => setNum(num + 1)}>
          +1
        </Button>
      </div>
    </div>
  );
};

export default inject('homeStore')(observer(HomePage));
