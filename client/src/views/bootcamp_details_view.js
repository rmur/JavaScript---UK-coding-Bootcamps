var BootcampDetailsView = function(detailsElement) {
    this.detailsElement = detailsElement;
  }
  
  BootcampDetailsView.prototype.render = function(bootcamp){
    console.log(this);
    this.detailsElement.innerText = ""
    // while (this.detailsElement.hasChildNodes()) {
    //     this.detailsElement.removeChild(main.lastChild);
    // }

    var logo = document.createElement("img");
    var nameTag = document.createElement("h1");
    var priceTag = document.createElement("h2");
    var weeksTag = document.createElement("h2");
    var langTag = document.createElement("h3");
    var coreSkillsTag = document.createElement("h3");
    var locationsCostTag = document.createElement("p");
    var totalCostTag = document.createElement("p");
    var tasterTag = document.createElement("p");
    
    var fundingTag = document.createElement("p");

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
            languagesString += bootcamp.languages[i];
        } else {
            languagesString += bootcamp.languages[i] + ", ";
            console.log(languagesString);
        }
    }
    langTag.innerText = languagesString;
    
    
    coreSkillsString = "Core Skills: "
    for(var i = 0; i < bootcamp.coreSkills.length; i++){
        if(i === (bootcamp.coreSkills.length - 1)){
            coreSkillsString += bootcamp.coreSkills[i];
        } else {
            coreSkillsString += bootcamp.coreSkills[i] + ", ";
        }
    }
    coreSkillsTag.innerText = coreSkillsString;

    if (bootcamp.taster){
        tasterTag.innerText = "Taster Session Available"
    }
    
    if (bootcamp.locations.length > 1){
        addressString = "Addresses: <br>"
        for(var i = 0; i < bootcamp.locations.length; i++){
            if(i === (bootcamp.locations.length - 1)){
                addressString += bootcamp.locations[i].address;
            } else {
                addressString += bootcamp.locations[i].address + "<br>";
            }
        } 
    } else {
        addressString = "Address: <br>"
        addressString + bootcamp.locations[0].address;
    } 
    addressTag.innerHTML = addressString
    
    
    descTag.innerText = bootcamp.details
    
    websiteTag.href = bootcamp.website
    websiteTag.innerText = "Website"

    var allDetailsTag = document.createElement("article");
    var priceLengthBox = document.createElement("section");
    var skillsBox = document.createElement("section");
    var otherSection = document.createElement("section");

    var descriptiveBox = document.createElement("section");
    var locationsBox = document.createElement("section");

    var mapBox = document.createElement("section");
    var addressWebBox = document.createElement("section");

    priceLengthBox.appendChild(priceTag);
    priceLengthBox.appendChild(weeksTag);
    skillsBox.appendChild(langTag);
    skillsBox.appendChild(coreSkillsTag);
    skillsBox.appendChild(tasterTag);

    if (bootcamp.qualification){
        var qualificationTag = document.createElement("p");
        qualificationTag.innerText = "Qualification: " + bootcamp.qualificationName
        descriptiveBox.appendChild(qualificationTag);
    }

    if (bootcamp.depositAmount > 0){
        var depositTag = document.createElement("p");
        depositTag.innerText = "Deposit: " + bootcamp.depositAmount;
        descriptiveBox.appendChild(depositTag);
    }

    if (bootcamp.fundingOptions.length !== 0){
        fundingString = "Funding Options: "
        for(var i = 0; i < bootcamp.fundingOptions.length; i++){
            if(i === (bootcamp.fundingOptions.length - 1)){
                fundingString += bootcamp.fundingOptions[i];
            } else {
                fundingString += bootcamp.fundingOptions[i] + ", ";
            }
        }
        fundingTag.innerText = fundingString;
        descriptiveBox.appendChild(fundingTag);
    }

    locationsString = "Cost of Living: "
    totalCostString = "Total Cost: "
    for(var i = 0; i < bootcamp.locations.length; i++){
        if(i === (bootcamp.locations.length - 1)){
            locationsString += "£" + bootcamp.locations[i].costOfLiving;            
            locationsString += " (" + bootcamp.locations[i].city + ")";

            locationTotal =  bootcamp.locations[i].costOfLiving + bootcamp.price[0];
            console.log(locationTotal);
            totalCostString += "£" + locationTotal; 
            totalCostString += " (" + bootcamp.locations[i].city + ")"

        } else {
            locationsString += "£" + bootcamp.locations[i].costOfLiving;            
            locationsString += " (" + bootcamp.locations[i].city + ")" + ", ";

            locationTotal =  bootcamp.locations[i].costOfLiving + bootcamp.price[0];
            console.log(locationTotal);
            totalCostString += "£" + locationTotal;
            totalCostString +=  " (" + bootcamp.locations[i].city + ")" + ", ";
        }
    }
<<<<<<< Updated upstream
    locationsTag.innerText = locationsString
    
=======
    locationsCostTag.innerText = locationsString;
    totalCostTag.innerText = totalCostString
>>>>>>> Stashed changes

    
    descriptiveBox.appendChild(locationsCostTag);
    descriptiveBox.appendChild(totalCostTag);
    descriptiveBox.appendChild(descTag);
    addressWebBox.appendChild(addressTag);
    addressWebBox.appendChild(websiteTag);
    allDetailsTag.appendChild(priceLengthBox);
    allDetailsTag.appendChild(skillsBox);
    otherSection.appendChild(descriptiveBox);
    locationsBox.appendChild(mapBox);
    locationsBox.appendChild(addressWebBox);
    locationsBox.appendChild(mapBox);
    otherSection.appendChild(locationsBox);
    allDetailsTag.appendChild(otherSection);
    this.detailsElement.appendChild(allDetailsTag);

    var allBootcamps = document.querySelector('#all-bootcamps');
    while (allBootcamps.hasChildNodes()) {
        allBootcamps.removeChild(allBootcamps.lastChild);
    }

    
    window.scrollTo(0, 0);
  }

  module.exports = BootcampDetailsView;