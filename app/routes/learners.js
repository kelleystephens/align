'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');
var Course = traceur.require(__dirname + '/../models/course.js');
var Test = traceur.require(__dirname + '/../models/test.js');


exports.dashboard = (req, res)=>{
  User.findById(req.session.userId, user => {
    Course.findAll(courses=>{
      Test.findUserScores(user, courses, courses=>{
        res.render('learners/dashboard', {user: user, title: 'Dashboard', courses: courses});
      });
    });
  });
};
