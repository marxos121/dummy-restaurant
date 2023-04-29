import { generateHeader } from "./header";
import { generateMain } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";
import "./styles.css";

const functionMap = {
  home: generateMain,
  menu: generateMenu,
  contact: generateContact,
};

generateHeader();
generateMain();

const tabs = document.querySelectorAll(".tab");

tabs.forEach((el) => {
  if (el.textContent === "Home") {
    el.classList.add("active");
  }
  el.addEventListener("click", (event) => {
    event.preventDefault();

    //Clear contents
    const content = document.querySelector("#content");
    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }

    //Reset which tab is active (for styling purposes)
    tabs.forEach((link) => {
      link.classList.remove("active");
    });
    el.classList.add("active");

    //Generate new content
    functionMap[el.id]();
  });
});
