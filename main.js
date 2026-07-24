
//* добавление постоянных

const firstCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-first-card-color-button');
const allCards = document.querySelectorAll('.product-card');
const changeColorAllCardsButton = document.querySelector('#change-all-cards-color-button');
const openGoogleButton = document.querySelector('#open-google');
const darkKhakiHash = '#BDB76B';
const violetHash = '#8A2BE2';
const googleURL = 'https://www.google.com';
const outputLogButton = document.querySelector('#output-console-log');
const mainTitle = document.querySelector('.product__title');
const toggleButton = document.querySelector('.toggle-button');

//* добавление кнопок смены цвета 

changeColorFirstCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = violetHash;
});

changeColorAllCardsButton.addEventListener('click', () => {
  allCards.forEach((card) => {
    card.style.backgroundColor = darkKhakiHash;
  });
});

//* добавление кнопки открытия Google 

openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open(googleURL)
  }
}

//* вывод консоль лог

outputLogButton.addEventListener('click', () => outputConsoleLog('Василий Иванович'));
function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

//* вывод титульника в консоль

mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

//* добавление кнопки переключения цвета

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('toggle-button_active');
});

