import { products } from "./products-data.js"; 

const productTemplate = document.getElementById("product-card-template"); 
const productList = document.querySelector(".product__list"); 
const productInfo = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.desc });
  return acc;
}, []);

console.log(productInfo);

function getNeedCardsCount() {
  const value = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(value);

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    alert("Ошибка. Введи целое число от 1 до 5");
    return getNeedCardsCount();
  }
  return count;
}
function renderCards(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    const imgCard = productClone.querySelector(".product-card__img");
    imgCard.src = `img/${product.img.name}.png`;
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
const shownCards = products.slice(0, count);

renderCards(shownCards);