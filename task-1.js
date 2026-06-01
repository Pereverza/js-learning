const myName = "Tetiana";
const myAge = "35";
const isLearning = "JavaScript";
const city = "Cracow";

console.log(`Мене звати ${myName}, мені ${myAge} років`);
console.log(`Я живу в ${city}`);
console.log(`Я вивчаю  ${isLearning}`);

// Завдання 2. Розрахунок без калькулятора:

const hoursPerDay = 4;
const daysPerWeek = 5;
const weeksPerMonth = 4;

const hoursPerMonth = hoursPerDay * daysPerWeek * weeksPerMonth;
console.log(`За місяць я навчатимусь ${hoursPerMonth} годин`);

// Завдання 3. Знайди помилки (їх тут 3):
// const userName = "Maria";
// userName = "Anna";

// let score = "100" + 50;
// console.log(score);

// let isActive;
// console.log(`Статус: ${isActive}`);

// ПОМИЛКИ ВИПРАВЛЕНІ
let userName = "Maria";
userName = "Anna";

const score = "100" + 50;
console.log(score);

let isActive = true;
console.log(`Статус: ${isActive}`);

//  МІНІ-ПРОЄКТ — Картка користувача

const user = {
  name: "Tetiana",
  age: 35,
  city: "Cracow",
  skills: ["JavaScript", "HTML", "CSS"],
  isLookingForJob: true,
};


console.log("=== ПРОФІЛЬ РОЗРОБНИКА ===");
console.log(`Ім'я: ${user.name}`);
console.log(`Вік: ${user.age}`);
console.log(`Місто: ${user.city}`);
console.log(`Навички: ${user.skills}`);
console.log(`Шукаю роботу: ${user.isLookingForJob}`);

//  ДОМАШНЄ ЗАВДАННЯ
// Напиши код, який рахує скільки днів залишилось до твого дня народження (приблизно,
// без дат — просто з числами) і виводить повідомлення у стилі:

const meBirthdayDay = 10;
const meBirthdayMonth = 1;
const currentDay = 1;
const currentMonth = 5;
const daysInMonth = 30;

const daysUntilBirthday =
  ((meBirthdayMonth - currentMonth + 12) % 12) * daysInMonth +
  (meBirthdayDay - currentDay);
console.log(
  `До мого дня народження залишилось приблизно ${daysUntilBirthday} днів`,
);
