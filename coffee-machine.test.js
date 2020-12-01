const makeCoffeeMachine = require("./coffee-machine.js")

describe("The Coffee Machine", () => {
    test("function should return an object", () => {
        expect(typeof makeCoffeeMachine()).toBe("object");
    });
    describe("Coffee Machine properties", () => {
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
    })


    describe("Coffee Machine methods", () => {
        test("The machine has an addWater method to increase the waterLevel", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            expect(typeof wakeUpMachine.addWater).toBe("function");
        });
        test("The addWater method increases the waterLevel by 1 each time, but not above the maxWaterLevel", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            wakeUpMachine.addWater()
            expect(wakeUpMachine.waterLevel).toBe(1);
        });
        test("The addWater method increases the waterLevel by 1 each time, but not above the maxWaterLevel", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            wakeUpMachine.addWater();
            // Added 7, should still return 5
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

        test("The makeCoffee method returns An Espresso made with given bean type if invoked with a string of Espresso and the waterLevel reduces by 1", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            wakeUpMachine.addWater()
            wakeUpMachine.addWater()
            expect(wakeUpMachine.makeCoffee("Espresso")).toBe("An Espresso made with Java Lava");
        });
        test("When the makeCoffee method makes a coffee the waterLevel reduces by 1", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            wakeUpMachine.addWater()
            expect(wakeUpMachine.waterLevel).toBe(1);
            wakeUpMachine.addWater()
            expect(wakeUpMachine.waterLevel).toBe(2);
            wakeUpMachine.makeCoffee()
            expect(wakeUpMachine.waterLevel).toBe(1);
        });
        test("The makeCoffee method returns An americano made with given beans if not asked to make an espresso", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            wakeUpMachine.addWater()
            wakeUpMachine.addWater()
            expect(wakeUpMachine.makeCoffee("Americano")).toBe("An Americano made with Java Lava");
        });

        test("The coffee machine shares methods in creating different coffees", () => {
            const wakeUpMachine = makeCoffeeMachine("Java Lava");
            const goodMorning = makeCoffeeMachine("Columbia")
            wakeUpMachine.addWater()
            wakeUpMachine.addWater()
            expect(wakeUpMachine.addWater).toBe(goodMorning.addWater);
        });
    })
});

const alicesMachine = makeCoffeeMachine("Java Lava", 6)
console.log("Alice's Coffee Maker - NB: water level at 0 --->", alicesMachine)
alicesMachine.addWater();
alicesMachine.addWater();
alicesMachine.addWater();
alicesMachine.addWater();
console.log("Alice's Coffee Maker - NB: water level increased to 4 --->", alicesMachine)
console.log("Let's make an espresso! --->", alicesMachine.makeCoffee("Espresso"))
console.log("And another one! --->", alicesMachine.makeCoffee("Espresso"))
console.log("How about a third espresso? --->", alicesMachine.makeCoffee("Espresso"))
console.log("Just an Americano this time please! --->", alicesMachine.makeCoffee("Coffee"))
console.log("One more? No, not this time the water level decreases every time a coffee is made until there is none left and a message appears... --->", alicesMachine.makeCoffee("Espresso"))

