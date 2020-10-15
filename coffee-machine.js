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
    machine.addWater = function () {
        if (machine.waterLevel < machine.maxWaterLevel) {
            machine.waterLevel++
        }
    };
    machine.makeCoffee = function (bean) {
        if (machine.waterLevel >= 1 && bean === "Espresso") {
            machine.waterLevel--;
            return "An Espresso made with <whatever beans>";
        } else if (machine.waterLevel === 0) {
            return "Please add water";
        }

    }


    return machine
}

module.exports = makeCoffeeMachine