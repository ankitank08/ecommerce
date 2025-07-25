## Run Locally

Clone the project

```bash
  git clone https://dredsoft-admin@bitbucket.org/dredsoft/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

API Endpoints
GET /api/v1/products
Retrieve all products.

```
curl http://localhost:5000/api/v1/products
```

GET /api/v1/product/:id
Retrieve a product by its ID.

```
curl http://localhost:5000/api/v1/product/{id}

```

GET /api/v1/products?category=Apparel
Retrieve products filtered by category.

Example:
```
curl "http://localhost:5000/api/v1/products?category=Apparel"

```
