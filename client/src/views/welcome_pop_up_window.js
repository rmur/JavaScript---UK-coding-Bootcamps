var WelcomePopUpWindow = function(main){
  this.main = main
}

WelcomePopUpWindow.prototype.render = function(){

  this.text = "This is my text in Pop-up Box";

  var popUp = document.getElementById('pop-up');
  var closeButton = document.createElement('button');
  closeButton.id = "close";
  closeButton.innerText = "X";
  closeButton.onclick = function(){
    popUp.style.display = "none"
  }

  var content = document.createElement('p');
  content.id = "content";
  content.innerText= this.text;

  content.appendChild(closeButton);
  popUp.appendChild(content);

  var body = document.querySelector("body");
  body.appendChild(popUp);


}

module.exports = WelcomePopUpWindow;
