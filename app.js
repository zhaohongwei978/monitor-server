const Koa = require('koa');
const app = new Koa();
const betterBody = require('koa-better-body');
const convert = require('koa-convert');
const Router = require('koa-router');
const mysql = require('./src/utils/mysql')
let router = new Router();
const port = 3000;
app.context.mysql = mysql
//处理解析body
app.use(convert(betterBody()))
app.use(async (ctx,next) => {
    console.log('--请求的URL--',ctx.request.url)
    if(ctx.request.url.includes('register') || ctx.request.url.includes('login')){
        await next()
    }else{

    }
});
 
app.listen(port,()=>{
    console.warn(`server is run ${port}`)
});
router.use('/api/admin',require('./src/api/userController'))
app.use(router.routes())