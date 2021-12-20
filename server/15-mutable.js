// Carrito de compras
const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Encuentro lo que quiero buscar

// const productIndex = products.findIndex(item => item.id === "🍔");
// if (productIndex != -1) {
//     // lo agrego al carrito 
//     myProducts.push(products[productIndex]);
//     // Lo elimino del array original
//     products.splice(productIndex, 1);
// }
// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));


// Reto 1
// Eliminar un elemento sin borrarlo del la lista original.
// Solución: usar filter:
// Reto 1, lo mismo que el anterior, solo que en vez de eliminarlo del array original,crear un nuevo estado sobre el mismo
// Solucion 1
const copyProducts = products.map(item => {
    return {
        ...item
    }
});
const productIndex = copyProducts.findIndex(item => item.id === "🍔");
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    copyProducts.splice(productIndex, 1);
}
console.log(myProducts);

// Solucion 2 para copiar el 
const products2 = copyProducts.filter(p => p.id != "🍔");


// Update mutable the original

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🍔",
    changes: {
        price: 200,
        description: "deliciso",
    }
};
const productIndexV2 = productsV2.findIndex(item => item.id === update.id); // index 2
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2], // copio lo que este en ese index
    ...update.changes, // agrego los changes
}
console.log("productV2", productsV2);


// Update unmutable the original //
// Reto 2
// Modificar una nueva lista sin modificar la original.
// Solución: copiar solo los elementos para que no tengan la misma dirección de memoria.
const productsV3 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const updateV3 = {
    id: "🥞", 
    changes: {
        price: 200,
        description: "deliciso",
    }
};

const productIndexV3 = productsV3.findIndex(item => item.id === updateV3.id);// get index
const productsUpdateV3 = [...productsV3];
productsUpdateV3[productIndexV3] = {
    ...productsUpdateV3[productIndexV3], // copio lo que este en ese index
    ...updateV3.changes, // agrego los changes
};
console.log("ProductUpdateV3", productsUpdateV3);

// solucion 2

const productsUpdateV4 = productsV3.map(item => {
    if (item.id === updateV3.id) {
        return {
            ...item,
            ...updateV3.changes,
        };
    }
    return { ...item };
});
console.log("Reto2-S2", productsUpdateV4);