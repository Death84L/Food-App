# Food Delivery App Backend

This is the backend for a food delivery application built with Node.js, Express, and MongoDB. It consists of three microservices: User Service, Restaurant Service, and Delivery Agent Service.

###  PostMan Api Testing

- https://api.postman.com/collections/32275711-194983bc-dfb4-43c5-9517-14ca627cfc3b?access_key=PMAT-01J2NJQVQ8RNFGDN1JGF1PW0VD

### Deployed URL

- https://food-app-afv4.onrender.com/api/user/restaurants
- For others run the Postman to check 
### Features

- **User Service:**
  - Create users and manage user-related operations.
  - Place orders and leave ratings for orders .

- **Restaurant Service:**
  - Create and manage restaurant details including menu and availability.
  - Accept/reject orders and process them by assigning delivery agents automatically.

- **Delivery Agent Service:**
  - Manage delivery agents and their availability.
  - Update delivery statuses for assigned orders.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your/repository.git
   cd food-delivery-backend

2. Install dependencies
   npm install

3. Run the Project
   node index.js
