
# 🚴‍♂️ GearGo — Online MotorBike Store (   [Live](https://bike-shop-client-kb3qhe9mm-md-alamins-projects-de5ed92d.vercel.app/))

BikeStore is a full-featured eCommerce platform for browsing, searching, and purchasing bikes online. Built with the MERN stack and integrated with ShurjoPay for secure payments, it offers role-based dashboards for admins and customers, product management, and a smooth checkout experience.




 

## 🔧 Tech Stack

**Client:** React, DaisyUI

**State Management:** Redux Toolkit

**Styling:** Tailwind CSS

**Forms:** React Hook Form

**Database:** MongoDB

**Authentication:** JWT (via API), stored in cookies/localStorage

**Payment Integration:** SurjoPay (sandbox ready)

**Deployment:** Vercel

**Server:** Node, Express, Mongoose

## 📌 Features

**🔗 Live Demo:** [GearGo.com](https://bike-shop-client-kb3qhe9mm-md-alamins-projects-de5ed92d.vercel.app/)
- 🔐 JWT-based Authentication & Authorization  
- 🧑‍💼 Role-based Dashboards (Admin & Customer)  
- 🛍 Product Management (Add, Edit, Delete, View)  
- 💳 Integrated with ShurjoPay for Online Payments  
- 🔎 Advanced Search & Filter Functionality

## Credential : 
Admin: 
email: admin@example.com
pass: admin123
User: porosh@example.com
pass: porosh123

## 🔐 Environment Variables



Create a `.env` file in the root of your project and add the following environment variables:

```env
NODE_ENV=development
PORT=5000

# MongoDB
DATABASE_URL=your_mongodb_connection_string

# JWT Secrets
JWT_ACCESS_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

# ShurjoPay Sandbox Credentials
SP_USERNAME=your_sp_username
SP_PASSWORD=your_sp_password
SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_PREFIX=SP
SP_RETURN_URL=http://sandbox.shurjopayment.com/response

## Deployment

This project is deployed on Vercel:

CI/CD is enabled via GitHub.
Automatic deployment on main branch push.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Alamin9462/Bike-shop-with-Redux.git
```

Go to the project directory

```bash
  cd bikeshop
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```
Start the client

```bash
  npm run dev
```


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Support

For support, email alaminmd9462@gmail.com or join my discord alamin9462 channel.


## Lessons Learned

While building the BikeShop project, I gained valuable hands-on experience in building a full-stack application using the MERN stack along with advanced concepts like secure authentication, payment gateway integration, and design pattern structuring.

While building the BikeShop project, I encountered and overcame several real-world development challenges:

## 🚧 Challenges I Faced

🔐 Generating and managing JWT tokens for secure login, access, and refresh flows.

👤 Customizing the user profile system with role-based access (Admin, Customer).

🧱 Following a clean backend design pattern (MVC) to keep the codebase scalable and readable.

📦 Managing app-wide state with Redux Toolkit, including product data, user info, cart, and order status.

🧩 Dynamically customizing and displaying data in both the frontend and backend.

🌱 What I Learned
Hands-on experience with JWT-based authentication and token security.

Building structured REST APIs using the MVC pattern.

Efficient state management with Redux (createSlice, createAsyncThunk).

Reusable and dynamic component design using React + TypeScript + Tailwind CSS.

Clean integration of payment gateway (ShurjoPay) and environment configuration.

