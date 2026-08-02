//* 3. Создание объекта с персональными данными

const personInfo = {
  firstName: 'Kasim',
  lastName: 'Trofimov',
  email: 'konstan0304@gmail.com',
  job: 'Gazprom',
  position: 'dispatcher',
  age: 32,
  country: 'Russia',
  city: 'Dyurtyuli',
  relationshipStatus: 'single',
};

//* 4.  Добавление объекта авто и его свойства.

const carInfo = {
  brand: 'Opel',
  model: 'Astra',
  year: 2008,
  color: 'blue',
  engineType: 'petrol',
};

carInfo.owner = personInfo;

//* 5. Проверка наличия в объекте свойства 'максимальная скорость'

function addMaxSpeed(carInfo) {
  if ('maxSpeed' in carInfo) {
    return;
  }
  carInfo.maxSpeed = 240;
}

addMaxSpeed(carInfo);

console.log(carInfo);

//* 6. Функция аргумент - свойство.

function checkProperty(carInfo, property) {
  console.log(carInfo[property]);
}
checkProperty(carInfo, 'model');

//* 7.  Массив с названиями продуктов.
const productNames = ['Гречка', 'Макароны', 'Рис', 'Кукуруза'];

//* 8. Массив из объектов.

const weapons = [
  {
    name: 'AK-74',
    country: 'USSR',
    caliber: 5.45,
    year: 1974,
  },
  {
    name: 'AK-47',
    country: 'USSR',
    caliber: 7.62,
    year: 1947,
  },
  {
    name: 'M16',
    country: 'USA',
    caliber: 5.56,
    year: 1960,
  },
  {
    name: 'M4',
    country: 'USA',
    caliber: 5.56,
    year: 1994,
  },
  {
    name: 'Glock 17',
    country: 'Austria',
    caliber: 9,
    year: 1982,
  },
];

weapons.push
  ({
    name: 'PKM',
    country: 'USSR',
    caliber: 7.62,
    year: 1961,
  });

//* 9. Создание массива по критерию страны-производителя оружия.

const usaWeapons = [
  { name: 'M16', country: 'USA', caliber: 5.56, year: 1960 },
  { name: 'M4', country: 'USA', caliber: 5.56, year: 1994 },
];

const allWeapons = [...weapons, ...usaWeapons];

//* 10. Маркировка редких оружий (до 1950 года)

function getWeaponsWithRarity(weapons) {
  return weapons.map((weapon) => {
    const isRare = weapon.year < 1950;
    return {
      ...weapon,
      isRare: isRare,
    };
  });
}

const weaponsWithRarity = getWeaponsWithRarity(allWeapons);
console.log(weaponsWithRarity);