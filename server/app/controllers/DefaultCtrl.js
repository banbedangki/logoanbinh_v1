var introduceCtrl = require('./IntroduceTrl.js');

//Introduce
module.exports.getIntroduces = function(req, res, next){
  introduceCtrl.getIntroduce(req, res, next);
}

module.exports.createIntroduce = function(req, res, next){
  introduceCtrl.createIntroduce(req, res, next);
}
