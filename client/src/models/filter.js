var Filter = function() {

}
 
// By one
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


// By Two
// Location + Length
Filter.prototype.locationLengthFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var dataToRender = this.lengthFilter(firstFilter);
    return dataToRender;
    return dataToRender;
}

// Location + Price
Filter.prototype.locationPriceFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var dataToRender = this.priceFilter(firstFilter);
    return dataToRender;
}

// Location + Lang
Filter.prototype.locationLangFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var dataToRender = this.langFilter(firstFilter);
    return dataToRender; 
}

// Lang + Price
Filter.prototype.langPriceFilter = function(searchableData){
    var firstFilter = this.langFilter(searchableData);
    var dataToRender = this.priceFilter(firstFilter);
    return dataToRender; 
}

// Lang + Length
Filter.prototype.langLengthFilter = function(searchableData){
    var firstFilter = this.langFilter(searchableData);
    var dataToRender = this.lengthFilter(firstFilter);
    return dataToRender; 
}

// Length + Price
Filter.prototype.lengthPriceFilter = function(searchableData){
    var firstFilter = this.lengthFilter(searchableData);
    var dataToRender = this.priceFilter(firstFilter);
    return dataToRender; 
}


// By Three
// Location - Lang 2, Price 2, Length 2
// Lang - Location 2, Price 1, Length 1
// Price - Location 2, Lang 1, Length 1

// Location + Lang + Length
Filter.prototype.locationLangLengthFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var secondFilter = this.langFilter(firstFilter);
    var dataToRender = this.lengthFilter(secondFilter);
    return dataToRender; 
}

// Location + Lang + Price
Filter.prototype.locationLangPriceFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var secondFilter = this.langFilter(firstFilter);
    var dataToRender = this.priceFilter(secondFilter);
    return dataToRender; 
}

// Location + Length + Price
Filter.prototype.locationLengthPriceFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var secondFilter = this.lengthFilter(firstFilter);
    var dataToRender = this.priceFilter(secondFilter);
    return dataToRender; 
}

// Lang + Length + Price
Filter.prototype.langLengthPriceFilter = function(searchableData){
    var firstFilter = this.langFilter(searchableData);
    var secondFilter = this.lengthFilter(firstFilter);
    var dataToRender = this.priceFilter(secondFilter);
    return dataToRender; 
}

// Location - Lang 2, Price 2, Length 2
// Lang - Location 2, Price 2, Length 2
// Price - Location 2, Lang 2, Length 2

// All Filter
// Location + Price + Lang + Length
Filter.prototype.allFilter = function(searchableData){
    var firstFilter = this.locationFilter(searchableData);
    var secondFilter = this.priceFilter(firstFilter);
    var thirdFilter = this.langFilter(secondFilter);
    var dataToRender = this.lengthFilter(thirdFilter);
    return dataToRender; 
}


module.exports = Filter;