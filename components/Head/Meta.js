/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-12 15:35:31
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-13 09:50:34
 * @FilePath: /tf-next-app/components/Head/Meta.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from 'react';
// import PropTypes from 'prop-types';

import METADATA from '@/utils/metadata';

const propTypes = {
	// title: PropTypes.string.isRequired,
};

const defaultProps = {
	// title: '',
};

const Meta = (props) => {
	// const { title } = props;

	return (
		<>
			<meta
				name="description"
				content={METADATA.APP_DESCRIPTION}
			/>
			<meta
				content={METADATA.KEY_WORDS}
				name="keywords"
			/>
			{/* Twitter */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={'@' + METADATA.APP_NAME.toLowerCase()} />
			<meta name="twitter:title" content={METADATA.APP_NAME} />
			<meta
				name="twitter:description"
				content={METADATA.APP_DESCRIPTION}
			/>
			<meta name="twitter:image" content={METADATA.IMG_SHARE} />
			{/* Facebook */}
			<meta property="fb:app_id" content={METADATA.FB_APP_ID} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={METADATA.APP_NAME} />
			<meta
				property="og:description"
				content={METADATA.APP_DESCRIPTION}
			/>
			<meta property="og:image" content={METADATA.IMG_SHARE} />
			<meta property="og:image:width" content="200" />
			<meta property="og:image:height" content="200" />
			<meta property="og:locale" content="en_EN" />
			<meta property="og:url" content={METADATA.WEB_URL} />
		</>
	);
};

Meta.propTypes = propTypes;

Meta.defaultProps = defaultProps;

export default Meta;
