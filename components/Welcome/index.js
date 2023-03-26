/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-13 10:29:10
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-13 13:48:21
 * @FilePath: /tf-next-app/components/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
// import PropTypes from 'prop-types';

// import classes from './style.less';

import { html } from '@/README.md';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Index = (props) => {
	// const { } = props;

	return (
		<div className="">
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
