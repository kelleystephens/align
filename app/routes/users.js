'use strict';

var traceur = require('traceur');
// var _ = require('lodash');
var User = traceur.require(__dirname + '/../models/user.js');

exports.index = (req, res)=>{
  res.render('users/index', {title: 'User Registration/Login'});
};

exports.create = (req, res)=>{
  var user = new User(req.body);
  // is it User or user?
  user.create(u=>{
    if(u){
      req.session.userId = u._id;  //sets cookie
      if(u.type === 'creator'){
        res.redirect('creators/dashboard');
      }else{
        res.redirect('learners/dashboard');
      }
    }else{  //means u returned null so was already registered
      res.redirect('/login');
    }
  });
};

exports.login = (req, res)=>{
  var user = new User(req.body);
  user.login(u=>{
    if(u){
      req.session.userId = u._id;  //sets cookie
      if(u.type === 'creator'){
        res.redirect('creators/dashboard');
      }else{
        res.redirect('learners/dashboard');
      }
    }else{  //means u returned null so no user registered
      res.redirect('/login');
    }
  });
};

exports.logout = (req, res)=>{
  req.session = null;
  res.redirect('/');
};
