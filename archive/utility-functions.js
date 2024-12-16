//
function display(message) {
   document.write(message);
}

function output1(message) {
window.outputTag1.innerHTML = message;
}

function output2(message) {
   window.outputTag2.innerHTML = message;
   }

function outputQotd(message) {
      window.outputQotdTag.innerHTML = message;
}


//AUTOMATICALLY CREATE BOOTSTRAPPED CARDS ON THE PORTFOLIO PAGE
function bootstrapPortfolioCard(card) {  
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

//  function bootstrapCard(card) {  
//    //declare cardString variable that outputs HTML with Bootstrap CSS and pulls card data from an array
//    const cardString = `<div class="card m-4 p-4 bg-dark text-light">
//                             <img class="card-img-top" 
//                                 id="${card.id}"
//                              <div class="card-body">
//                                 <h5 class="card-title p-1">${card.title}</h5>
//                                 <p class="card-text p-1">${card.description}</p>
//                                 <a class="card-text p-1" href="${card.form}" target="_blank">${card.linkName}</a>
//                             </div>
//                         </div>`;
//     return cardString;
//   }
