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

  update(updates){
    var index = updates.index;
    var front = updates.front;
    var back = updates.back;
    this.content[index].front = front;
    this.content[index].back = back;
  }

  save(fn){
    courses.save(this, (e,c)=>fn(c));
  }

  findScore(learnerAnswers, fn){
    learnerAnswers = _([learnerAnswers]).flatten().value();
    var test = _([this.test]).flatten().value();
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

  get classes(){
    var classes = [];

    if (this.score <= 0 || this.score < 70){
      classes.push('fail');
    } else if (this.score > 70){
      classes.push('pass');
    } else {
      classes.push('none');
    }

    return classes;
  }

  get isRetestAvailable(){
    return this.score < 70;
  }

  static findByCreatorId(creatorId, fn){
    courses.find({creatorId:creatorId}).toArray((e, objs)=>{
      var courses = objs.map(o=>_.create(Course.prototype, o));
      fn(courses);
    });
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
