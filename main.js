// let mm, mh, jm, jh, mbmi, jbmi
// mm = 78
// mh = 1.69
// jm = 92
// jh = 1.95

// mbmi = mm / mh**2
// jbmi = jm / jh**2

// console.log(mbmi, jbmi)
// console.log(`Selam kardes's mehabe "dedim sana" ${mm}`)

// console.log("abicim nasilsin \n\ Ben iyiyim \n\ peki")
// console.log(`selam
// kelam
// sana`)

// console.log('1990'+80)

// const year = '1990'

// console.log(typeof parseInt("1990"))
// console.log(typeof parseFloat("1990"))
// console.log(typeof Number("1990"))
// console.log(Number("1990"))

// console.log(2==='2')
// console.log(2=='2')

// const a =15
// console.log(a.toString(10))
// console.log(String(15))

// console.log("I am "+23+"years old")
// console.log("23 "- "10"- 5)

// console.log("23 "* "10")
// 230

// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean(""))
// console.log(Boolean("h"))
// console.log(Boolean({}))
// console.log(Boolean([]))

// if ("g") {
//   console.log("true");
// } else {
//   console.log("falsy");
// }

// prompt("what is your favourite number")

// let dolphinAve = (296 + 108 + 89) / 3;
// let koalasAve = (188 + 91 + 110) / 3;

// if (dolphinAve > koalasAve && dolphinAve >= 100) {
//   console.log("Dolphins are the winner");
// } else if (dolphinAve < koalasAve && koalasAve >= 100) {
//   console.log("Koalos are the winner");
// } else if (dolphinAve === koalasAve && koalasAve >= 100) {
//   console.log("Both are the winner");
// } else {
//   console.log("No winner");
// }

// const day = "Tuesday";

// switch (day) {
//   case "Monday":
//     console.log("Monday");
//     break;
//   case "Tuesday":
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Not a day");
// }

// const bill = 130

// const tip = (bill<50 ? bill*0.15 : bill*0.25)

// console.log(tip)

// function type() {
//   console.log("say type");
// }

// const call = function () {
//   console.log("say call");
// };

// const arr =()=>{
// console.log("say arrow")
// }
// type();
// call()
// arr()

const calcAverage = (a, b, c) => (a + b + c) / 3;


const aveD = calcAverage(44,23,71)
const aveK = calcAverage(65,54,49)

console.log(aveD, aveK)

const checkWinner = (a,b)=>{
    a>=2*b ? console.log("Dulphin is the winner") : console.log("Koala is the winner")
}
checkWinner(aveD, aveK)
