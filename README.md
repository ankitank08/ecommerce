# E-commerce Product API

## Tech Stack
- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web framework for Node.js.
- **MongoDB with Mongoose:** NoSQL database and ODM for data handling.

## Running the Project
1. Install dependencies:
   ```bash
   npm install
Start the server:
bash
npm start
Ensure MongoDB is running locally or provide a connection string in a .env file.
API Endpoints
GET /api/v1/products
Description: Retrieve all products.
Example Request:
bash
curl http://localhost:5000/api/v1/products
GET /api/v1/product/:id
Description: Retrieve a product by its ID.
Example Request:
bash
curl http://localhost:5000/api/v1/product/60d0fe4f5311236168a109ca
GET /api/v1/products?category=Apparel
Description: Retrieve products filtered by category.
Example Request:
bash
curl "http://localhost:5000/api/v1/products?category=Apparel"
POST /api/v1/products
Description: Add a new product to the collection.
Example Request using Postman:
Method: POST
URL: http://localhost:5000/api/v1/products
Body (JSON):
json
{
  "name": "Sample Product",
  "brand": "60d0fe4f5311236168a109ca",
  "quantity": 10,
  "category": ["60d0fe4f5311236168a109cb"],
  "averageRating": 4.5,
  "totalRatingUsers": 100,
  "soldBy": "60d0fe4f5311236168a109cc",
  "images": [],
  "warranty": "2 years",
  "return": "30 days",
  "size": ["M", "L"],
  "model": "Model X",
  "color": ["Red", "Blue"],
  "weight": ["1kg"],
  "description": "A sample product description",
  "highlights": "Key features of the product",
  "tags": ["electronics", "sale"],
  "price": 199.99,
  "availableDistricts": ["District1"]
}
