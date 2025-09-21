let inventory = [
  { id: 1, name: "Laptop", price: 1200, quantity: 50 },
  { id: 2, name: "Mouse", price: 25, quantity: 200 },
  { id: 3, name: "Keyboard", price: 75, quantity: 150 },
  { id: 4, name: "Monitor", price: 300, quantity: 80 },
  { id: 5, name: "Webcam", price: 50, quantity: 120 },
  { id: 6, name: "Headphones", price: 100, quantity: 90 },
  { id: 7, name: "Microphone", price: 85, quantity: 60 },
  { id: 8, name: "External Hard Drive", price: 95, quantity: 70 },
  { id: 9, name: "USB Hub", price: 20, quantity: 250 },
  { id: 10, name: "Laptop Stand", price: 35, quantity: 110 },
  { id: 11, name: "Gaming Chair", price: 250, quantity: 30 },
  { id: 12, name: "Printer", price: 150, quantity: 45 },
  { id: 13, name: "Router", price: 60, quantity: 100 },
  { id: 14, name: "Graphics Card", price: 500, quantity: 25 },
  { id: 15, name: "CPU", price: 400, quantity: 40 }
];


console.log("-------- Adding products to cart ---------");
console.log(" ");
 
// Function to add by Mariam


const addProducts = (id, name, price, quantity) => {
  let product = inventory.find(function (item) {
    return item.id === id;
  });
  if (product) {
    product.quantity += quantity;
    console.log(quantity, "unit of quantity added to", product.name);
  } else {
     const newProduct = { id: id, name: name, price: price, quantity: quantity }
    inventory.push(newProduct);
    console.log(name + " has been added to inventory,  quantity of: " + quantity + " , and at a price of: " + price);
  }
}

addProducts(16, "External Power Supply", 290, 50)
addProducts(17, "Web Hosting Plan", 20, 300)
addProducts(18, "64GB RAM", 90, 30)
addProducts(3, "keyboard", 75, 250)
addProducts(6, "Headphones", 90, 100)
console.log(inventory, 'After Additions')
console.log(" ");
console.log(" ");




console.log("---------- Removing products from the cart ---------");
console.log(" ");
 
const removeProducts = (productName) => {
  const product = inventory.find(item => item.name === productname);
 
  if (!product) {
    console.log(`Product with id ${productName} not found.`);
    return;
  }
  let newInventory = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name !== productName) {
      newInventory.push(inventory[i]);
    }
  }
 
  inventory = newInventory;
  console.log(`Product ${productName} removed successfully.`);
};
 
 
 
console.log("Initial Inventory:", inventory);
removeProducts("Speaker");
removeProducts("Router", 20);
removeProducts("Laptop", 30);
removeProducts("Dress");
removeProducts("Monitor", 60);
console.log("Inventory after removing products:", inventory);
 
console.log(" ");
console.log(" ");




















// Function to remove products
function removeProducts(id, name, price, quantity) {
  let product = inventory.find(function (item) {
    return item.id === id;
  });
  if (!product) {
    console.log("Product is not in inventory");
  } else {
    if (product.quantity < quantity) {
      console.log("Not enough stock to remove!");
    } else {
      product.quantity -= quantity;
      console.log(quantity, "units deducted from", product.name);
    }
  }
}

removeProducts();




// stock update.

const updateStock = (id, changeInQuantity) => {
  // looping through the list of my array
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      let oldquantity = inventory[i].quantity
      inventory[i].quantity += changeInQuantity
      let newquantity = inventory[i].quantity
      // if(inventory[i].quantity <= 50){
      // i will be taking this out..there's no need for this.
      if (newquantity <= 50) {
        console.log(inventory[i].name + " " + "needs to be restocked")
        // return(inventory[i])
      } else {
        console.log(inventory[i].name + " " + "has enough quantity")
        // return(inventory[i])
      }
      return {
        id: inventory[i].id,
        name: inventory[i].name,
        oldstock: oldquantity,
        newstock: newquantity
      }
    }
  }
  console.log("product not found")
  return null
}
console.log(updateStock(1, -9))
console.table(updateStock(4, -5))
console.log(updateStock(8, 3))





// Remove Product

const removeProducts = (productId) => {

  const product = inventory.find(item => item.id === productId);


  if (!product) {
    console.log(`Product with id ${productId} not found.`);
    return;
  }


  let newInventory = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id !== productId) {
      newInventory.push(inventory[i]);
    }
  }

  inventory = newInventory;
  console.log(`Product ${product.name} removed successfully.`);
};



//Updatestock
const updateStock = (productId, change) => {
  const product = inventory.find(item => item.id === productId);

  if (!product) {
    console.log(`Product with id ${productId} not found.`);
    return;
  }

  product.quantity += change;

  if (product.quantity < 0) {
    product.quantity = 0;
  }

  console.log(
    `Stock updated for ${product.name}. New quantity: ${product.quantity}`
  );
};



// Test code

console.log("Initial Inventory:");
console.log(inventory);

// Remove a product
removeProducts(2);
console.log("Inventory after removing product 2 (Mouse):");
console.log(inventory);

// Update stock
updateStock(3, -50);
console.log("Inventory after updating product 3 (Keyboard):");
console.log(inventory);

updateStock(1, 20);
console.log("Inventory after updating product 1 (Laptop):");







// blessing

 
 
//Update stock by product id
const updateStock = (id, changeInQuantity) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      // prevent negative stock
      if (inventory[i].quantity + changeInQuantity < 0) {
        console.log("Error: Not enough stock to remove that amount.");
        return null; // null = update failed
      }
      // update quantity
      inventory[i].quantity += changeInQuantity;
      console.log(
        `Stock updated: ${inventory[i].name} now has ${inventory[i].quantity} units.`
      );
      return inventory[i]; // return the updated product object
    }
  }
  console.log("Error: Product not found.");
  return null; // null = product not found
};
 
let updated = updateStock(1, -10);
console.log(updated);
// { id: 1, name: "Laptop", price: 1200, quantity: 40 }
 
let updated2 = updateStock(2, 50);
console.log(updated2);
// { id: 2, name: "Mouse", price: 25, quantity: 250 }
 
let failCase = updateStock(14, -30);
// Logs error + returns null