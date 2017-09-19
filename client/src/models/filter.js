var AllBootcampsView = require('../views/all_bootcamps_view.js');

var Filter = function() {

}
 
Filter.prototype.locationFilter = function(searchableData){
// Declare variables
    var dataToRender = [];

    var locationInput = document.querySelector('#locationInput');
    var locationFilter = locationInput.value.toUpperCase();

    for (var mainI = 0; mainI < searchableData.length; mainI++) {
        if (searchableData[mainI].locations.length > 1){
            for (var i = 0; i < searchableData[mainI].locations.length; i++){
                if(searchableData[mainI].locations[i].city.toUpperCase().includes(locationFilter)){
                    dataToRender.push(searchableData[mainI]); }
                }
            } else if (searchableData[mainI].locations[0].city.toUpperCase().includes(locationFilter)){
                dataToRender.push(searchableData[mainI]);
            }
        }
        var main = document.querySelector("#all-bootcamps");
        var allBootcampsView = new AllBootcampsView(main);
        // console.log(dataToRender);
        allBootcampsView.render(dataToRender);
    }
    
Filter.prototype.priceFilter = function(searchableData){
    var dataToRender = [];

    var priceInput = document.querySelector('#priceInput');
    var priceFilter = priceInput.value;
    // console.log(priceFilter)

    for (var i = 0; i < searchableData.length; i++) {
        if(searchableData[i].price[0] <= priceFilter){
            dataToRender.push(searchableData[i]);
        }
        var main = document.querySelector("#all-bootcamps");
        var allBootcampsView = new AllBootcampsView(main);
        allBootcampsView.render(dataToRender);
    }

}

Filter.prototype.langFilter = function(searchableData){
    // Declare variables
        var dataToRender = [];
    
        var langInput = document.querySelector('#langInput');
        var langFilter = langInput.value.toUpperCase();
        console.log(langInput);
        
        for (var mainI = 0; mainI < searchableData.length; mainI++) {
            if (searchableData[mainI].languages.length > 1){
                for (var i = 0; i < searchableData[mainI].languages.length; i++){
                    if(searchableData[mainI].languages[i].toUpperCase().includes(langFilter)){
                        dataToRender.push(searchableData[mainI]); }
                    }
                } else if (searchableData[mainI].languages.length > 0 && searchableData[mainI].languages[0].toUpperCase().includes(langFilter)){
                    dataToRender.push(searchableData[mainI]);
                }
            }
            var main = document.querySelector("#all-bootcamps");
            var allBootcampsView = new AllBootcampsView(main);
            // console.log(dataToRender);
            allBootcampsView.render(dataToRender);
        }


    var lengthInput = document.getElementById('lengthInput');
    var lengthFilter = lengthInput.value;
    // console.log(lengthFilter);













//     var locationInput = document.getElementById('locationInput');
//     var langInput = document.getElementById('langInput');
//     var priceInput = document.getElementById('priceInput');
//     var lengthInput = document.getElementById('lengthInput');

//     var locationFilter = locationInput.value.toUpperCase();
//     var langFilter = langInput.value.toUpperCase();
//     var priceFilter = priceInput.value.toUpperCase();
//     var lengthFilter = lengthInput.value.toUpperCase();

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < searchableData.length; i++) {
        
//         if(locationInput !== undefined){

//         }


//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

module.exports = Filter;