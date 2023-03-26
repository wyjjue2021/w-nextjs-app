/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-05 14:30:21
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-15 13:51:10
 * @FilePath: /个人工作/tf-next-app/layouts/MainHeader/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Layout, Dropdown, Menu, Row, Col } from 'antd';
import { SmileOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'next/router';
import { observer } from 'mobx-react';
import { appStores } from '@/stores';
import AvatarDropDown from '@/components/AvatarDropDown';
import style from './style.module.less';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <SmileOutlined />
      个人信息
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
        <LogoutOutlined />
        &nbsp; 退出登录
    </Menu.Item>
  </Menu>
);

const MainHeader = () => {
  const { globalStore } = appStores();
  return (
    <Layout.Header className={style.mainHeader}>
      <Row type="flex" style={{ paddingRight: 20 }}>
        <Col style={{ flex: 1 }}>
          <span className="trigger" onClick={globalStore.toggleCollapsed}>
            {globalStore.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Col>
        <Col>
          <AvatarDropDown />
          {/* <Dropdown overlay={menu} trigger={['click', 'hover']} placement="bottomCenter">
            <div className="user-info">
              <span className="user-img" />
              <span className="user-name">{globalStore.userInfo.loginName}</span>
            </div>
          </Dropdown> */}
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default observer(MainHeader);
