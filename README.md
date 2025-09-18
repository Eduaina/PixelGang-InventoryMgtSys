# PixelGang-InventoryMgtSys
A simple JavaScript-based Inventory Management System that lets you add, remove, update products, and generate inventory reports. Built as a group project (PixelGang).


# Inventory Management System – PixelGang  

## 📌 Project Overview  
This **Inventory Management System** is a group project designed to simulate managing products in a small shop or warehouse.  
It helps practice working with **objects, arrays, functions, loops, and logic** in JavaScript while building a functional system.  

> **Assignment Update:**  
- Group Project  
- New GitHub Repository   

---

## 🚀 Core Features  
- **Add Product:** Add a new product to the inventory.  
- **Remove Product:** Remove an existing product from the inventory.  
- **Update Stock:** Increase or decrease stock of an existing product.  
- **Generate Report:** Display a summary of inventory including:  
  - Total number of products  
  - Total inventory value  
  - Low-stock items warning  

---

## 🛠️ Concepts Applied  
- **Objects:** Each product is an object with properties like `id`, `name`, `price`, and `quantity`.  
- **Arrays:** All product objects are stored in an `inventory` array.  
- **Functions:** Modular functions handle core features (`addProduct`, `removeProduct`, `updateStock`, `generateReport`).  
- **For Loops:** Used to iterate through the inventory for searching, updating, or reporting.  
- **If/Else Statements:** Check conditions such as low stock (`quantity < 10`).  
- **Comparison & Logical Operators:** Ensure valid input and product existence checks.  
- **Booleans:** A `lowStock` property flags products that need restocking.  
- **Scope:**  
  - `inventory` array is in the **global scope** (accessible by all functions).  
  - Local variables exist inside functions to prevent naming conflicts.  

---

## 📂 Repository  
**GitHub Repo:** [Inventory Management System – PixelGang](https://github.com/Eduaina/PixelGang-InventoryMgtSys) 

---

## 📖 How to Use  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Eduaina/PixelGang-InventoryMgtSys.git
