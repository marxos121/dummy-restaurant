function generateMain() {
  const content = document.querySelector("#content");

  const newElement = document.createElement("div");
  newElement.textContent = `"Amazing restaurant" - John Doe`;
  content.appendChild(newElement);
}

export { generateMain };
