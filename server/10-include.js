const pets = ["cat", "dog", "bat"];


let rta = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === "dog") {
        rta = true;
    }
}
console.log("rta", rta);

const rta2 = pets.includes("dog");
console.log("rta2", rta2);
