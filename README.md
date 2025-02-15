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


### Technologies
- jsx
- CSS
- bootstrap
- JavaScript
  


### Libraries

🔧 Core Libraries
React: "react": "^18.3.1"
React DOM: "react-dom": "^18.3.1"
React Scripts: "react-scripts": "5.0.1"
🏗️ State Management
Redux Toolkit: "@reduxjs/toolkit": "^2.3.0"
React Redux: "react-redux": "^9.1.2"
🛠️ UI & Styling
Bootstrap: "bootstrap": "^5.3.3"
FontAwesome: "@fortawesome/fontawesome-free": "^6.6.0"
Slick Carousel: "slick-carousel": "^1.8.1"
React Slick: "react-slick": "^0.30.2"
🔄 Routing
React Router DOM: "react-router-dom": "^6.28.0"
📡 API & Data Fetching
Axios: "axios": "^1.7.7"
React Query: "react-query": "^3.39.3"
✅ Form Handling & Validation
Formik: "formik": "^2.4.6"
Yup: "yup": "^1.4.0"
🎭 Head Management
React Helmet: "react-helmet": "^6.1.0"
🔥 Notifications
React Hot Toast: "react-hot-toast": "^2.4.1"
🌐 Network Detection
React Detect Offline: "react-detect-offline": "^2.4.5"
🛠️ Testing
Jest DOM: "@testing-library/jest-dom": "^5.17.0"
React Testing Library: "@testing-library/react": "^13.4.0"
User Event Testing: "@testing-library/user-event": "^13.5.0"
📊 Performance Monitoring
Web Vitals: "web-vitals": "^2.1.4"


### Platform 
-React

<hr font-size=1>

### Start JSON Server
```sh
json-server --watch server/db.json --port 5000
```

