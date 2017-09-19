var WelcomePopUpWindow = function(main){
  this.main = main
}

WelcomePopUpWindow.prototype.render = function(){

  this.text = "This is my text in Pop-up Box";

  var popUp = document.getElementById('pop-up');


  var closeButton = document.createElement('button');
  closeButton.innerText = "X";
  closeButton.onclick = function(){
    popUp.style.display = "none"
  }

  var pTag = document.createElement('p');
  pTag.innerText= this.text;

  popUp.appendChild(closeButton);
  popUp.appendChild(pTag);

  var body = document.querySelector("body");
  body.appendChild(popUp);


}

module.exports = WelcomePopUpWindow;
