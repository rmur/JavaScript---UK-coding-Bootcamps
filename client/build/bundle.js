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

var AllBootcampsView = __webpack_require__(1);
var BootcampDetailsView = __webpack_require__(3);
var AjaxRequest = __webpack_require__(2);

var app = function(){
     
    var detailsTag = document.querySelector("#bootcamp-details");
    var bootcampDetailsView = new BootcampDetailsView(detailsTag);

    var bootcampsData = new AjaxRequest('http://localhost:3000/api/code-bootcamps')
    var main = document.querySelector("#all-bootcamps");

    var allBootcampsView = new AllBootcampsView(main);
    bootcampsData.get(allBootcampsView.render.bind(allBootcampsView));

    allBootcampsView.main.addEventListener("click", function(event){
        var chosenCamp = bootcampsData.data[event.path[1].id]
        console.log(chosenCamp);
        console.log(event.path[1].id);
        bootcampDetailsView.render(chosenCamp);
    })

    


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
            articleTag.id = i;
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
       this.data = bootcamps;
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var BootcampDetailsView = function(detailsElement) {
    this.detailsElement = detailsElement;
  }
  
  BootcampDetailsView.prototype.render = function(bootcamp){
    console.log(this);
    this.detailsElement.innerText = ""
    // while (this.detailsElement.hasChildNodes()) {
    //     this.detailsElement.removeChild(main.lastChild);
    // }

    var logo = document.createElement("img");
    var nameTag = document.createElement("h1");
    var priceTag = document.createElement("h2");
    var weeksTag = document.createElement("h2");
    var langTag = document.createElement("h3");
    var coreSkillsTag = document.createElement("h3");
    var locationsTag = document.createElement("h4");
    var tasterTag = document.createElement("p");
    
    var fundingTag = document.createElement("p");

    var descTag = document.createElement("p");
    var addressTag = document.createElement("p");
    var websiteTag = document.createElement("a");

    logo.src = bootcamp.logo;
    nameTag.innerText = bootcamp.name;
    priceTag.innerText = "Price: £" + bootcamp.price[0];
    weeksTag.innerText = "Length in Weeks: " + bootcamp.lengthWeeks;

    languagesString = "Languages: "
    for(var i = 0; i < bootcamp.languages.length; i++){
        if(i === (bootcamp.languages.length - 1)){
            languagesString += bootcamp.languages[i];
        } else {
            languagesString += bootcamp.languages[i] + ", ";
            console.log(languagesString);
        }
    }
    langTag.innerText = languagesString;
    
    
    coreSkillsString = "Core Skills: "
    for(var i = 0; i < bootcamp.coreSkills.length; i++){
        if(i === (bootcamp.coreSkills.length - 1)){
            coreSkillsString += bootcamp.coreSkills[i];
        } else {
            coreSkillsString += bootcamp.coreSkills[i] + ", ";
        }
    }
    coreSkillsTag.innerText = coreSkillsString;


    locationsString = "Locations: "
    for(var i = 0; i < bootcamp.locations.length; i++){
        if(i === (bootcamp.locations.length - 1)){
            locationsString += bootcamp.locations[i].city;
        } else {
            locationsString += bootcamp.locations[i].city + ", ";
        }
    }
    locationsTag.innerText = locationsString

    if (bootcamp.taster){
        tasterTag.innerText = "Taster Session Available"
    }
    
    if (bootcamp.locations.length > 1){
        addressString = "Addresses: <br>"
        for(var i = 0; i < bootcamp.locations.length; i++){
            if(i === (bootcamp.locations.length - 1)){
                addressString += bootcamp.locations[i].address;
            } else {
                addressString += bootcamp.locations[i].address + "<br>";
            }
        } 
    } else {
        addressString = "Address: <br>"
        addressString + bootcamp.locations[0].address;
    } 
    addressTag.innerHTML = addressString
    
    
    descTag.innerText = bootcamp.details
    
    websiteTag.href = bootcamp.website
    websiteTag.innerText = "Website"

    var allDetailsTag = document.createElement("article");
    var priceLengthBox = document.createElement("section");
    var skillsBox = document.createElement("section");
    var otherSection = document.createElement("section");

    var descriptiveBox = document.createElement("section");
    var locationsBox = document.createElement("section");

    var mapBox = document.createElement("section");
    var addressWebBox = document.createElement("section");

    priceLengthBox.appendChild(priceTag);
    priceLengthBox.appendChild(weeksTag);
    skillsBox.appendChild(langTag);
    skillsBox.appendChild(coreSkillsTag);
    skillsBox.appendChild(tasterTag);

    if (bootcamp.qualification){
        var qualificationTag = document.createElement("p");
        qualificationTag.innerText = "Qualification: " + bootcamp.qualificationName
        descriptiveBox.appendChild(qualificationTag);
    }

    if (bootcamp.depositAmount > 0){
        var depositTag = document.createElement("p");
        depositTag.innerText = "Deposit: " + bootcamp.depositAmount;
        descriptiveBox.appendChild(depositTag);
    }

    if (bootcamp.fundingOptions.length !== 0){
        fundingString = "Funding Options: "
        for(var i = 0; i < bootcamp.fundingOptions.length; i++){
            if(i === (bootcamp.fundingOptions.length - 1)){
                fundingString += bootcamp.fundingOptions[i];
            } else {
                fundingString += bootcamp.fundingOptions[i] + ", ";
            }
        }
        fundingTag.innerText = fundingString;
        descriptiveBox.appendChild(fundingTag);
    }

    descriptiveBox.appendChild(descTag);
    addressWebBox.appendChild(addressTag);
    addressWebBox.appendChild(websiteTag);
    allDetailsTag.appendChild(priceLengthBox);
    allDetailsTag.appendChild(skillsBox);
    otherSection.appendChild(descriptiveBox);
    locationsBox.appendChild(mapBox);
    locationsBox.appendChild(addressWebBox);
    locationsBox.appendChild(mapBox);
    otherSection.appendChild(locationsBox);
    allDetailsTag.appendChild(otherSection);
    this.detailsElement.appendChild(allDetailsTag);

    var allBootcamps = document.querySelector('#all-bootcamps');
    while (allBootcamps.hasChildNodes()) {
        allBootcamps.removeChild(allBootcamps.lastChild);
    }

    
    window.scrollTo(0, 0);
  }

  module.exports = BootcampDetailsView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map