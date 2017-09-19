var WelcomePopUpWindow = function(main){
  this.main = main
}

WelcomePopUpWindow.prototype.render = function(){

  this.text = "This is my text in Pop-up Box";

  var popUp = document.getElementById('pop-up');
  // popUp.id = "pop-up";

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


// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }