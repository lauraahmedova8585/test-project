"use strict";
// let age = 20;
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
// //создание условия
// if (age >=21) {
//     console.log ("Все разрешено");
// }
// //вспомогательное условие (можно использовать сколько угодно раз)
// else if (age >=18) {
//     console.log ("Можно голосовать");
// }
// //вариант иначе (если ни одно условие не сработало)
// else {
//     console.log ("по вашему возрасту ничего нет")
// }
// const password = "mypassword";
// //логические операторы: И (&&), ИЛИ (||), НЕ (!)
// if(password.length > 7 && (password.includes("123") || password.includes("!!!"))) {
//     console.log("Надежный пароль");
// }
// else {
//     console.log ("Слишком легкий пароль");
// }
// let experience: number = 10
// let projects: number = 60
// let efficiency: number = projects / experience
// if (efficiency >=4) {
//     console.log (`Эффективность ${efficiency} Сотрудник эффективен`)
// }
// else if (efficiency >=3) {
//     console.log (`Эффективность ${efficiency} Сотрудник должен улучшить результаты`)
// }
// else {
//     console.log (`Эффективность ${efficiency} Сотруднику необходимо пройти переквалификацию`)
// }
// function sayHello(lang: string = "ru") {
//     if (lang ==="en") {
//         console.log("Hello. World!");
//         }
//         else if(lang === "ru") {
//             console.log("Привет, мир!");
//         }
// }
// sayHello("en");
// sayHello();
//получаем цену пиццы в зависимости от размера
// function getPizzaPrice(size:string) {
//     if (size == "small") {
//         return 500;
//     }
//     else if(size == "medium") {
//         return 1000;
//     }
//     else {
//         return 1500;
//     }
// }
// function getExtraCheese(isCheese:boolean){
//     return isCheese ? 200: 0;
// }
// function getDeliveryFee(deliveryType:string) {
// return deliveryType == "courier" ? 300 : 0;
// }
// function getOrderInfo(size:string, isCheese:boolean, deliveryType:string) {
//     const sum = getPizzaPrice(size) + getExtraCheese(isCheese) + getDeliveryFee(deliveryType)
//     console.log(`Сумма заказа: ${sum} тенге`);
// }
// getOrderInfo("medium", true, "courier");
// getOrderInfo("small", false, "self");
// enum OrderStatus{
//     CREATED = "created",
//     SENT = "sent",
//     ACCEPT = "accept",
//     COMPLETED = "completed"
// }
// function getOrderMessage(status: OrderStatus) {
//     switch (status) {
//         case OrderStatus.CREATED:
//             return "Ваш заказ создан";
//         case OrderStatus.SENT:
//             return "Ваш заказ отправлен";
//         case OrderStatus.ACCEPT:
//             return "Ваш заказ принят";
//         case OrderStatus.COMPLETED:
//             return "Ваш заказ выполнен";
//     }
// }
// const currentStatus: OrderStatus = OrderStatus.COMPLETED
// console.log(getOrderMessage(currentStatus))
// enum Operator{
//     BEELINE = "beeline",
//     TELE2 = "tele2",
//     KCELL = "kcell",
//     ACTIVE = "active"
// }
// function GetPriceConnection(operator: Operator) {
//     switch (operator) {
//         case Operator.BEELINE:
//         return 2500;
//         case Operator.TELE2:
//             return 3000;
//         case Operator.ACTIVE:
//             return 3500;
//         case Operator.KCELL:
//             return 0;
//         }
// }
// const currentOperator: Operator = Operator.KCELL
// console.log(`Стоимость подключения: ${GetPriceConnection(currentOperator)} тенге`) 
// type TStatus = "active" | "inactive" | "do not disturb";
// type TUser = {
//     name: string
//     age: number
//     email: string
//     cart?: string
//     status?: TStatus
// }
// const user1: TUser = {
//     name: "Daniyar",
//     age: 25,
//     email: "daniyarovde@gmail.com"
// }
// const user2 = {...user1}
// user2.status = "active"
// console.log(user1, user2)
// const names = ['Daniyar', "Ilya", "Sultan", "Madi"]
// names.forEach(element => {
//     console.log(element)
// });
// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }
// const numbers = [1,,2]
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i])
// }
// numbers.forEach(element =>{
//     console.log(element)
// })
// const test=()=>{
// }
// type TPacket = "in_city" | "country" | "travel"
// type TVacationDays = 7 | 14
// type TEmployer = {
//     name: string
//     date: Date
//     vacationDays: TVacationDays
//     isFamily: boolean
//     packet: TPacket
// }
// const employers: TEmployer[] =[
//     {
//         name:"Daniyar",
//         date: new Date("2025-11-19"),
//         vacationDays: 7,
//         isFamily: false,
//         packet: "in_city"
//     },
//     {
//         name:"Dima",
//         date: new Date("2025-11-19"),
//         vacationDays: 14,
//         isFamily: true,
//         packet: "country"
//     },
//     {
//         name:"Ilya",
//         date: new Date("2025-11-19"),
//         vacationDays: 14,
//         isFamily: false,
//         packet: "travel"
//     }
// ];
// const getPacketName = (packet:TPacket) =>{
//     switch(packet){
//         case "in_city":
//             return "в городе"
//         case "country":
//             return "по стране"
//         case "travel":
//             return "за границу"
//     }
// }
// const getInfoForEmployer = (employer: TEmployer) =>{
//     const familyText = employer.isFamily? "с семьей" : "в одиночку";
//     return familyText
// }
// employers.forEach(employer =>{
//     console.log(`${employer.name} хочет отправиться в отпуск ${employer.date.toLocaleDateString("en-EN")} на ${employer.vacationDays} дней. Он будет отдыхать ${getInfoForEmployer(employer)} ${getPacketName(employer.packet)}`)
// })
const numbers = [1, 2, 4, 323, 213, 21];
// // добавление элемента в конец массива и начало массива
// numbers.push(5)
// numbers.unshift(0)
// // удаление элемента из конца массива и начала массива
// numbers.pop()
// numbers.shift()
// // попытка получения элемента из массива
// const element = numbers.find((item) => item == 21)
// console.log(element)
// // получение всех элементов, удовлетворяющих условию
// const elements = numbers.filter((item) => item > 21)
// //изменение каждого элемента массива и формирование нового массива
// const elements1 = numbers.map((item) => item / 3)
// console.log(elements1)
// const employees = [
//     {name: 'Ilya', age: 18, salary: 200 },
//     {name: 'John', age: 22, salary: 2000 },
//     {name: 'Alice', age: 32, salary: 3000 },
//     {name: 'Bob', age: 28, salary: 2500 },
// ]
// const employeesWithBonus = employees.map(item => {
//     if (item.age > 20) {
//         return {
//             ...item,
//             salary: item.salary * 1.1
//         }
//     }
//     return item
// })
// console.log(employeesWithBonus)
// const numbers = [1, 2, 4, 323, 213, 2, 21]
// //сортировка элементов
// numbers.sort((a, b) => a - b);
// console.log(numbers)
// const numbers = [1, 2, 4, 323, 213, 2, 21]
// //сортировка элементов
// numbers.sort((a, b) => b - a);
// console.log(numbers)
// const employees = [
//     {name: 'Ilya', age: 18, salary: 200 },
//     {name: 'John', age: 22, salary: 2000 },
//     {name: 'Alice', age: 32, salary: 3000 },
//     {name: 'Bob', age: 28, salary: 2500 },
// ];
// employees.sort((a, b) => a.salary - b.salary)
// console.log(employees)
//сортировка элементов
// numbers.sort((a, b) => b - a);
// console.log(numbers)
//переборка массива (нельзя менять элементы, только обращаться к ним)
// numbers.forEach((num) => {
//     if(num > 100) {
//       console.log(num)  
//     }
// })
// reduce -  свертка массива в одно значение
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);
//проверка на наличие элемента в массиве (вернет true или false)
const num = numbers.includes(2);
//есть ли в массиве элемент с подходящим условием
const isNumMore300 = numbers.some((n) => n > 300);
//проверяет является ли каждый элемент массива подходящим по условию
const areAllNumMore0 = numbers.every((n) => n > 0);
//# sourceMappingURL=script.js.map