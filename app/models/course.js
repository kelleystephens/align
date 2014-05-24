'use strict';

var courses = global.nss.db.collection('courses');
var Mongo = require('mongodb');

class Course{
  constructor(obj, creatorId){
    this.title = obj.title;
    this.description = obj.description;
    this.creatorId = creatorId;
    this.test = [];
  }

  save(fn){
    courses.save(this, (e,c)=>fn(c));
  }

  static findByCourseId(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id:courseId}, (e,c)=>{
      fn(c);
    });
  }

}

module.exports = Course;
