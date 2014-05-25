'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Test = traceur.require(__dirname + '/../models/test.js');
var Content = traceur.require(__dirname + '/../models/content.js');

exports.scoreTest = (req, res)=>{

};

exports.displayTest = (req, res)=>{

};

exports.displayContent = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    var courseContent = course.content;
    var count = course.content.length;
    res.render('learners/content', {course:course, courseContents:courseContent, count:count});
  });
};

exports.content = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    res.render('creators/content', {course:course});
  });
};

exports.create = (req, res)=>{
  var course = new Course(req.body, req.session.userId);
  course.save((c)=>res.redirect(`/creators/courses/${c._id}/content`));
};

exports.test = (req, res)=>{
  var courseId = req.params.courseId;
  res.render('creators/test', {courseId:courseId});
};

exports.createContent = (req, res)=>{
  var courseId = req.params.courseId;
  Content.create(req.body, content=>{
    Course.findByCourseId(courseId, (c)=>{
      c.content = content;
      c.save((c)=>res.redirect(`/creators/courses/${courseId}/test`));
    });
  });
};

exports.createTest = (req, res)=>{
  var courseId = req.params.courseId;
  Test.create(req.body, test=>{
    Course.findByCourseId(courseId, (c)=>{
      c.test = test;
      c.save((c)=>res.redirect(`/creators/dashboard`));
    });
  });
};
