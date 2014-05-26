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
    console.log('User objects: ');
    console.log(user);

    var userScores = _([user.scores]).flatten().value();

    console.log('userScores: ');
    console.log(userScores);
    courses = _([courses]).flatten().value();
    courses.forEach((c, i)=>{
      var course = c._id;
      console.log('Looping through courses: ');
      console.log(course);
      var index = _.findIndex(userScores, course);
      console.log('Index?');
      console.log(index);
      if(index >= 0){
        c.score = userScores[index].score;
      }
    });

    console.log('Courses: ');
    console.log(courses);

    fn(courses);
  }
}

module.exports = Test;
