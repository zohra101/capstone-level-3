//AUTOMATICALLY CREATE BOOTSTRAPPED CARDS ON THE PORTFOLIO PAGE
function bootstrapCard(card) {  
   //declare cardString variable that outputs HTML with Bootstrap CSS and pulls card data from an array
   const cardString = `<div class="card m-4 p-4 bg-dark text-light">
                            <img class="card-img-top" 
                                id="${card.id}"
                                src="${card.src}"
                                alt="${card.title}"/>
                             <div class="card-body">
                                <h5 class="card-title p-1">${card.title}</h5>
                                <p class="card-text p-1">${card.description}</p>
                            </div>
                        </div>`;
    return cardString;
 } 