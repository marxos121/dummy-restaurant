import pizzaImg from "./jelly_pizza.png";
import jellyFruitImg from "./jelly_fruit_jar.png";
import jellyMallowImg from "./mellow_jelly.png";
import jellyCheesecakeImg from "./jelly_cheesecake.png";

import peanutsImg from "./peanuts.png";
import crispsImg from "./crisps.png";

import jellyColaImg from "./jelly_cola.png";
import appleJuiceImg from "./apple_juice.png";
import espressoImg from "./espresso.png";
import cappuccinoImg from "./cappuccino.png";
import waterImg from "./water.png";

export { mains, snacks, drinks };

const food = (name, price, description, image, alt) => {
  return { name, price, description, image, alt };
};

const mains = [
  food(
    "Jelly Pizza",
    "5",
    "A luscious chocolate base topped richly with sheening jelly pieces!",
    pizzaImg,
    "an image of pizza with chocolate base and jelly toppings"
  ),
  food(
    "Jelly fruit jar",
    "4",
    "A jar filled with delicious fresh fruit coated in our signature jelly!",
    jellyFruitImg,
    "a jar overflowing with raspberries and jelly"
  ),
  food(
    "Mellow jolly jar",
    "4",
    "Delicious marshmallow softness covered in rainbowy jelly!",
    jellyMallowImg,
    "a jar with marshmallows and colourful jelly"
  ),
  food(
    "Jelly-jolly cheesecake",
    "6",
    "A classic cheesecake made better with a lovely jelly layer. Our legendary cheesecake needs no introduction!",
    jellyCheesecakeImg,
    "a jar with marshamallows and colourful jelly"
  ),
];

const snacks = [
  food("Salted peanuts", "0.5", "Peanuts", peanutsImg, "peanuts"),

  food(
    "Crisps",
    "0.5",
    "Crisps of different flavours - including but not limited to: salted, salt & vinegar, bacon, cheese & onion.",
    crispsImg,
    "crisps"
  ),
];

const drinks = [
  food(
    "Jelly-cola",
    "1",
    "A jelly twist on the most popular sweet beverage! Expect sweet, fruity notes you haven't experienced before!",
    jellyColaImg,
    "a sparkling jelly cola"
  ),

  food(
    "Apple juice",
    "0.5",
    `Some things are better left unchanged... We press our juice on-site from locally sourced apples; 
    it doesn't get more fresh than that!`,
    appleJuiceImg,
    "an apple in front of a glass of apple juice"
  ),

  food(
    "Espresso",
    "0.5",
    `A classic - expect no surprises other than supreme quality!`,
    espressoImg,
    "a cup of espresso"
  ),

  food(
    "Cappuccino",
    "0.75",
    `Deliciously light cappuccino to give you that bitter-less energy kick!`,
    cappuccinoImg,
    "a cup of cappuccino"
  ),

  food(
    "Water",
    "0",
    "We appreciate that our food is generally quite sweet - and so, water is on us!",
    waterImg,
    "a bottle of water"
  ),
];
