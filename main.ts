game.splash("Today we will calculate the area of a trapezoid!")
let sideA = game.askForNumber("Enter the length of side A in cm: ")
let sideB = game.askForNumber("Enter the length of side B in cm: ")
let height = game.askForNumber("Enter the height in cm: ")
let area = (sideA + sideB) / 2 * height
game.splash("The area of a trapezoid with a side A of " + sideA + "cm, a side B of " + sideB + "cm and a height of " + height + "cm is " + area + "cm squared.")
