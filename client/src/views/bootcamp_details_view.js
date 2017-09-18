var BootcampDetailsView = function(detailsElement) {
    this.detailsElement = detailsElement;
  }
  
  BootcampDetailsView.prototype.render = function(bootcamp){

    while (this.detailsElement.hasChildNodes()) {
        this.detailsElement.removeChild(main.lastChild);
    }

    var logo = document.createElement("img");
    var nameTag = document.createElement("h1");
    var priceTag = document.createElement("h2");
    var weeksTag = document.createElement("h2");
    var langTag = document.createElement("h3");
    var coreSkillsTag = document.createElement("h3");
    var locationsTag = document.createElement("h4");
    var tasterTag = document.createElement("p");
    var otherSection = document.createElement("section");
    
    var fundingTag = document.createElement("p");

    if (bootcamp.depositAmount > 0){
    var depositTag = document.createElement("p");
    }
    if (bootcamp.qualification === true){
        var qualificationTag = document.createElement("p");
        }
    var descTag = document.createElement("p");
    var addressTag = document.createElement("p");
    var websiteTag = document.createElement("a");

    logo.src = bootcamp.logo;
    nameTag.innerText = bootcamp.name;
    priceTag.innerText = "Price: £" + bootcamp.price[0];
    weeksTag.innerText = "Length in Weeks: " + bootcamp.lengthWeeks;

    languagesString = "Languages: "
    for(var i = 0; i < bootcamp.languages.length; i++){
        if(i === (bootcamp.languages.length - 1)){
            languagesString + bootcamp.languages[i];
        } else {
            languagesString + bootcamp.languages[i] + ", ";
        }
    }
    langTag.innerText = languagesString;
    
    coreSkillsString = "Core Skills: "
    for(var i = 0; i < bootcamp.coreSkills.length; i++){
        if(i === (bootcamp.coreSkills.length - 1)){
            coreSkillsString + bootcamp.coreSkills[i];
        } else {
            coreSkillsString + bootcamp.coreSkills[i] + ", ";
        }
    }
    coreSkillsTag.innerText = coreSkillsString;


    locationsString = "Locations: "
    for(var i = 0; i < bootcamp.locations.length; i++){
        if(i === (bootcamp.locations.length - 1)){
            locationsString + bootcamp.locations[i].city;
        } else {
            locationsString + bootcamp.locations[i].city + ", ";
        }
    }
    locationsTag.innerText = locationsString

    if (bootcamp.taster){
        tasterTag.innerText = "Taster Session Available"
    }
    
    if (bootcamp.qualification){
        qualificationTag.innerText = "Qualification: " + bootcamp.qualificationName
    }
    
    if (bootcamp.fundingOptions.length !== 0){
        fundingString = "Funding Options: "
        for(var i = 0; i < bootcamp.fundingOptions.length; i++){
            if(i === (bootcamp.fundingOptions.length - 1)){
                fundingString + bootcamp.fundingOptions[i];
            } else {
                fundingString + bootcamp.fundingOptions[i] + ", ";
            }
        }
        fundingTag.innerText = fundingString
    }
    
    if (bootcamp.locations.length > 1){
        addressString = "Addresses: <br>"
        for(var i = 0; i < bootcamp.locations.length; i++){
            if(i === (bootcamp.locations.length - 1)){
                addressString + bootcamp.locations[i].address;
            } else {
                addressString + bootcamp.locations[i].address + "<br>";
            }
        } 
    } else {
        addressString = "Address: <br>"
        addressString + bootcamp.locations[0].address;
    } 
    addressTag.innerHTML = addressString
    
    
    descTag.innerText = bootcamp.details
    
    websiteTag.innerText = bootcamp.website


    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }

    var main = document.querySelector('#all-bootcamps');
    this.detailsElement.appendChild(wholeArticle);
    window.scrollTo(0, 0);
  } 