'use strict';

var traceur = require('traceur');
var Course = traceur.require(__dirname + '/../models/course.js');
var Test = traceur.require(__dirname + '/../models/test.js');
var Content = traceur.require(__dirname + '/../models/content.js');
var User = traceur.require(__dirname + '/../models/user.js');

exports.savecontent = (req, res)=>{
  var courseId = req.params.courseId;
  var updates = req.body;
  Course.findByCourseId(courseId, course=>{
    course.update(updates);
    course.save((c)=>{
      var updatedContent = course.content[updates.index];
      res.render('creators/update', {updatedContent:updatedContent});
    });
  });
};

exports.editcontent = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    var courseContent = course.content;
    var courseId = course._id.toString();
    res.render('creators/editcontent', {course:course, courseContents:courseContent, courseId:courseId});
  });
};

exports.scoreTest = (req, res)=>{
  var courseId = req.params.courseId;
  var learnerAnswers = req.body.answer;
  Course.findByCourseId(courseId, course=>{
    course.findScore(learnerAnswers, score=>{
      User.findById(req.session.userId, user=>{
        user.addScore(score, courseId, (user)=>{
          user.save((u)=>res.redirect('/learners/dashboard'));
        });
      });
    });
  });
};

exports.displayTest = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    User.findById(req.session.userId, user=>{
    var questions = course.test;
    res.render('learners/test', {user:user, course:course, courseId:courseId, questions:questions});
    });
  });
};

exports.displayContent = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    User.findById(req.session.userId, user=>{
    var courseContent = course.content;
    var count = course.content.length;
    res.render('learners/content', {user:user, course:course, courseContents:courseContent, count:count});
    });
  });
};

exports.content = (req, res)=>{
  var courseId = req.params.courseId;
  Course.findByCourseId(courseId, course=>{
    User.findById(req.session.userId, user=>{
    res.render('creators/content', {user:user, course:course});
    });
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
