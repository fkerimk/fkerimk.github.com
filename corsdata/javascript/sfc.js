//update 1

setInterval(() => {
  
  const storeCards = document.querySelectorAll('.card__main .card__main__corner .help.card-model__feature.--in-store');
  
  storeCards.forEach(card => {
    
    const parent = card.closest("div .c-search-overlay__grid .grid.grid-cards.c-grid.--fullscreen .c-grid__items.items .c-grid__item.item.item");
    if (parent) parent.style.display = "none";
  });
  
}, 100);