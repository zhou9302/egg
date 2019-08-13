'use strict';
const Controller = require('egg').Controller;
const axios = require('axios');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const aa = await axios.post('https://www.fenghuangbao.com:13443/ckyl/app/api/financing/getProduct', { channel: '1' });
    const { ctx } = this;
    ctx.body = { code: '00000000', result: aa.data };
  }
}

module.exports = HomeController;
