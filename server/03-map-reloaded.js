const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
];
console.log("origin", orders);

// al final lo que queremos hacer es transformar y trabajar con los totales
const rta = orders.map(item => item.total);
console.log("rta", rta);

// // queremos agregar una nueva propiedad
// const rta2 = orders.map(item => {
//     item.tax = .19;
//     // estamos copiando la referencia en memria por lo que modifica el original esto pasa con los obj
//     return item; 
// });
// console.log("rta2", rta2);
// console.log("origin", orders);

// para evitar copiar la referencia en memoria usamos el Spread Operato de ES6,  donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.
const rta3 = orders.map(item => {
    // retornamos un nuevo objeto 
    //pero evitamos hacer ref. en memoria
    return {
        ...item,
        tax: .19,
    }; 
});
console.log("rta3", rta3);
console.log("origin", orders);