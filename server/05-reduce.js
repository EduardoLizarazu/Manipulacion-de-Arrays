const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element;
}
console.log(sum);

// primer argumento de la f() es el acumulador
// segundo argumento de la f() es el elemento
// segundo parámetro de la f() es el estado inicial del acumulador
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("rta", rta);