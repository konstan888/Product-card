// 1. Создал файл homework-9.js и подключил его к index.html.

//  2. Создание массива чисел от 1 до 10. Фильтрация от 5 и выше. Вывод в консоль.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fromFiveNums = nums.filter(num => num >= 5);
console.log(fromFiveNums);

// 3. Создание массива строк с сущностями. Проверка конкретной сущности среди них.

const weapons = ['AK-74', 'AK-47', 'M16', 'M4', 'Glock 17'];
const hasHandgun = weapons.includes('Glock 17');
console.log(hasHandgun);

// 4. Создание функции, переворачивающей массив 

function getReversedArray(arr) {
  return [...arr].reverse();
}

const reversedNums = getReversedArray(nums);
const reversedWeapons = getReversedArray(weapons);

console.log(reversedNums);
console.log(reversedWeapons);

// Импорт переменной из comments.js

// 7. Вывод в консоль массива комментов пользователей, почта которых содержит ".com"

import { usersData } from "./comments.js";

const specialBodies = usersData.filter(user => user.email.includes('.com'))
  .map(user => user.body);
console.log(specialBodies);

// 8. Переборка импортированного массива по id 

const specialKeys = usersData.map(key => {
  if (key.id <= 5) {
    return { ...key, postId: 2 };
  }
  return { ...key, postId: 1 };
});
console.log(specialKeys);

// 9. Переборка массива, чтоб объекты состояли только из id и имени.

const idWithName = usersData.map(idName => ({
  id: idName.id,
  name: idName.name
}));

console.log(idWithName);

// 10. Переборка массива, добавление свойств и проверка соответствия критерию длины.

   //длинный способ
const newProperty = usersData.map(user => {
  if (user.body.length > 180) {
    return { ...user, isInvalid: true };
  } else {
    return { ...user, isInvalid: false };
  }
});
   // короткий вариант, вернуть сразу.
const longComments = usersData.map(user => ({
  ...user,
  isInvalid: user.body.length > 180
}));

// 11. Возврат нового массива, сотоящего из почт, с помощью Map.

const emailsByMap = usersData.map(user => user.email);
console.log(emailsByMap);

// 12. Переборка массива с прошлого пункта и приведение его к строке.

//  toString
const emailsList1 = emailsByMap.toString();
console.log(emailsList1);

// join
const emailsList2 = emailsByMap.join(", ");
console.log(emailsList2);

