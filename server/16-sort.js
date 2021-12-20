
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b); // de menor a mayor
numbers.sort((a, b) => b - a); // de mayor a menor
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort(); // lo ordena directo de acuerdo a ASCII
words.sort((a, b) => a.localeCompare(b)); // old browsers
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
];
orders.sort((a, b) => b.total - a.total); // total
console.log(orders);

orders.sort((a,b) => a.date - b.date)
console.log(orders);