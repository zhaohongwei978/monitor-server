const Router = require('koa-router')
let router = new Router();
router.use('/api/admin',require('~/api/userController'))