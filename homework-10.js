import { products } from "./products-data.js"; //комменты делаю для себя, очень трудно усваивать

const productTemplate = document.getElementById("product-card-template"); // взял заготовку одной карточки из index.html
const productList = document.querySelector(".product__list"); // взял контейнер, куда буду вставлять карточки

products.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true); // задал переменную,  которая будет содержать клонированную карточку


  const imgCard = productClone.querySelector(".product-card__img"); // взял элемент img из клонированной карточки, чтобы потом вставить в него src, alt, width и height из объекта product
  imgCard.src = product.img.src;
  imgCard.alt = product.img.alt;
  imgCard.width = product.img.width;
  imgCard.height = product.img.height;

  productClone.querySelector(".product-card__type").textContent = product.type; // вставляю в клонированную карточку текст из объекта product
  productClone.querySelector(".product-card__name").textContent = product.name;
  productClone.querySelector(".product-card__desc").textContent = product.desc;

  productClone.querySelector(".product-card__price-value").textContent = `${product.price} ₽`;

  const compoundList = productClone.querySelector(".compound__list"); // взял ul из клонированной карточки, чтобы потом вставить в него li с текстом из массива compound объекта product
  product.compound.forEach(compoundItem => {
    const li = document.createElement("li");
    li.className = "compound__item"; // задал класс li, чтобы потом стилизовать его в css
    li.textContent = compoundItem; // вставляю в li текст из массива compound объекта product
    compoundList.append(li); // вставляю li в ul
  });
  productList.appendChild(productClone); // вставляю клонированную карточку в контейнер productList
});

const productInfo = products.reduce((acc, product) => {
  acc[product.name] = product.desc;
  return acc;
}, {});

console.log(productInfo);

function getNeedCardsCount() {
  const value = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(value);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert("Ошибка. Введи целое число от 1 до 5");
    return getNeedCardsCount();q
  }
  return count;
}
function renderCards(cards) {
  productList.innerHTML = "";

  cards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    const imgCard = productClone.querySelector(".product-card__img");
    imgCard.src = product.img.src;
    imgCard.alt = product.img.alt;
    imgCard.width = product.img.width;
    imgCard.height = product.img.height;

    productClone.querySelector(".product-card__type").textContent = product.type;
    productClone.querySelector(".product-card__name").textContent = product.name;
    productClone.querySelector(".product-card__desc").textContent = product.desc;

    productClone.querySelector(".product-card__price-value").textContent =
      `${product.price} ₽`;

    const compoundList = productClone.querySelector(".compound__list");
    compoundList.innerHTML = "";

    product.compound.forEach(compoundItem => {
      const li = document.createElement("li");
      li.className = "compound__item";
      li.textContent = compoundItem;
      compoundList.appendChild(li);
    });

    productList.appendChild(productClone);
  });
}
const count = getNeedCardsCount();
renderCards(products.slice(0, count));