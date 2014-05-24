'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Test = traceur.require(__dirname + '/../models/test.js');


exports.create = (req, res)=>{
  var course = new Course(req.body, req.session.userId);
  course.save((c)=>res.redirect(`/creators/courses/${c._id}`));
};

exports.index = (req, res)=>{
  var courseId = req.params.courseId;
  res.render('courses/index', {courseId:courseId});
};

exports.learnerindex = (req, res)=>{
  Course.findAll(courses=>{
    res.render('courses/learnerindex', {courses:courses});
  });
};

exports.view = (req, res)=>{
  var courseId = req.params.courseId;
  res.render('courses/view', {courseId:courseId});
};

exports.test = (req, res)=>{
  var courseId = req.params.courseId;
  res.render('courses/test', {courseId:courseId});
};

exports.createTest = (req, res)=>{
  var course = req.params.courseId;
  Test.create(req.body, test=>{
    Course.findById(course, (c)=>{
      c.test = test;
      c.save((c)=>res.redirect(`/creators/dashboard`));
    });
  });
};
