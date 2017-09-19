var FavouritesView = function(main){
    this.main = main;
    this.onChange = null;
}

FavouritesView.prototype.render = function(data){
   if (data) this.favouritesData = data;

   var favTitleTag = document.createElement("h2");
   favTitleTag.innerText = "Favourites"
   this.main.appendChild(favTitleTag);


        for (var i = 0 ; i < this.favouritesData.length; i++){         
            var articleTag = document.createElement("article");
            var logo = document.createElement("img");
            var bootcampName = document.createElement("h3");
            articleTag.id = i;
            bootcampName.innerText = this.favouritesData[i].name;
            logo.src = this.favouritesData[i].logo;
            logo.alt = "Logo of " + this.favouritesData[i].name;
            // logo.width = 500;
            
            articleTag.appendChild(logo);
            articleTag.appendChild(bootcampName)
            var favTitleTag = document.createElement("h2");
            favTitleTag.innerText = "Favourites"
            this.main.appendChild(articleTag);
        }

}



module.exports = FavouritesView;