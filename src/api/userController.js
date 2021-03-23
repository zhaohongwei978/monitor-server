const Router = require('koa-router');
let router = new Router();
const { md5,ADMIN_PREFIX,isNull }  = require('./../utils/index') 
const uuid = require('uuid');
const Result = require('./../utils/result') 

router.post('/login',async ctx=>{
    const { userName } = ctx.request.fields;
    let md5Password = md5( ADMIN_PREFIX + ctx.request.fields.password)
    const row = await ctx.mysql.query('SELECT * from t_admin WHERE userName=?',[userName])
    const passwordFlag = row.findIndex(item => item.password == md5Password)
    const data = row.find(item => item.password =md5Password )
    if(row.length === 0){
        ctx.body = Result.showError('该账号不存在，请注册', 10000, null, Result.ACTION_TYPE_ALERT)
    }else if(passwordFlag ===-1){
        ctx.body = Result.showError('该账号密码错误，请重试', 10000, null, Result.ACTION_TYPE_ALERT)
    }else{
        ctx.body = Result.showResult(data,'登录成功',0,Result.ACTION_TYPE_SUCCESS)    
    }
})

router.post('/register',async ctx=>{
    const { userName, email } = ctx.request.fields;
    ctx.request.fields.password = md5( ADMIN_PREFIX + ctx.request.fields.password)
    const reqParams = Object.values({
        id:uuid.v1(),
        userName:userName,
        password:ctx.request.fields.password,
        email:email
    })
    const row = await ctx.mysql.query('SELECT * FROM t_admin WHERE userName=?',[userName]  )
    if(isNull(row)){
        return ctx.body = Result.showError('该用户已存在',10000,null,Result.ACTION_TYPE_ALERT)
    }
    let res =  await ctx.mysql.query('INSERT INTO t_admin(id,userName,password,email) VALUES(?,?,?,?)',Object.values(reqParams))
    ctx.body = Result.showResult(null,'注册成功',0,Result.ACTION_TYPE_SUCCESS)
})



module.exports = router.routes()