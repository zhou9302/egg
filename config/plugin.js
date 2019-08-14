'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  axios: {
    enable: true,
    package: 'axios',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },
};
