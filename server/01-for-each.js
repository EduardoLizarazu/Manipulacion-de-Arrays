const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("for", element);
}

letters.forEach(item => console.log("foreach", item));

//// DOM con forEach

// Menu - list
const products = [
    { title: "Burger" , price: 121 },
    { title: "Piezza", price: 20 },
];
const app = document.getElementById("app");
products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price}</li>`;
});

// Task - list
const tasks = [
    { task: "Homework", done: false },
    { task: "Take out the trach", done: true },
];
const doneTask = done => done == true ? "checked" : null; 

const taskList = document.getElementById("task-list");

tasks.forEach(taskItem => {
    taskList.innerHTML += 
        `<label> ${taskItem.task}
            <input type="checkbox" ${doneTask(taskItem.done)}>
        </label>`;
});

