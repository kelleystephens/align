'use strict';

var users = global.nss.db.collection('users');
var bcrypt = require('bcrypt');

class User{
  constructor(obj){
    this.email = obj.email;
    this.password = obj.password;
    this.type = obj.type;
  }

  login(fn){
    users.findOne({email: this.email}, (e, u)=>{
      if(u){
        fn(null);
      }else{
        this.password = bcrypt.hashSync(this.password, 8);
        users.save(this, (e, u)=>fn(u));
      }
    });
  }

}

module.exports = User;
