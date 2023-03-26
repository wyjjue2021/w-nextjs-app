/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-12 15:25:16
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 09:20:20
 * @FilePath: /tf-next-app/utils/storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import cookie from 'react-cookies';

const mandatory = () => {
	throw new Error('Storage Missing parameter!');
};

export default class Storage {
	#name;

	#options = {};

	constructor(name = mandatory(), value = {}, options = {}) {
		this.#name = name;
		this.#options = options;

		if (!this.value) {
			this.value = value;
		}
	}

	set value(value) {
		// console.log(this.#name, 'this.#name')
		// console.log(value, 'setcookie')
		cookie.save(
			this.#name,
			value,
			{
				path: '/',
				maxAge: 365 * 24 * 60 * 60,
				...this.#options,
			},
		);
	}

	get value() {
		// console.log(this.#name, 'get#name')
		// console.log(cookie.load(this.#name), 'getcookie')
		return cookie.load(this.#name);
	}

	// eslint-disable-next-line class-methods-use-this
	get allCookies() {
		return cookie.loadAll();
	}

	destroy = (next = f => f) => {
		// console.log(this.#name, 'remove#name')
		cookie.remove(
			this.#name,
			{
				path: '/',
				maxAge: 365 * 24 * 60 * 60,
				...this.#options,
			},
		);
		next();
	}
}
