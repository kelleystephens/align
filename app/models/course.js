'use strict';

var courses = global.nss.db.collection('courses');
var Mongo = require('mongodb');
var _ = require('lodash');


class Course{
  constructor(obj, creatorId){
    this.title = obj.title;
    this.description = obj.description;
    this.creatorId = creatorId;
    this.test = [];
    this.content = [];
  }

  save(fn){
    courses.save(this, (e,c)=>fn(c));
  }

  findScore(learnerAnswers, fn){
    var test = this.test;
    var total = test.length;
    var totalCorrect = 0;
    test.forEach((a, i)=>{
      var correct = a.correct;
      if(correct === learnerAnswers[i]){
        totalCorrect++;
      }
    });
    var score = (totalCorrect/total) * 100;
    fn(score);
  }

  static findByCourseId(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id:courseId}, (e,course)=>{
      course = _.create(Course.prototype, course);
      fn(course);
    });
  }

  static findAll(fn){
    courses.find().toArray((e, objs)=>{
      var material = objs.map(o=>_.create(Course.prototype, o));
      fn(material);
    });
  }

}

module.exports = Course;
