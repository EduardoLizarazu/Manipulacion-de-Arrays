const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log("original", words);
console.log("newArray", newArray);

const rta = words.filter(item => item.length >= 6);
console.log("original", words);
console.log("rta", rta);

// con obj
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
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    }
];

// queremos solo los delivered true
const rta3 = orders.filter(item => item.delivered && item.total >= 100);
console.log(rta3);

// hacer una busqueda
const search = query => {
    // return orders.filter(item => item.customerName === query);
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
};

console.log(search("Santiago"));
console.log(search("a"));