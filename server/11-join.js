const elements = ["Fire", "Air", "Water"];

let rta = "";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (elements.indexOf(element) === elements.length-1) {
        rta += `${element}`;
    } else {
        rta += `${element}--`;
    }
}
console.log("rta", rta);

const rta2 = elements.join("--");
console.log("rta2", rta2);

// split
const title = "Curso de manipulacion de Arrays";
console.log("split", title.split(" "));

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log("split and join URL", urlFinal);
