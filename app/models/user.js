'use strict';

var users = global.nss.db.collection('users');
var bcrypt = require('bcrypt');
var Mongo = require('mongodb');

class User{
  constructor(obj){
    this.email = obj.email;
    this.password = obj.password;
    this.type = obj.type;
  }

  create(fn){
    users.findOne({email: this.email}, (e, u)=>{
      if(u){
        console.log('Found user, already registered.');
        fn(null);
      }else{
        console.log('Saving user to database.');
        this.password = bcrypt.hashSync(this.password, 8);
        users.save(this, (e, u)=>fn(u));
      }
    });
  }

  login(fn){
    users.findOne({email: this.email}, (e, u)=>{
      if(u){
        console.log('Found user!');
        var isMatch = bcrypt.compareSync(this.password, u.password);
        if(isMatch){
          console.log('Found user, password correct.');
          fn(u);
        } else {
          console.log('User exists, but wrong password.');
          fn(null);
        }
      } else {
        console.log('This user does not exist.');
        fn(null);
      }
    });
  }

  static dashboard(userId, fn){
    userId = Mongo.ObjectID(userId);
    users.findOne({_id: userId}, (e, user)=>{
        fn(user);
      });
  }

}

module.exports = User;
