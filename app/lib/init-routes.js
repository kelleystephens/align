'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var users = traceur.require(__dirname + '/../routes/users.js');
  var creators = traceur.require(__dirname + '/../routes/creators.js');
  var learners = traceur.require(__dirname + '/../routes/learners.js');

  app.get('/', dbg, home.index);

  app.get('/login', dbg, users.index);
  app.post('/create', dbg, users.create);
  app.post('/login', dbg, users.login);
  app.get('/creators/dashboard', dbg, creators.dashboard);
  app.get('/learners/dashboard', dbg, learners.dashboard);

  console.log('Routes Loaded');
  fn();
}
