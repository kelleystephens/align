'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.dashboard = (req, res)=>{
  User.findById(req.session.userId, user => {
    Course.findAll(courses=>{
      res.render('learners/dashboard', {user: user, title: 'Dashboard', courses: courses});
    });
  });
};
