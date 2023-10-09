//Update 1
setInterval(() => {
  
  //Remove applied jobs
  const itemsToRemove = document.querySelectorAll(".job-card-container__footer-item--highlighted");
  
  itemsToRemove.forEach(item => {

    const parent = item.closest(".jobs-search-results__list-item");
    
    if (parent)
      parent.style.display = "none";
  });
  
}, 100);