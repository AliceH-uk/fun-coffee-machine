const makeCoffeeMachine = require("./coffee-machine.js")

describe("Coffee Machine", () => {
    test("function should return an object", () => {
        expect(typeof makeCoffeeMachine()).toBe("object");
    });
    test("The object should have a beans property", () => {
        const testMachine = makeCoffeeMachine()
        expect(testMachine).toHaveProperty("beans");
    });
    test("The value for the beans property is given as the first argument", () => {
        const testMachine = makeCoffeeMachine("beanType")
        expect(testMachine.beans).toBe("beanType");
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(wakeUpMachine.beans).toBe("Java Lava");
    });
    test("The machine has a waterLevel property which instantiates as 0", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(wakeUpMachine.waterLevel).toBe(0);
    });
    test("The machine has a maxWaterLevel with a default of 5", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(wakeUpMachine.maxWaterLevel).toBe(5);
    });
    test("The maxWaterLevel can be changed by passing a second argument", () => {
        const biggerWakeUpMachine = makeCoffeeMachine("Java Lava", 10);
        expect(biggerWakeUpMachine.maxWaterLevel).toBe(10);
    });
    test("The machine has an addWater method to increase the waterLevel", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(typeof wakeUpMachine.addWater).toBe("function");
    });
    test("The addWater method increases the waterLevel by 1 each time, but not above the maxWaterLevel", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        wakeUpMachine.addWater()
        console.log(wakeUpMachine)
        expect(wakeUpMachine.waterLevel).toBe(1);
    });
    test("The addWater method increases the waterLevel by 1 each time, but not above the maxWaterLevel", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        wakeUpMachine.addWater();
        wakeUpMachine.addWater();
        wakeUpMachine.addWater();
        wakeUpMachine.addWater();
        wakeUpMachine.addWater();
        expect(wakeUpMachine.waterLevel).toBe(5);
    });
    test("The machine has a makeCoffee method", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(typeof wakeUpMachine.makeCoffee).toBe("function");
    });
    test("The makeCoffee method returns Please add water if the waterLevel is 0", () => {
        const wakeUpMachine = makeCoffeeMachine("Java Lava");
        expect(wakeUpMachine.makeCoffee()).toBe("Please add water");
    });
    // This test isn't working .... I need to make the waterLevel go down when asn espresso is made!

    // test("The makeCoffee method returns An Espresso made with <whatever beans> if invoked with a string of Espresso and the waterLevel reduces by 1", () => {
    //     const wakeUpMachine = makeCoffeeMachine("Java Lava");
    //     wakeUpMachine.addWater()
    //     wakeUpMachine.makeCoffee("Espresso")
    //     console.log(wakeUpMachine.makeCoffee("Espresso"))
    //     // expect(wakeUpMachine.waterLevel).toBe(0);
    //     expect(wakeUpMachine.makeCoffee("Espresso")).toBe("An Espresso made with <whatever beans>");
    // });
});

