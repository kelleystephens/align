'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.dashboard = (req, res)=>{
  User.dashboard(req.session.userId, user => {
    res.render('learners/dashboard', {user: user, title: 'Dashboard'});
  });
};
