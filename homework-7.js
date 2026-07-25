

//* Вывод температуры в городе

let city = 'Медина';
let temp = 30;
function checkWeather(city, temp) {
  console.log(`Сейчас в ${city} температура - ${temp} градусов.`);
}

checkWeather(city, temp);


//* Проверка скорости света

const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(1000);


//* Возможность покупки товара

const productPrice = 1000;
const nameProduct = 'iPhone 17 Pro Max';
function buyProduct(finance) {
  if (finance >= productPrice) {
    console.log(`${nameProduct} приобретен. Спасибо за покупку!`);
  } else if (finance < productPrice) {
    const diff = productPrice - finance;
    console.log(`Вам не хватает ${diff}$, пополните баланс.`);
  }
}

buyProduct(500);


//* функция  и три переменные

function welcomeUser(name) {
  console.log(`Ас саляму аляйкум, ${name}!`);
}

welcomeUser('Ахы');

const userName = 'Касим';
const age = 32;
const isStudent = true;

console.log(userName, age, isStudent);
