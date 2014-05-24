'use strict';

var _ = require('lodash');

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

}

module.exports = Test;
