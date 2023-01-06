

const bd = require("../models/login");
const crypto = require('crypto');


export class LoginService {
   
    static getLogin(login, password) {
        const newPassword = crypto.createHash('sha1').update(password).digest('hex');
        return bd.getLogin(login, newPassword);
    }
} 