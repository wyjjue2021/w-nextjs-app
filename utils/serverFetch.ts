/*
 * @Author: 吴俊杰_20717 20717@etransfar.com
 * @Date: 2023-02-09 10:31:42
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-03-16 15:19:20
 * @FilePath: /tf-next-app/utils/fetch.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import Qs from 'qs'; // 引入qs模块，用来序列化post类型的数据

const requestInstance = axios.create({
  baseURL: '/',
});

// 实例添加请求拦截器
requestInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做处理...
    config.headers = Object.assign(
      config.method === 'get'
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          }
        : {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json; charset=UTF-8',
          },
      config.headers,
    );
    // config.headers.token = sessionStorage.getItem(`${projectPrefix}_token_`);

    if (config.method === 'post') {
      const contentType = config.headers['Content-Type'];
      // 根据Content-Type转换data格式
      if (contentType) {
        if (contentType.toString().includes('multipart')) {
          // 类型 'multipart/form-data;'
          // config.data = data;
        } else if (contentType.toString().includes('json')) {
          // 类型 'application/json;'
          // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
          config.data = JSON.stringify(config.data);
        } else {
          // 类型 'application/x-www-form-urlencoded;'
          // 服务器收到的raw body(原始数据) name=nowThen&age=18
          config.data = Qs.stringify(config.data);
        }
      }
    }
    return Promise.resolve(config);
  },
  (error) => 
    // 对请求错误做处理...
     Promise.reject(error)
  ,
);

requestInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return response?.data;
    } else {
      return {
        code: -1,
        msg: '未知错误',
        data: null,
      };
    }
  },
  (error) => Promise.reject(error)
);

export default requestInstance;
