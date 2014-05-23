'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');

exports.create = (req, res)=>{
  var course = new Course(req.body, req.session.userId);
  course.save((c)=>res.redirect(`/creators/courses/${c._id}`));
};

exports.index = (req, res)=>{
  var courseId = req.params.courseId;
  console.log(courseId);
  res.render('courses/index', {courseId:courseId});
};
