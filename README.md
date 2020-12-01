# Coffee Maker OOP Project

## About the Project
This was a short morning project to create a coffee maker using OOP and full TDD.

## Set up
In order the see an example of the coffee maker in action please run `npm install` to install the required dev dependencies.

Once Jest has been installed you can run `npm run test` which will log an example of the coffee maker being used to make a number of morning coffees (with short explanations!) to your console!

## The Coffee Maker

My coffee maker takes beans and can be filled up with water. It has an "add water" function which increases the water level to a given maximum and a "make coffee" function which makes a coffee and decreases the water level by one each time until it is empty when a "Please add water" message appears.

Example Coffee Maker

`{
      beans: 'Java Lava',
      waterLevel: 0,
      maxWaterLevel: 6,
      addWater: [Function: addWater],
      makeCoffee: [Function: makeCoffee]
    }`

Example Coffee Message

`An Espresso made with Java Lava`

Another Coffee Message

`An Americano made with Java Lava`

Oh dear, we're out of water!

`Please add water`


## Future plans for the project:
1. Although this is a very simple project I really liked the idea behind it and I think there are so many more functions I could add! It would be fun to add a coffee grinding function (medium/ coarse/ smooth) and perhaps a frothy milk function too.
2. I have thought about creating a visual functional coffee machine using CSS so that the console log messages which are created when the functions are run could be shown on the front of the machine. Maybe when the coffee is being made some liquid could pour into a cup or steam could appear out of the top of the machine!
