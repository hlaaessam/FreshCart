# 🛍️ Fresh Cart  Website

Welcome to our **E-Commerce Platform**, your one-stop shop for high-quality products across multiple categories, including **Clothing, Electronics, Devices, Shoes**, and more! Our platform provides a seamless shopping experience with an intuitive UI and robust features.

## 🌟 Features

- **Home Page** – Browse the latest trends and featured products.
- **Categories** – Filter products by categories such as Clothing, Electronics, Devices, and Shoes.
- **Product Listings** – View a wide range of products with images, prices, and quick add-to-cart options.
- **Product Details Page** – Get comprehensive information, images, and reviews for each product.
- **Cart System** – Add, update, and remove products with a real-time price calculation.
- **Authentication System** – Secure login and sign-up for customers.
- **Order Management** – Track your final orders and view past purchases.
- **Responsive Design** – Optimized for all devices.
- **API Integration** – Uses **JSON Server** to serve product data and manage API calls.

## 📂 Project Structure

```
📁 e-commerce-website
 ┣ 📂 public
 ┃ ┣ 📂 images
 ┃ ┃ ┣ Logo
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ Footer.js
 ┃ ┃ ┣ ProductCard.js
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ Home.js
 ┃ ┃ ┣ Categories.js
 ┃ ┃ ┣ ProductDetails.js
 ┃ ┃ ┣ Cart.js
 ┃ ┃ ┣ Login.js
 ┃ ┃ ┣ Signup.js
 ┃ ┃ ┣ Orders.js
 ┣ 📂 server
 ┃ ┣ 📜 db.json
 ┃ ┣ 📜 server.js
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┣ 📜 .gitignore
```

## 🛒 Categories
- 👕 **Clothing** – Fashionable and trendy apparel.
- 📱 **Electronics** – Latest gadgets and devices.
- 💻 **Devices** – Laptops, tablets, and more.
- 👟 **Shoes** – A variety of styles and brands.
  

## 🔗 API Endpoints (JSON Server)

- **Users**: `GET /users`
- **Get all products**: `GET /products`
- **Get a single product**: `GET /products/:id`
- **Categories**: `GET /categories`
- **Cart items**: `GET /cart`
- **Add to cart**: `POST /cart`
- **Update cart item**: `PUT /cart/:id`
- **Remove from cart**: `DELETE /cart/:id`
- **Confirm order**: `POST /confirm-order`
- **Final order details**: `GET /final-order-details`



## 🚀 Getting Started

### Installation
```sh
git clone https://github.com/your-repo/e-commerce-website.git
cd fresh-cart-website
npm install
```

### Run the Project
```sh
npm start
```

### Start JSON Server
```sh
json-server --watch server/db.json --port 5000
```

## 📧 Contact
For any inquiries or support, please contact us at **support@ecommerce.com**.

