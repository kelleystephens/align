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

  static findByCourseId(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id:courseId}, (e,course)=>{
      course = _.create(Course.prototype, course);
      fn(course);
    });
  }

}

module.exports = Course;
