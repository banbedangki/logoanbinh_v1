var introduceCtrl    = require('./IntroduceTrl.js');
var designCtrl       = require('./DesignCtrl.js');
var constructionCtrl = require('./ConstructionCtrl.js');
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

//Construction
module.exports.getConstruction = function(req, res, next){
  constructionCtrl.getConstruction(req, res, next);
}

module.exports.createConstruction = function(req, res, next){
  constructionCtrl.createConstruction(req, res, next);
}

module.exports.editConstruction = function(req, res, next){
  constructionCtrl.editConstruction(req, res, next);
}

module.exports.deleteoneConstruction = function(req, res, next){
  constructionCtrl.editConstruction(req, res, next);
}