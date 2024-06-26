export { generateMenu };
import { mains, snacks, drinks } from "./itemlist.js";

const content = document.querySelector("#content");

function generateMenu() {
  generateMenuSection("Signature sweets", mains);
  generateMenuSection("Salty snacks", snacks);
  generateMenuSection("Drinks", drinks);
}

function generateMenuSection(title, list) {
  let domSection = document.createElement("div");
  domSection.classList.add("menu-section");
  for (let i = 0; i < list.length; ++i) {
    domSection.appendChild(generateMenuItem(list[i]));
  }

  let header = document.createElement("h2");
  header.textContent = title;
  content.appendChild(header);
  content.appendChild(domSection);
}

function generateMenuItem(item) {
  const newItem = document.createElement("div");
  newItem.classList.add("menu-item");

  const nameElement = document.createElement("h3");
  nameElement.textContent = item.name;

  const priceElement = document.createElement("p");
  priceElement.textContent = "£" + item.price;

  const imageElement = new Image();
  imageElement.src = item.image;
  imageElement.alt = item.alt;

  const descrElement = document.createElement("p");
  descrElement.textContent = item.description;

  newItem.appendChild(nameElement);
  newItem.appendChild(priceElement);
  newItem.appendChild(descrElement);
  newItem.appendChild(imageElement);
  return newItem;
}
