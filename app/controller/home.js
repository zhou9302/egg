'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    console.log(ctx);
    console.log(ctx.request.body);
    const result = await ctx.curl('https://www.fenghuangbao.com:13443/ckyl/app/api/financing/getProduct', {
      method: 'post',
      contentType: 'json',
      data: ctx.request.body,
      dataType: 'json',
    });
    ctx.body = result.data;
  }
}

module.exports = HomeController;
