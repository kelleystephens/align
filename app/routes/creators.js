'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.dashboard = (req, res)=>{
  User.findById(req.session.userId, user => {
    res.render('creators/dashboard', {user: user, title: 'Dashboard'});
  });
};
