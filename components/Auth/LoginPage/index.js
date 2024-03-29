/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2021-01-13 22:57:59
 *------------------------------------------------------- */

import React from "react";
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

import AuthStorage from "@/utils/auth-storage";
import Router from "next/router";
import Link from "next/link";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import classes from "./style.module.less";


const Login = (props) => {
  // const dispatch = useDispatch();
  const { actionLogin } = props || {};
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (AuthStorage.loggedIn) {
      Router.push("/");
    }
  }, []);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      actionLogin({ ...values });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <div className={classes.leftOverlay}></div>
        <div className={classes.leftContent}>
          <div className="ml-4 flex-1">
            <h1 className="pt-0 text-white">Boilerplate</h1>
           
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className="d-flex justify-content-center align-content-center flex-1 flex-column">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            style={{
              width: 350,
              padding: 20,
              margin: "0 auto 40px",
              borderRadius: 4,
              background: "#fff",
            }}
            size="large"
          >
            <div className="text-center mb-5">
              {/* <Logo
								width={150}
								height={150}
							/> */}
            </div>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <div className="text-center">
                <Link href="/forgot-password" className="login-form-forgot">
                  Forgot password
                </Link>
              </div>
            </Form.Item>

            <Button
              type="primary"
              block
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Login
            </Button>

            <div className="mt-5">
              <div className="class">Email: admin@gmail.com</div>
              <div className="class">Password: admin123</div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};


export default Login;
