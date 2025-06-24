# Digital Store Platform 🛒

## Overview

Digital Store Platform is a full-stack web application for managing digital product listings. Users can add, update, and delete products through an intuitive interface, with a responsive frontend and robust backend. The project features a secure RESTful API, real-time UI updates, and dynamic theming—demonstrating practical full-stack engineering skills with a modern JavaScript stack.

## Features

- **Product Management:** Add, edit, and delete product listings (name, price, image).
- **RESTful API:** Secure CRUD operations using Express and PostgreSQL.
- **Responsive Frontend:** Built with React and Tailwind CSS for a mobile-friendly experience.
- **Real-Time State Updates:** Fast updates and UI feedback via Zustand and React hooks.
- **Dynamic Theming:** Easily switch between color themes; preferences saved per user.
- **Seed Data:** Includes sample products for instant setup and testing.
- **User Feedback:** Clear error handling and toast notifications for all actions.

## How to Use

1. **Clone the Repository:**  
   - `git clone https://github.com/tennzzin/DigitalStorePlatform.git`
   - `cd DigitalStorePlatform`

2. **Set Up the Backend:**  
   - `cd backend`
   - `npm install`
   - Create a `.env` file in `/backend` and add your PostgreSQL connection string:  
     - `DATABASE_URL=your_postgresql_connection_string`
   - *(Optional)* Seed the database with sample products:  
     - `node seeds/products.js`
   - Start the backend server:  
     - `npm run dev`

3. **Set Up the Frontend:**  
   - Open a new terminal tab/window  
     - `cd frontend`
     - `npm install`
     - `npm run dev`

4. **Try It Out:**  
   - Open [http://localhost:5173](http://localhost:5173) in your browser.
   - Add, edit, or delete products. Explore the responsive UI and theme switching!

## Technology Stack
- **Frontend:**  
  - React
  - Zustand
  - React Router
  - Tailwind CSS / DaisyUI
  - Axios
  - Lucide React
- **Backend:**  
  - Node.js, Express.js
  - PostgreSQL
  - Postgres.js
- **Other:**  
  - dotenv (environment management)
  - Vite (frontend build tool)

## Skills Demonstrated
- **Full-Stack Web Development:** Built a product listing platform with React frontend and Express/PostgreSQL backend.
- **REST API Implementation:** Created secure CRUD endpoints and SQL queries with Express and Neon.
- **Responsive UI & Theming:** Designed with Tailwind CSS and DaisyUI, supporting dynamic themes and mobile responsiveness.
- **State Management:** Used Zustand for real-time state updates across the UI.
- **Deployment-Ready:** Project structure and environment variable handling prepared for production deployment.
- **Error Handling:** Provided clear feedback and robust error management for all user actions.

## Author

**Tenzin Chonyi** – [LinkedIn](http://www.linkedin.com/in/tenzin-chonyi)
