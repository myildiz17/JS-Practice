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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const aveD = calcAverage(44,23,71)
// const aveK = calcAverage(65,54,49)

// console.log(aveD, aveK)

// const checkWinner = (a,b)=>{
//     a>=2*b ? console.log("Dulphin is the winner") : console.log("Koala is the winner")
// }
// checkWinner(aveD, aveK)

// const arr1 = ["a","b","c"]
// const arr2 = new Array("a","b","c")

// arr1.push("z")

// console.log(arr1.includes("c"))

// const arrBill = [125,555,44]
// const arrTips = []
// const arrTotal = []

// const calTip = (bill)=>{
//     const tip = bill>50 ? bill*0.2 : bill*0.15
//     arrTips.push(tip)
//     arrTotal.push(tip+bill)
// }

// calTip(arrBill[0])
// calTip(arrBill[1])
// calTip(arrBill[2])

// console.log( arrBill, arrTips, arrTotal)

// const obj1={
//     firends: ["Mike", "john"],
//     name: "Deli"
// }

// console.log(obj1.name+ " has "+ obj1.firends.length+" firends and his best friend is called "+ obj1.firends[0] )
// console.log(`${obj1.name} has ${obj1.firends.length} firends and his best friend is called ${obj1.firends[0]}` )

// const ali={
//     name: 'Ali',
//     job: 'Teacher',
//     hasLicesne: true,
//     birthYear: 1995,
//     calAge: function(){
//     return 2037-this.birthYear
//     }
// }

// console.log(ali.calAge)
// console.log(`${ali.name} is a ${ali.calAge()}-year old ${ali.job}, and ${ali.hasLicesne ? "has a driver's license" : "does not have a driver's license"}`)

// const john = {
//     name: 'John',
//     mass: 92,
//     height: 1.95,
//     cal: function(){
//         this.BMI = this.mass/(this.height*this.height)
//         return this.BMI
//     }
// }
// const Mark = {
//     name: 'Mark',
//     mass: 78,
//     height: 1.69,
//     cal: function(){
//         this.BMI= this.mass/(this.height*this.height)
//         return this.BMI
//     }
// }
// console.log(john.cal(),Mark.cal())
// john.cal()>Mark.cal() ? console.log(`Johns BMI ${john.cal()} is higher than ${Mark.cal()}`) : console.log("the opposite")

// for (let i=0; i<10; i++){
//     console.log(`hi ${i}`)
// }

// const arr = ["selam", 5, true, ["a", 3, 2 + 5]];

// for(el of arr){
//     console.log(el)
// }
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2[i] = typeof arr[i];
// }
// console.log(arr2);

// const years = [1998, 1996, 2000, 2006]
// const ages=[]

// for(let i=0; i<years.length; i++){
//     ages.push(years[i])
// }

// console.log(ages)

// const arr = ["selam", 5, true, ["a", 3, 2 + 5]];

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] !== 'string') continue
//     console.log(arr[i])
// }

// const arr = ["selam", 5, true, ["a", 3, 2 + 5]];

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === 'number') break
//     console.log(arr[i])
// }

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<4; j++){
//         console.log(arr[i])
//     }
// }

// const arr = ["run", "jump", "dive"];

// let i = 0
// while(i<arr.length){
// console.log("hi", i)
// i++
// }

// let ranNum = 0;
// while (ranNum !== 6) {
//     ranNum = Math.floor(Math.random() * 7);
//   console.log(ranNum);
// }

// const tips = [];
// const total = [];
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const calAverage = (bills) => {
//   for (let i = 0; i < bills.length; i++) {
//     if (bills[i] > 50) {
//       tips.push(bills[i] * 0.15);
//       total.push(bills[i] + bills[i] * 0.15);
//     } else {
//       tips.push(bills[i] * 0.2);
//       total.push(bills[i] + bills[i] * 0.2);
//     }
//   }

//   console.log(tips, total);
// };

// calAverage(bills);

// const arr = ["selam", 5, true, ["a", 3, 2 + 5]];

// const [, x, ,[, b, c]] = arr;
// console.log(x, b, c);

// const obj = { name: "Ali", age: 5, job: "Teacher"}

// // const { name, age , job} = obj
// // console.log(name , age, job);

// const { name: ad, age: yas , job: is, wife: es="Nalan"} = obj
// console.log(ad , yas, is, es);

// const arr = [1, 2, 3];
// const newArr = [0, ...arr, 6];
// console.log(newArr);
// console.log(...newArr);

// const str = "selam"

// const arr = [...str]

// const arr= str.split('')
// console.log(arr)

// const obj = { name: "Ali", age: 5, job: "Teacher"}
// const newArray = {...obj, es: "Pakize"}
// console.log(newArray)

// const obj = { name: "Ali", age: 5, job: "Teacher"}

// const { name, ...weekdays }=  obj
// console.log(weekdays)

// const sum = (...input) => {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   console.log(sum);
// };

// sum(2, 3);
// sum(2, 3, 4, 5, 6);
// sum(2, 3, 7, 8, 9, 3, 4, 5);

// const decide = 0 || 10
// console.log(decide)
// => 10
// const decide = 0 ?? 10
// console.log(decide)
// => 0



