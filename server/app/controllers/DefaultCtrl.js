var introduceCtrl = require('./IntroduceTrl.js');
var designCtrl    = require('./DesignCtrl.js');

//Introduce
module.exports.getIntroduces = function(req, res, next){
  introduceCtrl.getIntroduce(req, res, next);
}

module.exports.createIntroduce = function(req, res, next){
  introduceCtrl.createIntroduce(req, res, next);
}

module.exports.editIntroduce = function(req, res, next){
  introduceCtrl.editIntroduce(req, res, next);
}

module.exports.deleteoneIntroduce = function(req, res, next){
  introduceCtrl.deleteoneIntroduce(req, res, next);
}

//Design
module.exports.getDesign = function(req, res, next){
  designCtrl.getDesigns(req, res, next);
}

module.exports.createDesign = function(req, res, next){
  designCtrl.createDesign(req, res, next);
}

module.exports.editDesign = function(req, res, next){
  designCtrl.editDesign(req, res, next);
}

module.exports.deleteoneDesign = function(req, res, next){
  designCtrl.deleteoneDesign(req, res, next);
}
