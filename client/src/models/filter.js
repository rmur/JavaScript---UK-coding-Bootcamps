var AllBootcampsView = require('../views/all_bootcamps_view.js');

var Filter = function() {

}
 
Filter.prototype.locationFilter = function(searchableData){
    var dataToRender = [];
    var locationInput = document.querySelector('#locationInput');
    var locationFilter = locationInput.value.toUpperCase();

    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].locations.length > 1){
            for (var i = 0; i < searchableData[mainI].locations.length; i++){
                if(searchableData[mainI].locations[i].city.toUpperCase().includes(locationFilter)){
                    dataToRender.push(searchableData[mainI]); 
                } 
            }   
        } else if (searchableData[mainI].locations[0].city.toUpperCase().includes(locationFilter)){
            dataToRender.push(searchableData[mainI]);
        }
    }   
    return dataToRender;
}
    
Filter.prototype.priceFilter = function(searchableData){
    var dataToRender = [];
    var priceInput = document.querySelector('#priceInput');
    var priceFilter = priceInput.value;

    for (var i = 0; i < searchableData.length; i++) {
        if(searchableData[i].price[0] <= priceFilter){
            dataToRender.push(searchableData[i]);
        }
    }
    return dataToRender;
}


Filter.prototype.langFilter = function(searchableData){
    var dataToRender = [];
    var langInput = document.querySelector('#langInput');
    var langFilter = langInput.value.toUpperCase();
    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].languages.length > 1){
            for (var i = 0; i < searchableData[mainI].languages.length; i++){
                if(searchableData[mainI].languages[i].toUpperCase().includes(langFilter)){
                        dataToRender.push(searchableData[mainI]); 
                } 
            }
        } else if (searchableData[mainI].languages.length > 0 && searchableData[mainI].languages[0].toUpperCase().includes(langFilter)){
            dataToRender.push(searchableData[mainI]);
        }
    }
    return dataToRender;
}

Filter.prototype.lengthFilter = function(searchableData){
    var dataToRender = [];
    var lengthInput = document.getElementById('lengthInput');
    var lengthFilter = lengthInput.value;

    for (var i = 0; i < searchableData.length; i++) {
        if(searchableData[i].lengthWeeks <= lengthFilter){
            dataToRender.push(searchableData[i]);
        }
    }
    return dataToRender;
}

Filter.prototype.locationLengthFilter = function(searchableData){
    var firstFilter = [];
    var dataToRender = [];
    var locationInput = document.querySelector('#locationInput');
    var locationFilter = locationInput.value.toUpperCase();
    var lengthInput = document.getElementById('lengthInput');
    var lengthFilter = lengthInput.value;
    
    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].locations.length > 1){
            for (var i = 0; i < searchableData[mainI].locations.length; i++){
                if(searchableData[mainI].locations[i].city.toUpperCase().includes(locationFilter)){
                    firstFilter.push(searchableData[mainI]); 
                }
            }
        } else if (searchableData[mainI].locations[0].city.toUpperCase().includes(locationFilter)){
            firstFilter.push(searchableData[mainI]);
        }
    }
    for (var i = 0; i < firstFilter.length ; i++) {
        if(firstFilter[i].lengthWeeks <= lengthFilter){
            dataToRender.push(firstFilter[i]);
        }
    }
    return dataToRender;
}

Filter.prototype.locationPriceFilter = function(searchableData){
    var firstFilter = [];
    var dataToRender = [];
    var locationInput = document.querySelector('#locationInput');
    var locationFilter = locationInput.value.toUpperCase();
    var priceInput = document.querySelector('#priceInput');
    var priceFilter = priceInput.value;

    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].locations.length > 1){
            for (var i = 0; i < searchableData[mainI].locations.length; i++){
                if(searchableData[mainI].locations[i].city.toUpperCase().includes(locationFilter)){
                    firstFilter.push(searchableData[mainI]); 
                } 
            }   
        } else if (searchableData[mainI].locations[0].city.toUpperCase().includes(locationFilter)){
            firstFilter.push(searchableData[mainI]);
        }
    } 
    for (var i = 0; i < firstFilter.length ; i++) {
        if(firstFilter[i].price[0] <= priceFilter){
            dataToRender.push(firstFilter[i]);
        }
    }
    return dataToRender;
}

Filter.prototype.locationLangFilter = function(searchableData){
    var firstFilter = [];
    var dataToRender = [];
    var locationInput = document.querySelector('#locationInput');
    var locationFilter = locationInput.value.toUpperCase();
    var langInput = document.querySelector('#langInput');
    var langFilter = langInput.value.toUpperCase();

    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].locations.length > 1){
            for (var i = 0; i < searchableData[mainI].locations.length; i++){
                if(searchableData[mainI].locations[i].city.toUpperCase().includes(locationFilter)){
                    firstFilter.push(searchableData[mainI]); 
                } 
            }   
        } else if (searchableData[mainI].locations[0].city.toUpperCase().includes(locationFilter)){
            firstFilter.push(searchableData[mainI]);
        }
    }
    for (var mainI = 0; mainI < firstFilter.length; mainI++) {
        if (firstFilter[mainI].languages.length > 1){
            for (var i = 0; i < firstFilter[mainI].languages.length; i++){
                if(firstFilter[mainI].languages[i].toUpperCase().includes(langFilter)){
                        dataToRender.push(firstFilter[mainI]); 
                } 
            }
        } else if (firstFilter[mainI].languages.length > 0 && firstFilter[mainI].languages[0].toUpperCase().includes(langFilter)){
            dataToRender.push(firstFilter[mainI]);
        }
    }
    return dataToRender; 



}


module.exports = Filter;