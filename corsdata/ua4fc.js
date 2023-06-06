//update 5
const HIDE_PREMIUM = false;

//Get asset list
var url = "https://fkerimk.github.io/corsdata/assets.txt"; assetsTXT = "";
fetch(url, {cache: "no-cache"}).then((response) => response.text().then(function(text) { console.log(assetsTXT = text); }));

//Mark/Hide premium assets
const premiumAssetPosts = document.querySelectorAll(".tag-premium");
premiumAssetPosts.forEach(item => {
  
  item.style.filter = "sepia(1) hue-rotate(-45deg) saturate(200%) brightness(0.75)";
  item.style.backgroundColor = "#f77f";
  
  if (HIDE_PREMIUM) item.style.display = "none";
});

//100ms Interval
setInterval(() => {
  
  //Mark drive assets
  const assetPosts = document.querySelectorAll(".post");
  
  const assetsTXTsplit = assetsTXT.split(">");
  
  assetPosts.forEach(post => {
    
                 var entryTitle = post.querySelectorAll("h2 a") == null ? null : post.querySelectorAll("h2 a")[0];
    if (!entryTitle) entryTitle = post.querySelectorAll("h3 a") == null ? null : post.querySelectorAll("h3 a")[0];
    
    if (entryTitle) {
      
      const title = entryTitle.innerHTML.trim();

      if (assetsTXTsplit.some(asset => asset.length > 33 && title == asset.split("<")[0].trim())) {
       
        const parent = entryTitle.parentNode;
        const post = parent.closest(".post");
        
        const drive = assetsTXTsplit.find(asset => asset.length > 33 && title == asset.split("<")[0].trim()).split("<")[1].trim();
        const isPremium = post.classList.contains("tag-premium");
        
        const driveElement = parent.querySelectorAll("#drive") == null ? null : parent.querySelectorAll("#drive")[0];
        
        if (!driveElement){
          
          const newDriveElement = parent.appendChild(document.createElement('a'));
          newDriveElement.setAttribute("id", "drive");
          newDriveElement.setAttribute("href", "https://drive.google.com/file/d/" + drive);
          newDriveElement.setAttribute("target", "_blank");
          newDriveElement.setAttribute("style", "margin-left:5px;");
          
          const driveImageElement = newDriveElement.appendChild(document.createElement('img'));
          driveImageElement.setAttribute("width", "32");
          driveImageElement.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png");
        
          if (isPremium) {
            
            const kappa = newDriveElement.appendChild(document.createElement('img'));
            kappa.setAttribute("width", "32");
            kappa.setAttribute("src", "https://i.kym-cdn.com/photos/images/newsfeed/000/925/494/218.png_large");
          }
        }
        
        if (isPremium) {
          
          post.style.zIndex = "1";
          post.style.filter = "none";
          post.style.display = "block";
          post.style.boxShadow = "0px 0px 10px 5px #0ff";
          post.style.backgroundColor = "#0ff5";
          
        } else {
          
          post.style.zIndex = "1";
          post.style.boxShadow = "0px 0px 10px 5px #0f0";
          post.style.backgroundColor = "#0f05";
        }
      }
    }
  });
  
}, 100);