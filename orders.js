const orders = [
    {
      id: 1,
      bread: "Herbs & Cheese",
      toppings: ["tomatoes", "meatballs"],
      instructions: "add light olive oil please"
    },
    {
      id: 2,
      bread: "Wheat",
      toppings: ["Rotisserie Chicken", "Banana Peppers"],
      instructions: "Add Salt and Pepper Please"
    }
  ]
  
  export const getOrders = () => {
    // logic to return a copy or orders 
      return orders.map(order => ({...order}))
  };
  
  export const addNewOrders = (order) => {
   return newOrder
  };