/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565663194376_1025';

  // add your middleware config here
  config.middleware = [];

  exports.security = {
    csrf: false,
  };

  exports.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: '81201',
    secret: '13c06cb4a3cb8ede72aeab9fa838cb17cebbc504',
    error_log: [ 'xxxx/appname-web.log', 'xxx/common-error.log', 'xxx/egg-agent.log' ],
    packages: [ 'xxx/package.json' ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
