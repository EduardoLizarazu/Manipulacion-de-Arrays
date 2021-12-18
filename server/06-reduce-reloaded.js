const items = [1, 3, 2, 3];

const res = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] +=  1;
    }
    return obj;
}, {});
console.log(res);
// output
// {
//     1: 1,
//     3: 2,
//     2: 1,
// }


// ahora con obj
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
];

// contar cuantos lows y hight hay
/**
 * 1. Separo el value del level en un array
 * 2. Cuento con reduce
*/
const rta2 = data.map(item => item.level).reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] +=  1;
    }
    return obj;
}, {});
console.log(rta2);


// RETO contar con intervalos

const list = [1,1,4,5, 6,7,7, 9,10,10, 11];

const rta3 = list.reduce((obj, item) => {
    if (item >= 1 && item <=5) {
        obj["1-5"] += 1;
    } else if (item >= 6 && item <=8) {
        obj["6-8"] += 1;
    } else if (item >= 9 && item <=10){
        obj["9-10"] += 1;
    }
    return obj;
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
});
console.log(rta3);
// output:
// {
//     "1-5": 4,
//     "6-8": 5,
//     "9-10": 2,
// }