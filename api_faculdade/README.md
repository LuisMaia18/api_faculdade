# Car API

This project is a RESTful API for managing car data, built using Node.js and Express. It allows users to perform CRUD operations on car entries, including retrieving, creating, updating, and deleting car information.

## Project Structure

```
api_faculdade
├── src
│   ├── app.js                  # Entry point of the application
│   ├── database.js             # Database connection and setup
│   ├── swagger.json            # API documentation in Swagger format
│   ├── controllers
│   │   └── cars.controller.js   # Controller for handling car-related requests
│   ├── models
│   │   └── cars.model.js        # Model for interacting with car data in the database
│   ├── routes
│   │   └── cars.routes.js       # Routes for car-related API endpoints
│   ├── middlewares
│   │   └── errorHandler.js      # Middleware for handling errors globally
│   └── utils
│       └── validateFields.js    # Utility for validating car data
├── server.js                    # Starts the server and listens for requests
├── package.json                 # Project metadata and dependencies
└── README.md                    # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd api_faculdade
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Access the API:**
   The API will be running on `http://localhost:3000`. You can access the Swagger documentation at `http://localhost:3000/api-docs`.

## API Endpoints

- `GET /cars` - Retrieve all cars
- `GET /cars/:id` - Retrieve a car by ID
- `POST /cars` - Create a new car
- `PUT /cars/:id` - Update an existing car
- `DELETE /cars/:id` - Delete a car

## Error Handling

The API includes a global error handler that logs errors and returns a generic error response to the client.

## Validation

Data validation for creating and updating car entries is handled using Joi, ensuring that all required fields are present and correctly formatted.

## License

This project is licensed under the ISC License.