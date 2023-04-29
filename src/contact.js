export { generateContact };

function generateContact() {
  const content = document.querySelector("#content");

  const map = new Image();

  const street = document.createElement("p");
  street.textContent = "123 Wobbly Street";

  const city = document.createElement("p");
  city.textContent = "1HD 2TV, Jellotown, UK";

  const number = document.createElement("p");
  number.textContent = "+44-0000-000000";

  content.appendChild(map);
  content.appendChild(street);
  content.appendChild(city);
  content.appendChild(number);
}
