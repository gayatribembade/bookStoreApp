# 📚 EduNest - Modern Full-Stack Bookstore

Welcome to EduNest, a modern, full-stack bookstore application designed with a sleek, user-friendly interface. This project features a React-based frontend and a robust Node.js backend, providing a seamless experience for browsing and managing books.

![EduNest Screenshot](https://via.placeholder.com/800x400.png?text=App+Screenshot+Here) <!-- Replace with an actual screenshot -->

---

## ✨ Features

- **Modern User Interface:** A clean and intuitive UI built with React and styled with Tailwind CSS.
- **Dark & Light Mode:** A user-toggleable theme for comfortable browsing in any lighting condition.
- **Fluid Animations:** Smooth page transitions and subtle animations powered by Framer Motion.
- **User Authentication:** Secure user signup and login functionality.
- **Dynamic Book Catalog:** Browse a comprehensive list of available courses and books.
- **RESTful API:** A robust backend API built with Express.js and MongoDB.

---

## 🛠️ Tech Stack

| Category      | Technology                                    |
|---------------|-----------------------------------------------|
| **Frontend**  | React, Vite, Tailwind CSS, DaisyUI, Framer Motion |
| **Backend**   | Node.js, Express.js, Mongoose                 |
| **Database**  | MongoDB                                       |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gayatribembade/bookStoreApp.git
    cd bookStoreApp
    ```

2.  **Set up the Backend:**
    - Navigate to the backend directory: `cd Backend`
    - Install dependencies: `npm install`
    - Create a `.env` file in the `Backend` directory and add your MongoDB connection string and a port number:
      ```
      PORT=4001
      MONGODB_URI=your_mongodb_connection_string
      ```
    - Start the backend server: `npm start`

3.  **Set up the Frontend:**
    - Open a new terminal and navigate to the frontend directory: `cd Frontend`
    - Install dependencies: `npm install`
    - Start the frontend development server: `npm run dev`

4.  **Open the application:**
    - Your browser should automatically open to `http://localhost:5173` (or another port if 5173 is in use).

