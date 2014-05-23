'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.index = (req, res)=>{
  res.render('users/index', {title: 'User Registration/Login'});
};

exports.create = (req, res)=>{
  var user = new User(req.body);
  user.login(u=>{
    if(u){
      req.session.userId = u._id;  //sets cookie
      if(u.type === 'creator'){
        res.render('creators/dashboard', {user:u, title: 'Dashboard'});
      }else{
        res.render('learners/dashboard', {user:u, title: 'Dashboard'});
      }
    }else{  //means u returned null so was already registered
      res.render('users/index', {title: 'User Registration/Login'});
    }
  });
};
