// return: "An Espresso made with <whatever beans>" if invoked with a string of "Espresso"​return: "An Americano made with <whatever beans>" if invoked with anything else or no arguments reduce the waterLevel by each time its called but not below 0​

// const wakeUpMachine = makeCoffeeMachine("Java Lava");
// ​
// wakeUpMachine.makeCoffee(); // -----> "Please add water"
// ​
// wakeUpMachine.addWater();
// wakeUpMachine.makeCoffee(); // -----> "An Americano made with Java Lava"
// ​
// wakeUpMachine.waterLevel; // ----> 0
// ​
// wakeUpMachine.addWater();
// wakeUpMachine.makeCoffee("Espresso"); // -----> "An Espresso made with Java Lava"


function makeCoffeeMachine(beanType, waterLevel = 5) {
    const machine = {}
    machine.beans = beanType
    machine.waterLevel = 0
    machine.maxWaterLevel = waterLevel
    machine.addWater = addWater
    machine.makeCoffee = makeCoffee

    return machine
}

function addWater() {
    if (this.waterLevel < this.maxWaterLevel) {
        this.waterLevel++
    }
}
function makeCoffee(coffeeOrder) {
    if (this.waterLevel < 1) return "Please add water";
    this.waterLevel--;

    if (coffeeOrder !== "Espresso") {
        return `An Americano made with ${this.beans}`;
    } else {
        return `An ${coffeeOrder} made with ${this.beans}`;
    }
}

module.exports = makeCoffeeMachine