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

// const movements = [200, 450, -400, 3000, -650, -130];

// const euroToUsd = 1.1

// console.log(movements.map(mov=> Math.round(mov*euroToUsd)))

// const movements = [200, 450, -400, 3000, -650, -130];

// const sum = movements.reduce((acc, el) => acc + el, 1000);

// console.log(sum);

// const arr = [2,3,[4,5],7,[7,9]]
// console.log(arr.flatMap())

// const arr1 = [3,7,5,1,4,8,9]
// const arr2 = ['Ali', 'Veli', 'Deli']
// const arr3 = [-7,5,10,11,17,21,2]

// arr3.sort((a,b)=> a>b ? 1 : -1)
// console.log(arr3)

// const x = Array.from("sayin bayim")

// console.log(x)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "john"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => {
//   dog.recFood = Math.round(dog.weight ** 0.75 * 28);
// });

// const dogNeeded = dogs.find((dog) => dog.owners.includes("Sarah"));

// if (dogNeeded.curFood > dogNeeded.recFood) {
//   console.log("It is eating too much");
// } else {
//   console.log("It is eating too little");
// }

// console.log(`Sarah dog is eating ${dogNeeded.curFood > dogNeeded.recFood ? "too much" : "too little"}`)
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];

// for (let dog of dogs) {
//   if (dog.curFood > dog.recFood) {
//     ownersEatTooMuch.push(...dog.owners);
//   } else {
//     ownersEatTooLittle.push(...dog.owners);
//   }
// }

// console.log(ownersEatTooMuch, ownersEatTooLittle);

// const ownersETM = ownersEatTooMuch.join(' and ')
// const ownersETL = ownersEatTooLittle.join(' and ')
// console.log(`${ownersETM}'s dogs eat too much and ${ownersETL}'s dogs eat too little!` )

// console.log(dogs.some(dog=> dog.curFood === dog.recFood))
// console.log(dogs.some(dog=> dog.curFood>dog.recFood*0.9 && dog.curFood>dog.recFood*1.1))

// const eatingOK = dogs.filter(dog=> dog.curFood>dog.recFood*0.9 && dog.curFood<dog.recFood*1.1)

// console.log(eatingOK)

// const dogs2 = [...dogs]

// console.log(dogs2.sort((a,b)=> a.recFood - b.recFood))

//**************Examples***************** */

// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// const a = (x)=> console.log(`This is ${Array.isArray(x) ? '' : 'not'} an array`)
// a({})

// // console.log(typeof {})

// console.log(Array.isArray({}))

// 2. Write a JavaScript function to clone an array. Go to the editor
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// const arrayClone = (x)=>x.slice()
// console.log(arrayClone([1, 2, 4, 0]));
// console.log(arrayClone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// const first =(arr, n=1)=> arr.splice(0,n)
// // console.log(first([2,4,5,6],1))
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// const last = (arr, n=1)=> arr.slice(-n)

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// 5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// const joinArr = (arr)=> arr.join(",")

// console.log(joinArr(["Red", "Green", "White", "Black"]))

// 6. Write a JavaScript program which accept a number as input and insert dashes (-)
// between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// const putDash = (num) => {
//   const str = num.toString();
//   const arr = [str[0]];

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
//       arr.push("-", str[i]);
//     }else{
//         arr.push(str[i]);
//     }
//   }

//   console.log(arr.join(''));
// };

// putDash(2436546978);

// 7. Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

// const arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]

// const sortNum = (arr)=>{
//     arr.sort((a,b)=> a-b)
//     console.log(arr)
//     console.log(arr1)
// }

// sortNum(arr1)

// 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

// const freq = (arr) => {
//     const obj = {};
//   for (let el of arr) {
//     obj[el] = (obj[el] || 0) + 1;
//   }

//   const values = Object.values(obj);
//   const maxValue = Math.max(...values);
//   let maxProp;

//   for (let [i, v] of Object.entries(obj)) {
//     if (v === 5) {
//       maxProp = i;
//       console.log(maxProp);
//     }
//   }
// };

// freq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);

// 9. Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const revOrder = (str) => {
//   const strSplt = str.split(" ");

//   const revsed = strSplt.map((el) => {
//       const elLower = el.split("").reverse().join("").toLowerCase()
//       const updated = elLower[0].toUpperCase()+elLower.slice(1)
//       return updated
//     });
//   console.log(revsed.join(" "));
// };

// revOrder('The Quick Brown Fox')

// 10. Write a JavaScript program which prints the elements of the following array. Go to the editor
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

// const printArray = (arr) => {
//   for (const [i, v] of arr.entries()) {
//     console.log("row"+i);
//     for (const el of v) {
//       console.log(el);
//     }
//   }
// };

// a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
// printArray(a)

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.

// const sumSq = (arr) => {
//   let sum = 0;
//   for (const el of arr) {
//     sum += el * el;
//   }
//   return sum;
// };

// console.log(sumSq([0, 2, 4, 5, 7, -2]));

////////LECTURE////////////

// const charCount = (str) => {
//     const lStr = str.toLowerCase()
//   const result = {};

//   for (let i = 0; i < lStr.length; i++) {
//     if(/[a-z0-9]/.test(lStr[i])){result[lStr[i]]= ++result[lStr[i]] || 0}
//   }
//   return result;
// };

// const charCount=(str)=>{
//     const result={}
//     const lstr = str.toLowerCase()
//     for(const char of lstr){
//         if(/[a-z0-9]/.test(char)){
//             result[char]= result[char]++ || 0
//         }
//     }
//     return result
// }

// // console.log(charCount("Sselam mmaae!"));

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return "they dont have same length";
//   }

//   const obj1 = {};
//   const obj2 = {};

//   for (const el of arr1) {
//     obj1[el] = ++obj1[el] || 1;
//   }
//   for (const el of arr2) {
//     obj2[el] = ++obj2[el] || 1;
//   }

//   for (const pro in obj1) {
//     if (obj1[pro] !== obj2[pro*pro]) {
//       return "they are not same";
//     }
//   }

//   return "They are same"
// };

// console.log(same([1, 2, 3], [4, 1, 8]));

////ANagram//

// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return "String sizes are different";
//   }

//   const obj1 = {};

//   for (const char of str1) {
//     obj1[char] = ++obj1[char] || 1;
//   }
// console.log(obj1)
//   for (const char of str2) {
//     if (!obj1[char]) {
//       return "They are not Anagram";
//     } else {
//       obj1[char] -= 1;
//     }
//   }
//   return "They are Anagram";
// };

// console.log(anagram("anagram", "nagaram"));

///double pointer problems////////

// const sumZero = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] + arr[right] === 0) {
//       return [arr[left], arr[right]];
//     } else if (arr[left] + arr[right] > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return "There is none";
// };

// console.log(sumZero([-4, -3, -2, 0, 1, 2, 5]));

///////Coiunt Unique Values //////////////

// const countUniqeValues = (arr) => {
//   let first = 0;
//   let second = 1;
//   while (second < arr.length) {
//     if (arr[first] !== arr[second]) {
//         first++
//         arr[first]=arr[second]
//         second++
//     } else {
//       second++;
//     }
//   }
//   return (arr.slice(0,first+1))
// };

// console.log(countUniqeValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqeValues([-2,-1,-1,0,1]));

// const maxSum = (arr, num) => {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     sum += arr[i];
//   }
//   for(let i=num; i<arr.length; i++){
//       if(sum+arr[i]-arr[i-num]>sum){
//         sum = sum+arr[i]-arr[i-num]
//       }
//   }

//   return sum
// };

// console.log(maxSum([1, 2, 5, 2,9, 8, 7,9, 5], 2));

// sameFrequency = (num1, num2) => {

//   const newNum1 = num1 + "";
//   const newNum2 = num2 + "";
//   if(newNum1.length !== newNum2.length){
//       return "They dont have the same size"
//   }

//   const obj1 = {};
//   const obj2 = {};

//   for(const char of newNum1 ){
//       obj1[char]= ++obj1[char] || 1
//   }
//   for(const char of newNum2){
//       obj2[char]= ++obj2[char] || 1
//   }

//   for(const el in obj1){
//       if(obj1[el] !== obj2[el]){
//           return "They don't have same frequency"
//       }else{
//         return "They have the same frequency"
//       }
//   }
//   console.log(obj1, obj2)
// };

// console.log(sameFrequency(1825, 281));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(220, 222));

//

// const averagePair = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let avg = (arr[left] + arr[right]) / 2;
//     if (avg === num) {
//       return [arr[left], arr[right]];
//     } else if (avg > num) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return "No pairs";
// };

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 2, 6, 7], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

// const isSubsequence = (arr1, arr2) => {
//   let first = 0;
//   let second = 0;

//   while (second < arr2.length) {
//     if (arr1[first] === arr2[second]) {
//       first++;
//     } else {
//       second++;
//     }
//   }
//   if (first === arr1.length) {
//     return "Yes includes";
//   } else {
//     return "No it does not include";
//   }
// };

// console.log(isSubsequence("sine", "stdffidddfdfnddde"));

//

// const countdown = (num) => {
//   if (num <= 0) {
//     console.log("done");
//     return;
//   }
//   console.log(num);
//   num--;
//   countdown(num);
// };

// countdown(10);

// const sumRange=(num)=>{
//     if(num=== 1)return 1
//     return num+sumRange(num-1)
// }

// console.log(sumRange(10))

// const fcat =(num)=>{
//     if(num === 1) return 1
//     return num*fcat(num-1)
// }

// console.log(fcat(10))

// const collectOdds = (arr) => {
//   let result = [];

//   const recFunc = (arr) => {
//     if (arr.length === 0) return;
//     if (arr[0] % 2 === 0) {
//       result.push(arr[0]);
//     }
//     recFunc(arr.slice(1));
//   };

//   recFunc(arr);

//   return result;
// };

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// const power = (b, p) => {
//   if (p === 0) return 1;
//   return b * power(b, p - 1);
// };

// console.log(power(2, 5));

// const power = (b, p) => {
//     let pow = 1;
//   for (let i = 0; i < p ; i++) {
//     pow *= b;
//   }
//   return pow
// };

// console.log(power(2, 5));

// const factorail = (n) => {
//   let result = 0;
//   if (n === 0) return 1;
//   result = n * factorail(n - 1);

//   return result;
// };

// console.log(factorail(4));

// const productOfArray = (arr) => {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// };

// console.log(productOfArray([1, 2, 3, 4, 6, 8, 9]));

// const recursiveRange = (num)=>{
//     if(num === 0 ) return 0
//     return  num+recursiveRange(num-1)
// }

// console.log(recursiveRange(10))

// const fibFunc = (num) => {
//   let arr = [1, 1];
//   const fib = (num) => {
//       if(num === 0 ) return arr[arr.length-1];
//     arr.push(arr[arr.length-1] + arr[arr.length-2]);
//     fib(num - 1);
//   };
//   fib(num-2)
//   console.log(arr[arr.length-1])

// };

// console.log(fibFunc(10));
// const fReverse=(input)=>{
//     let str = "";
//     const reverse = (input) => {
//       let num = input.length;

//       if (num === 0) return;
//       str = input[0] + str
//       num--
//       reverse(input.slice(1));
//     };

//     reverse(input)
//     console.log(str)
// }

// console.log(fReverse("selam kelam canim cicim"));

// const isPalindrome = (str) => {
//   const obj = {};
//   for (const el of str) {
//     obj[el] = ++obj[el] || 1;
//   }
//   if (Object.values(obj).filter((el) => el === 1).length > 1) {
//     return "Not a palindrome";
//   } else {
//     return "Yes it is a palindrome";
//   }
// };

// console.log(isPalindrome("tacorrcat"));

// const findIndex = (arr, num) => {
//   if (arr.indexOf(num)) {
//     return arr.indexOf(num);
//   } else {
//     return -1;
//   }
// };

// console.log(findIndex([2, 4, 7, 9, 5, 12, 15, 18, "can"], "can"));

// const binary = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.round((right + left) / 2);

//   while (arr[middle] !== num && left <= right) {
//     if (arr[middle] > num) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     middle = Math.round((right + left) / 2);
//   }

//   if (arr[middle] === num) {
//     return middle;
//   }else{
//       return -1
//   }
// };

// console.log(binary([1, 3, 5, 7, 9, 12, 14, 15, 17, 18], 25));

// const compStrs = (strl, strs) => {
//     let count = 0
//   for(let i=0; i<strl.length; i++){
//       for(let j=0; j<strs.length; j++){
//           if(strs[j]!==strl[j+i]){
//               break
//           }
//           if(j === strs.length -1){
//               console.log("Found One")
//               count++
//           }
//       }
//   }
//   return count
// };

// console.log(compStrs("wowomgzomg", "omg"));

// const str = "selam kelam"
// const arr=["Veli", "Celi", "ALi"]
// const arr1=[5,8,2,45,79,56,1]
// console.log(arr.sort())
// const c= arr1.sort((a,b)=>a-b)
// console.log(c)

// const bubble=(arr)=>{

// for(const i; i<arr.length; i++){
//     if(arr[])
// }
// }

// console.log(bubble([3,2,5,3,8,1]))

//////////Signly Linked lISt//////////////

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }

//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     return current;
//   }

//   tarverse() {
//     let current = this.head;
//     let child = current.next;
//     while (current) {
//       console.log(current.val);
//       current = current.next;
//     }
//   }
// }

// let list = new SinglyLinkedList();
// console.log(list.push("Hello"));
// console.log(list.push("You"));
// console.log(list.push("How"));
// console.log(list.push("Are"));
// console.log(list.push("you"));
// console.log(list.push("today"));
// console.log(list.tarverse());

//*********************************LEETCODE******************************************

//**********************Two Sum ***********************************************/
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       } else {
//         return "none";
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// }

// console.log(twoSum([2, 6, 11, 15,7], 9));

// var twoSum = function(nums, target) {
//     let obj = {};
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (Object.values(obj).includes(complement)) {
//             return [nums[i], complement]
//         }
//         obj[i]= nums[i]
//     }
//     console.log(obj)
//     console.log(Object.keys(obj))
// }

// console.log(twoSum([2, 6, 11, 15,7], 9));

//********************** Reverse Integer ***********************************************/

// const reverseInt=(num)=>{
// const str = num+""
// const reversed = parseInt(str.split("").reverse().join(""))
// return reversed
// }

// console.log(reverseInt(123433433))

//********************** Palindrome Integer ***********************************************/

// const palindrome = (num) => {
//   const str = num + "";
//   const obj = {};
//   for (let char of str) {
//     obj[char] = ++obj[char] || 1;
//   }

//   const arr = Object.values(obj);
//   let odd = 0;
//   for (let el of arr) {
//     if (el % 2 !== 0) {
//       odd++;
//     }
//   }

//   if (odd > 1) {
//     return "No it is not a palindrom";
//   } else {
//     return "Yes it is a palindrom";
//   }
// };

// console.log(palindrome(74236746));

//********************** Anagram ***********************************************/

// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   const obj = {};

//   for (let char of str1) {
//     obj[char] = ++obj[char] || 1;
//   }

//   for (let char of str2) {
//     if (!obj[char]) {
//       return false;
//     } else {
//       obj[char] -= 1;
//     }
//   }

//   return true;
// };

// console.log(anagram("anagram", "nagtmara"));
// console.log(anagram("anagram", "nagmara"));

//********************** Count Unique Values ***********************************************/

// const uniqueValues = (arr) => {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i;
// };

// console.log(uniqueValues([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 9]));

//********************** areThereDublicates ***********************************************/

// const areThereDublicates = (...arg) => {
//   const obj = {};
//   for (let el of arg) {
//     obj[el] = ++obj[el] || 1;
//   }

//   for(let key in obj ){
//       if(obj[key]>1){
//           return true
//       }else{
//           return false
//       }
//   }
// };

// console.log(areThereDublicates(1, 2, 3, 4, 5,5, 6));

// const areThereDublicates = (...arg) => {
//   return new Set(arg).size !== arg.length;
// };

// console.log(areThereDublicates(1, 2, 3, 4, 5, 6));

//********************** averagePair ***********************************************/

// const averagePair = (arr, num) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const ave = (arr[start] + arr[end]) / 2;
//     if (ave === num) {
//       return [arr[start], arr[end]];
//     } else if (ave > num) {
//       end--;
//     } else {
//       start++;
//     }
//   }

//   return "No average pairs";
// };

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

//********************** isSubsequence ***********************************************/

// const isSubsequence = (str1, str2) => {
//   let i = 0;
//   let j = 0;

//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;

//     j++;
//   }

//   return false;
// };

// console.log(isSubsequence("sing", "trshnjg"));

//********************** maxSubarraySUm ***********************************************/

// const maxSubarraySUm = (arr, num) => {
//   let temp = 0;
//   let max = 0;

//   for (let i = 0; i < num; i++) {
//     temp += arr[i];
//   }
//   max = temp;
//   for (let i = num; i < arr.length; i++) {
//     temp = temp + arr[i] - arr[i - num];
//     max = Math.max(temp, max);
//   }

//   console.log(max);
// };

// console.log(maxSubarraySUm([2, 6, 9, 2, 1, 8, 5, 6, 3], 2));


// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }

