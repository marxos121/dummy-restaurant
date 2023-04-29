import { generateHeader } from "./header";
import { generateMain } from "./home";
import { generateMenu } from "./menu";
import { generateContact } from "./contact";

generateHeader();
generateMain();

let tabs = document.querySelectorAll(".tab");

const functionMap = {
  home: generateMain,
  menu: generateMenu,
  contact: generateContact,
};

tabs.forEach((el) => {
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
