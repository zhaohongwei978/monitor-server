const JWT = require('jsonwebtoken');
const TOKEN_KEY = 'soshashtoken'
function getToken(userInfo){
    return token = JWT.sign({
        id:1,
        userName:userInfo.userName,
    },TOKEN_KEY,{ expiresIn: 60 })
}

module.exports = {
    getToken,
}