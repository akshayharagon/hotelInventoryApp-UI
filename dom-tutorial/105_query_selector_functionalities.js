// change text
// textContent and innerText

const mainHeading = document.querySelector('#main-heading');
console.log(mainHeading.textContent); //returns entire text inside the element(including child elements) even hidden

// mainHeading.textContent ='This is something else';
console.log(mainHeading.textContent); 


console.log(mainHeading.innerText); //will return text related to it's own element only
