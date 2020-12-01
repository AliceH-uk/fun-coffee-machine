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