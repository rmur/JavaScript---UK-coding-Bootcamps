var WelcomePopUpWindow = function(main){
  this.main = main
}

WelcomePopUpWindow.prototype.render = function(){
  var headerText = "This is header!"
  this.text = "This is my text in Pop-up Box";

  var popUp = document.getElementById('pop-up');

  var popUpContent = document.createElement('article');
  popUpContent.id = "popUpWindow";

  var header = document.createElement('h1');
  header.innerText= headerText;

  var closeButton = document.createElement('button');
  closeButton.id = "close";
  closeButton.innerText = "OK";
  closeButton.onclick = function(){
    popUp.style.display = "none"
  }

  var content = document.createElement('p');
  content.id = "content";
  content.innerText= this.text;

  popUpContent.appendChild(header);
  popUpContent.appendChild(content);
  popUpContent.appendChild(closeButton);

  popUp.appendChild(popUpContent);

  var body = document.querySelector("body");
  body.appendChild(popUp);


}

module.exports = WelcomePopUpWindow;
