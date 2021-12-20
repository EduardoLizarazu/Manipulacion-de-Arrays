const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}
console.log("for", newArray);

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2]],
    [7,8,9]
];

function manualFlat(array) {
    console.log("Contador");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!Array.isArray(element)) { // !true
            console.log("Llegue al newArray");
            console.log(element); // 1 2 3

            newArray.push(element);
        } else {
            console.log("Llegue al manualFlar");
            console.log(element); // [1,2,3]
            console.log(Array.isArray(element)); // true
            
            return manualFlat(element);
        }
    }
    return newArray;
}
// console.log("manualFunction", manualFlat(matriz));

// Reto 1 resuelto

const profundidad = list => {
    let newArray = [];
    if (!Array.isArray(list)) {
        // console.log(list);
        return list
    };
    list.forEach(element => {
        newArray = newArray.concat(profundidad(element));
        // console.log("ForEach Element", element);
        // console.log("newArray", element);
    });
    return newArray;
}
console.log(profundidad(matriz2));
// typeof list != "object"


// solucion con flat

const rta = matriz2.flat(3);
console.log("Flat", rta);
