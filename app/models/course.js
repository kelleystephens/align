'use strict';

var courses = global.nss.db.collection('courses');
var Mongo = require('mongodb');

class Course{
  constructor(obj, creatorId){
    this.title = obj.title;
    this.description = obj.description;
    this.creatorId = creatorId;
  }

  save(fn){
    courses.save(this, (e,c)=>fn(c));
  }

  static findById(courseId, fn){
    courseId = Mongo.ObjectID(courseId);
    courses.findOne({_id: courseId}, (e, course)=>{
        fn(course);
      });
  }

}

module.exports = Course;
