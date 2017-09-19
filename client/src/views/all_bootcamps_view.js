var AllBootcampsView = function(main){
    this.main = main;
    this.onChange = null;
}

AllBootcampsView.prototype.render = function(data){
   if (data) this.bootcampsData = data;

        for (var i = 0 ; i < this.bootcampsData.length; i++){         
            var articleTag = document.createElement("article");
            var logo = document.createElement("img");
            var bootcampName = document.createElement("h3");
            articleTag.id = i;
            bootcampName.innerText = this.bootcampsData[i].name;
            logo.src = this.bootcampsData[i].logo;
            logo.alt = "Logo of " + this.bootcampsData[i].name;
            // logo.width = 500;
            
            articleTag.appendChild(logo);
            articleTag.appendChild(bootcampName);
            this.main.appendChild(articleTag);
        }

}



module.exports = AllBootcampsView;