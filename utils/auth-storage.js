/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-12 15:25:03
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-12 15:25:08
 * @FilePath: /tf-next-app/utils/auth-storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Storage from './storage';

class AuthStorage extends Storage {
	get loggedIn() {
		return !!this.value && !!this.value.token;
	}

	get token() {
		return this.value && this.value.token;
	}

	get userId() {
		return this.value && this.value.userId;
	}

	get role() {
		return this.value && this.value.role;
	}
}

export default new AuthStorage('AUTH');
