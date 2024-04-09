/*Create 3 variables to unlock the combination of 10-40-39
Each combination should use different operators
The combination should display on the HTML page or in an alert popup*/

let Num1= 20
let Num2= 1
let Num3= 5
let Num4= 2
const vaultcode = `${Num3 + Num3} - ${Num1 * Num4} - ${Num1 * Num4 - Num2}`

console.log("You have received this message because you have been chosen to open an important vault. Here is the combination:" + vaultcode) //Display mesage with the combination

alert("You have received this message because you have been chosen to open an important vault. Here is the combination:" + vaultcode)