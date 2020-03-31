/*
 * @Author: liva
 * @Date: 2019-12-27 18:06:41
 * @LastEditors  : liva
 * @LastEditTime : 2020-01-09 13:44:42
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue_meituan/" : "/",
  iconPaths: {
    favicon32: "favicon.ico",
    favicon16: "favicon.ico",
    appleTouchIcon: "favicon.ico",
    maskIcon: "favicon.ico",
    msTileImage: "favicon.ico"
  }
};
