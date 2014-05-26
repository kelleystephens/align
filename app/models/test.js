'use strict';

var _ = require('lodash');
// var Mongo = require('mongodb');

class Test{
  static create(obj, fn){
    var questions = _([obj.q]).flatten().value();
    var a = _([obj.a]).flatten().value();
    var b = _([obj.b]).flatten().value();
    var c = _([obj.c]).flatten().value();
    var d = _([obj.d]).flatten().value();
    var correct = _([obj.correct]).flatten().value();

    var test = questions.map((v,i)=>new Object({q:questions[i], a:a[i], b:b[i], c:c[i], d:d[i], correct:correct[i]}));
    fn(test);
  }

  static findUserScores(user, courses, fn){
    var userScores = _([user.scores]).flatten().value();
    courses = _([courses]).flatten().value();
    courses.forEach((c, i)=>{
      var index = _.find(userScores, {courseId: c._id});

      if(index){
        c.score = index.score;
      }

      // else {
      //   c.score = null;
      // }
    });

    fn(courses);
  }
}

module.exports = Test;
