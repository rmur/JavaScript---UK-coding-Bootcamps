/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var AllBootcampsView = __webpack_require__(1)
var AjaxRequest = __webpack_require__(2)

var app = function(){
     

    var bootcampsData = new AjaxRequest('http://localhost:3000/api/code-bootcamps')
    var main = document.querySelector("#all-bootcamps");

    var allBootcampsView = new AllBootcampsView(main);
    bootcampsData.get(allBootcampsView.render.bind(allBootcampsView));


};




window.addEventListener('load', app);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

var AllBootcampsView = function(main){
    this.main = main;
    console.log(this.main);
    this.onChange = null;
}

AllBootcampsView.prototype.render = function(data){
   if (data) this.bootcampsData = data;

        for (var i = 0 ; i < this.bootcampsData.length; i++){         
            var articleTag = document.createElement("article");
            var logo = document.createElement("img");
            var bootcampName = document.createElement("h3");
         
            bootcampName.innerText = this.bootcampsData[i].name;
            logo.src = this.bootcampsData[i].logo;
            logo.alt = "Logo of " + this.bootcampsData[i].name;
            logo.width = 500;
            
            articleTag.appendChild(logo);
            articleTag.appendChild(bootcampName);
            this.main.appendChild(articleTag);
        }

}



module.exports = AllBootcampsView;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var AjaxRequest= function(url) {
    this.url = url;
    this.data = [];
    this.onUpdate = null;
  }
  
  AjaxRequest.prototype.get = function(callback) {
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        var bootcamps = JSON.parse(jsonString);
        if (bootcamps[0] && !bootcamps[0].id) {
          for (var i = 0 ; i < bootcamps.length; i++) {
            bootcamps[i].id = i;
          }
       }
      callback(bootcamps);
      }
    }.bind(this);
    request.send();
  }
  
  AjaxRequest.prototype.post = function(callback, data) {
  
    var request = new XMLHttpRequest();
    request.open("POST", this.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        callback(JSON.parse(jsonString));
      }
    }.bind(this);
    request.send(JSON.stringify(data));
  }
  
  AjaxRequest.prototype.delete = function(index) {
  
    var request = new XMLHttpRequest();
    request.open("DELETE", this.url + "/" + index);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        this.characters = JSON.parse(jsonString);
      }
    }.bind(this);
    request.send();
  }
  
  module.exports = AjaxRequest;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map