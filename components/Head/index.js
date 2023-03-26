/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-12 15:35:31
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-12 15:57:57
 * @FilePath: /tf-next-app/components/Head/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import METADATA from '@/utils/metadata';

import Meta from './Meta';

const propTypes = {
	title: PropTypes.string.isRequired,
};

const defaultProps = {
	title: '',
};

const HeadShare = (props) => {
	const { title, ...attr } = props;

	return (
		<Head>
			<title>{(title ? title + ' | ' : '') + METADATA.APP_NAME}</title>
			<Meta {...attr} />
		</Head>
	);
};

HeadShare.propTypes = propTypes;

HeadShare.defaultProps = defaultProps;

export default HeadShare;
