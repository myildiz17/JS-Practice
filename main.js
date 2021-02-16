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

// const arr = [1,4,7,2,8]

// // for(const item of arr) console.log(item)

// // for(const item of arr.entries()) console.log(item)
// for(const [i, el] of arr.entries()) console.log(i, el)

// const obj = { name: "Ali", age: 5, job: "Teacher"}

// if(obj.name){
//     console.log(obj.name)
// }else{
//     console.log("does not exist")
// }

// console.log(obj.name ? obj.name : "does not exist")
// console.log(obj?.name ?? "does not exist")

// const obj = { name: "Ali", age: 5, job: "Teacher"}

// for(const item of Object.keys(obj)) console.log(item)
// for(const el of Object.values(obj)) console.log(el)

// const arr = ["ali", 5, 8, true];
// for (const [i, el] of arr.entries()) console.log(i, el);

// const obj = { name: "Ali", age: 5, job: "Teacher" };
// for(const [i, v] of Object.entries(obj)) console.log(i,v)

// const arr = ['a', 3, 'b', true, 7]
// for( const item of arr)console.log(item)

// for(const item of arr.entries())console.log(item)
// for(const [i, val] of arr.entries())console.log(i, val)

// const obj = { name: "Ali", age: 5, job: "Teacher"}

// for(const item of Object.keys(obj))console.log(item)
// for(const item of Object.values(obj))console.log(item)
// for(const [i,v] of Object.entries(obj))console.log(i,v)

// console.log(aSet)

// console.log(new Set('selam').size)
// const aSet = new Set(['a','a',1,2,3,3])
// // console.log(aSet.has("a"))
// // console.log(aSet.has("b"))
// aSet.add('c')
// aSet.delete('a')
// // aSet.clear()

// for(const item of aSet) console.log(item)

// const arr=[1,1,1,1,2,2,2,3,3,3,4,4,4]

// const aSet = [...new Set(arr)]
// console.log(aSet)

// const airline = "Turkish Airlines"
// const plane = 'A37H'

// console.log((airline.length)) //16
// console.log(('BH7J89'.length)) //6
// console.log(('BH7J89'[0])) //B
// console.log(airline.indexOf('A')) //8
// console.log(airline.lastIndexOf('r')) //10
// console.log(airline.lastIndexOf('Airlines')) //8
// console.log(airline.slice(8)) //Airlines
// console.log(airline.slice(8, 11)) //Air
// console.log(airline.slice(0, airline.indexOf(" "))) //Turkish
// console.log(airline.slice(airline.lastIndexOf(" ")+1)) //Airlines
// console.log(airline.slice(-2)) //es

// const checkMiddleSeat =(seat)=>{
//     (seat.slice(-1) === "B" || seat.slice(-1) === "E") ? console.log('middle seat') : console.log('not a middle seat')
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23C')
// checkMiddleSeat('3E')

// console.log('11C'.slice(-1))

// const airline = "Turkish Airlines"
// const plane = 'A37H'

// console.log(airline.toLowerCase()) //turkish airlines
// console.log(airline.toUpperCase()) //TURKISH AIRLINES

// const name= 'mETin'
// const lower = name.toLowerCase()
// const fLetter = name[0].toUpperCase()
// const newName = fLetter + lower.slice(1)
// console.log(newName)

// const email = 'metin@gmail.com'
// const input = ' MeetiN@Gmail.com'
// const newInput = input.split(" ").join("").toLowerCase()
// console.log(newInput)

// for(let i=0; i<email.length; i++){
//     if(email[i] !== newInput[i]){
//         console.log("not same")
//     }
// }

// const word1 = 'metT@,k'
// const word2 = word1.replace('T', "P").replace('@','$' ).replace(',', '?')
// console.log(word2)

// const checkBaggage = (items) => {
//   const baggage = items.toLowerCase(items);
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("you can not fly");
//   } else {
//     console.log("Welcome abors");
//   }
// };

// checkBaggage("book Food");
// checkBaggage("book Food");
// checkBaggage("apple knife");
// checkBaggage("book snack");
// checkBaggage("Pencil gun");

// const cap =(name)=>{
// const arr = name.split(" ")
// const finalArr =[]
// for(let item of arr){
//     const newName = item[0].toUpperCase()+item.slice(1)
//     finalArr.push(newName)
// }
// console.log(finalArr.join(" "))
// }

// cap("metin emin latif matt yildiz")

// const maskCredirCard = (number) => {
//   const str = number + " ";
//   const lastFour = str.slice(-5);
//   console.log(lastFour.padStart(str.length, "*"));
// };

// maskCredirCard(873873878728372);
// maskCredirCard("27273972439293923");

// const message = "Selam kelam canim cigerim"

// console.log(message.repeat(20))

// const underToCamel = (word) => {
//   const arr = word.toLowerCase().split("_");
//   const final = arr[0] + arr[1][0].toUpperCase() + arr[1].slice(1);
//   console.log(final);
// };

// underToCamel("first_name");
// underToCamel("calculate_AGE");

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const arr = flights.split("+");
// for( const flight of arr){
//   const [type, from, to, time]= flight.split(";")
//   const output = `${type.startsWith("_D") ? "&" : "" } ${type.replace(/_/g," ")} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(":", 'h')})`.padStart(50)
//   console.log(output)
// }

// const bookings = [];
// const createBooking = (flightNum, numPassengers=1, price = numPassengers*300) => {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
// bookings.push(booking)

// };

// createBooking('TR43')
// createBooking('TR45', 3, 450)
// createBooking('TR46', 5)

// console.log(bookings)

// const word =(str)=>{
// return str.replace(/ /g, '').toLowerCase()
// }

// console.log(word('sEla m'))

// const greeting = (greeting) => {
//   return (name) => {
//     console.log(`i am ${name} ${greeting}`);
//   };
// };

// const newf= greeting("hello")
// console.log(newf)
// newf("metin")

// greeting('mello')("ali")

// const greeting = greeting => name => console.log(`i am ${name} ${greeting}`)
// greeting('mello')("ali")

// const flight = {
//   airline: "TurkishAirlines",
//   iataCode: "TR56",
//   bookings: [],
//   book(flightNum, name) {
//     return `${this.airline} saygilar sunar, ucus numaran ${flightNum} oldumu ${name}`;
//   },
// };

// console.log(flight.book("7472", "Ali"));

// (()=> console.log("runs once"))()

// let f
// const g =()=>{
// const num = 10
//     f=()=>{
//         console.log(num*2)
//     }
// }

// g()
// f()

// const movements = [200, 450, -400, 3000, -650, -130];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}: You witdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("-------forEach-------");
// movements.forEach((movement, i, array) => {
//   if (movement > 0) {
//     console.log(`${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`${i + 1}: You witdrew ${Math.abs(movement)}`);
//   }
// });
