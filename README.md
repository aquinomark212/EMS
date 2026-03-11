# **Employee Management System**


## **Description**

The Employee Management System is a basic CRUD (Create, Read, Update, Delete) application developed during my internship. It allows users to create, view, update, and delete employee records in a simple and organized system.

The application is containerized using Docker to simplify deployment and environment setup. It also implements JWT (JSON Web Token) authentication to secure the system and ensure that only authorized users can access and manage employee data.


## **Table Of Contents**

- [Installation](#installation)
- [Usage](#Usage)
- [Features](#Features)
- [Installation](#installation)



## **Installation**

Follow these steps to set up the project locally:

 Clone the repository:

```bash
git clone https://github.com/your-username/employee-management-system.git
```

Navigate to the project folder:

```bash
cd employee-management-system
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Create a `.env` file in the backend folder and add the required environment variables (such as MongoDB connection string and JWT secret).

Start the development servers:

```bash
npm start
```

Alternatively, you can run the project using **Docker** with:

```bash
docker-compose up --build
```




## **Usage**

After starting the application, users can log in and manage employee records through the dashboard.


## **Features**

-  Create, read, update, and delete employee records

-  JWT authentication for secure access

-  RESTful API built with Express.js

-  Responsive user interface using React

-  Docker containerization for easy setup and deployment



## **Tech Stack**

MongoDB

Express.js

React.js

Node.js

Docker

JWT Authentication


## **Author**

Mark Andrew Aquino

Internship Project