var AllBootcampsView = require('./views/all_bootcamps_view.js');
var BootcampDetailsView = require('./views/bootcamp_details_view.js');
var FavouritesView = require('./views/favourites_view.js');
var AjaxRequest = require('./services/ajax_request.js');
var Filter = require('./models/filter.js');
var WelcomePopUpWindow = require('./views/welcome_pop_up_window.js') // require pop up window

var app = function(){

    var welcomePopUpWindow = new WelcomePopUpWindow(main);
    welcomePopUpWindow.render();


    var favouritesData = new AjaxRequest('http://localhost:3000/favourites');
    var favouritesTag = document.querySelector("#favourites");
    var favouritesView = new FavouritesView(favouritesTag);
    favouritesData.get(favouritesView.render.bind(favouritesView));

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

    });

    var locationInput = document.querySelector("#locationInput");
    locationInput.addEventListener("keyup", function(){
        // console.log(this);
        // console.log(bootcampsData.data);

        if(this !== ""){
            filter = new Filter()
            filter.locationFilter(bootcampsData.data);
        }
        
    })

    var priceInput = document.querySelector("#priceInput");
    priceInput.addEventListener("input", function(){
        console.log(this);
        console.log(bootcampsData.data);

            filter = new Filter()
            filter.priceFilter(bootcampsData.data);
        
    })

    var lengthInput = document.querySelector("#lengthInput");
    lengthInput.addEventListener("input", function(){
        console.log(this);
        console.log(bootcampsData.data);

            filter = new Filter()
            filter.lengthFilter(bootcampsData.data);
    })


    var logo = document.querySelector("#logo");
    logo.addEventListener("click", function(){
        allBootcampsView.render(bootcampsData.data)
    })


};




window.addEventListener('load', app);


