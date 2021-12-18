const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

let newArray = [...elements];
for (let i = 0; i < othersElements.length; i++) {
    const otherElement = othersElements[i];
    newArray.push(otherElement);
}
console.log("cancatFor", newArray);

const rta2 = elements.concat(othersElements);
console.log("rta2", rta2);

// spred operator 
const rta3 = [...elements, ...othersElements];
console.log("rta3", rta3);

// warning with string
const rta4 = [...elements, ..."random"];
console.log("rta4", rta4);

// Cambiando el array original
elements.push(othersElements);
console.log("elements", elements);

// correct form
elements.push(...othersElements);
console.log("correct element", elements);