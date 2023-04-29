export { generateHeader };
import headerIcon from "./header.jpg";

function generateHeader() {
  const body = document.querySelector("body");
  const header = document.createElement("header");

  const headerPicture = new Image();
  headerPicture.src = headerIcon;

  const headerLinks = document.createElement("ul");

  const texts = ["Home", "Menu", "Contact us"];
  const ids = ["home", "menu", "contact"];

  for (let i = 0; i < 3; ++i) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("tab");

    link.id = ids[i];

    link.textContent = texts[i];
    link.setAttribute("href", ids[i]);
    listItem.appendChild(link);
    headerLinks.appendChild(listItem);
  }

  header.appendChild(headerPicture);
  header.appendChild(headerLinks);
  body.insertBefore(header, body.firstChild);
}
