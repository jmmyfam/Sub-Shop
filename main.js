import {getOrders, addNewOrders} from './orders.js'

document.getElementById("subs").innerHTML = `
<h1>J's Sub Shop</h1>
<div>
  <h3>Customize your sub</h3>
  <div class="subsForm">
    <div class="bread">
      <p>What kind of bread would you like?</p>
      <label for="wheat">Wheat</label>
      <input id="wheatBread" name="bread" type="radio" value="Wheat" />
      <label for="rye">Rye Bread</label>
      <input id="ryeBread" name="bread" type="radio" value="Rye Bread" />
      <label for="herbsCheese">Herbs & Cheese</label>
      <input id="herbs" name="bread" type="radio" value="Herbs & Cheese" />
      </div>
      <div class="toppings">
        <p>What kind of toppings do you want?</p>
        <ul>
          <li>
            <input id="tomatoes" name="toppings" type="checkbox" value="Tomatoes" />
            <label for="tomatoes">Tomatoes</label>
          </li>
          <li>
            <input id="chicken" name="toppings" type="checkbox" value="Rotisserie Chicken" />
            <label for="chicken">Rotisserie Chicken</label>
          </li>
          <li>
            <input id="bananaPeppers" name="toppings" type="checkbox" value="Banana Peppers" />
            <label for="bananaPeppers">Banana Peppers</label>
          </li>
          <li>
            <input id="lettuce" name="toppings" type="checkbox" value="Lettuce" />
            <label for="lettuce">Lettuce</label>
          </li>
          <li>
            <input id="meatballs" name="toppings" type="checkbox" value="Meatballs" />
            <label for="meatballs">Meatballs</label>
          </li>
        </ul>
    </div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Make my sub!</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;
const orders = getOrders()

const displayOrders = () => {
  // logic to display orders on DOM
  let HTML = '';
  for (const order of orders) {
    HTML += `
    <div class="order">
    <p>Order #${order.id}</p>
    <p>Bread Choice: ${order.bread}</p>
    <p>Toppings: ${order.toppings}</p>
    <p>Special Instructions: ${order.instructions}</p>
    </div>
    `
  }
  document.getElementById('orders').innerHTML = HTML;

};

displayOrders()

document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    // Need logic to get all the values from the form, 
    let newId = orders.length + 1;
    let newBread = document.querySelector("input[name=bread]:checked")?.value;
    let newToppings = [];
    let selectedToppings = document.querySelectorAll("input[name=toppings]:checked");
    selectedToppings.forEach(topping => {newToppings.push(topping.value)});
    let newInstructions = document.getElementById('specialInstructions')?.value;
    
    // format them into an object and add that object to the `orders` array in `orders.js'
    const newOrder = {
      id: newId,
      bread: newBread,
      toppings: newToppings,
      instructions: newInstructions
    };
    orders.push(newOrder);
    displayOrders()
  }
})

document.addEventListener("stateChanged", event => {
  
})