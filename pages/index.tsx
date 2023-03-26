/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-09-06 09:55:44
 * @LastEditors: 吴俊杰_20717 20717@etransfar.com
 * @LastEditTime: 2023-02-13 16:08:52
 * @FilePath: /个人工作/tf-next-app/pages/welcome/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Head from "@/components/Head";
import Welcome from "@/components/Welcome";
import style from "./index.module.less";

const WelcomePage = () => (
  <div className={style.pageWelcome}>
    <Head />
    <Welcome />
  </div>
);

export default WelcomePage;
