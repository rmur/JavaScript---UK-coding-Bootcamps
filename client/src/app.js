var AllBootcampsView = require('./views/all_bootcamps_view.js')
var AjaxRequest = require('./services/ajax_request.js')

var app = function(){
     

    var bootcampsData = new AjaxRequest('http://localhost:3000/api/code-bootcamps')
    var main = document.querySelector("#all-bootcamps");

    var allBootcampsView = new AllBootcampsView(main);
    bootcampsData.get(allBootcampsView.render.bind(allBootcampsView));


};




window.addEventListener('load', app);


