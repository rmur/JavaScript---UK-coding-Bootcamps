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