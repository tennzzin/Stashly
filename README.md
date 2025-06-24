# Digital Store Platform 🛒💻

## Overview

Digital Store Platform is a full-stack web application designed to help users **manage, display, and interact with digital products**. This project allows you to add, update, and delete products with an intuitive interface, and leverages a modern JavaScript stack with a clean frontend and efficient backend. Perfect for learning web development, CRUD operations, and end-to-end app deployment.

---

## Features

- **Product Inventory Management**: Add, edit, and delete products with images, names, and prices.
- **Modern Web UI**: Responsive, mobile-friendly interface powered by React, Zustand, and TailwindCSS (DaisyUI).
- **Fast CRUD Operations**: All product actions update instantly thanks to React hooks and API integration.
- **Backend API**: Simple REST API using Express and PostgreSQL for storing product data.
- **Theming Support**: Easily switch between different color themes; user preferences are saved.
- **Seed Data**: Comes with sample products for quick setup and testing.
- **Error Handling & Feedback**: User-friendly toast notifications for actions and error states.

---

## How to Use

1. **Clone the Repository:**  
   - `git clone https://github.com/tennzzin/DigitalStorePlatform.git`
   - `cd DigitalStorePlatform`

2. **Set Up the Backend:**  
   - `cd backend`
   - `npm install`
   - Create a `.env` file in `/backend` and add your PostgreSQL connection string:  
     ```
     DATABASE_URL=your_postgresql_connection_string
     ```
   - Optionally seed the database with sample products:  
     - `node seeds/products.js`
   - Start the backend server:  
     - `npm run dev`

3. **Set Up the Frontend:**  
   - Open a new terminal tab/window
   - `cd frontend`
   - `npm install`
   - Start the frontend development server:  
     - `npm run dev`

4. **Try It Out:**  
   - Open [http://localhost:5173](http://localhost:5173) in your browser
   - Add, edit, or delete products; explore the UI and theming!

---

## Technology Stack

- **Frontend:**  
  - **React** – component-based UI
  - **Zustand** – state management
  - **React Router** – client-side routing
  - **TailwindCSS**/**DaisyUI** – utility-first styling and UI components
  - **Axios** – HTTP client for API requests
  - **Lucide React** – icon set

- **Backend:**  
  - **Node.js & Express** – REST API server
  - **PostgreSQL** – relational database
  - **Postgres.js** – SQL query library

- **Other:**  
  - **dotenv** – environment variable management
  - **Vite** – frontend build tool

---

## Skills Demonstrated

- **Full-Stack Web Development**  
  Built a complete app with separate frontend and backend, connected via REST APIs.

- **React State Management**  
  Leveraged Zustand for scalable, minimal state handling across components.

- **Database Integration**  
  Designed and seeded a PostgreSQL database with sample product data.

- **API Design**  
  Implemented clear, RESTful endpoints for product CRUD operations.

- **Modern UI/UX**  
  Used TailwindCSS and DaisyUI to create a sleek, responsive interface with theme switching.

- **Robust Error Handling**  
  Displayed meaningful feedback and handled loading/error states gracefully.

- **Security Best Practices**  
  Managed database credentials securely with `.env` and `.gitignore`.

---

## Author

**Tenzin Chonyi** – [LinkedIn](http://www.linkedin.com/in/tenzin-chonyi)

```