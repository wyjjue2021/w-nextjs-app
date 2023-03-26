/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2022-09-05 14:44:51
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-14 20:37:11
 * @FilePath: /tf-next-app/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { ReactElement } from 'react';
// import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Head from '@/components/Head';
import LoginStore from './welcomeStore'

import LoginPage from '@/components/Auth/LoginPage/';
import Router from 'next/router';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const LoginPages:React.FC<ReactElement & {homeStore: LoginStore}> & { Layout:any }= (props:any) => {

	const pageStore  = props.loginStore;

	const actionLogin = async (data:{email: string, password: string}) => {
		console.log(data,'data')
		pageStore.actionLogin(data).then((res: { code: number; }) =>{
			if(res.code === 0){
				Router.push('/');
			}
		})
		
	}
	return (
		<>
			{/* <Head title="Login" /> */}
			<LoginPage actionLogin={actionLogin} />
		</>
	);
};

LoginPages.propTypes = propTypes;

LoginPages.defaultProps = defaultProps;

LoginPages.Layout = ({ children }:{children:any}) => children;

// LoginPage.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default  inject('welcomeStore')(observer(LoginPages));;
// export default connect((state) => state)(LoginPage);
