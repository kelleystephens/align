'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.create = (req, res)=>{
  var course = new Course(req.body, req.session.userId);
  course.save((c)=>res.redirect(`/creators/courses/${c._id}`));
};

exports.index = (req, res)=>{
  var courseId = req.params.courseId;
  res.render('courses/index', {courseId:courseId});
};

exports.test = (req, res)=>{
  // var courseId = req.params.courseId;
  res.render('courses/test');
};

exports.createTest = (req, res)=>{
  // var courseId = req.params.courseId;
  res.render('courses/test');
};
