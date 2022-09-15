/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-05 16:18:43
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-09-06 16:44:30
 * @FilePath: /个人工作/tf-next-app/pages/Exception/500.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const Error500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="抱歉，服务器出错了。"
    extra={
        <Button type="primary">返回首页</Button>
    }
  />
);

export default Error500