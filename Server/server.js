var app = require('koa')();
var serve = require('koa-static');
var router = require('koa-router')();
var koaBody = require('koa-body')();

app.use(serve('../Client'));

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(80);