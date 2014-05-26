'use strict';

var _ = require('lodash');

class Content{
  static create(obj, fn){
    var fronts = _([obj.front]).flatten().value();
    var backs = _([obj.back]).flatten().value();

    var content = fronts.map((v,i)=>new Object({front:fronts[i], back:backs[i]}));
    fn(content);
  }

}

module.exports = Content;
