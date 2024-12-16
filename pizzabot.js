const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`
);

let orderName = prompt("Enter the name of the pizza you want to order today");

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

if (checkOrderName(orderName)) {
  const orderTotal = totalCost(orderQuantity);
  const cookingTime = calculateCookingTime(orderQuantity);
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`
  );
} else {
  alert(`${orderName} is not on the menu!`);
}

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function calculateCookingTime(orderQuantity) {
  switch (true) {
    case orderQuantity <= 2:
      return 10;
    case orderQuantity <= 5:
      return 15;
    case orderQuantity > 5 && orderQuantity <= 10:
      return 20;
    default:
      return 25;
  }
}
