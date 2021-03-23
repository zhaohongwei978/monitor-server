const crypto = require('crypto');
//密码前缀
const ADMIN_PREFIX = '_?:L$"OPUIOSIFJ(*UPT:LKRFG'

function md5(str){
    const hash  = crypto.createHash('md5')
    hash.update(str,'utf-8');
    return hash.digest('hex');
}
function isNull(str){
    if(typeof str === 'object'){
        if((Array.isArray(str) && str.length === 0)){
            return false;
            //Object.keys({name:'1111'}) 
        }else if(JSON.stringify(str) === '{}'){
            return false;
        }else{
            return true;
        }
    }else if(str === null){
        return false
    }else if(str === undefined ){
        return false
    }else if(str === ''){
        return false
    }else{
        true;
    }
}

module.exports = {
    ADMIN_PREFIX,
    md5,
    isNull
}