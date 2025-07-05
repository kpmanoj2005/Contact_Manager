# 📇 Contact Manager App

A full-stack MERN application to manage contacts with basic CRUD (Create, Read, Update, Delete) operations.

---

## 🛠 Tech Stack

- **Frontend:** React, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB + Mongoose  
- **Styling:** CSS

---

## 📂 Project Structure

```
Contact-Manager/
├── backend/
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   └── ContactList.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README.md
```

---

## 🚀 How to Run the Project

### 📦 Backend Setup

```bash
cd backend
npm install
node server.js
```
> Ensure MongoDB is running locally at `mongodb://localhost:27017/contactdb`.

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```
> React will run on [http://localhost:3000](http://localhost:3000).

---

## 🔗 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|----------------------|
| GET    | /contacts        | Fetch all contacts   |
| POST   | /contacts        | Create a new contact |
| PUT    | /contacts/:id    | Update contact by ID |
| DELETE | /contacts/:id    | Delete contact by ID |

---

## 🧠 Features

- Add new contacts
- View a list of all contacts
- Edit contact details
- Delete contacts
- Stores data in MongoDB
- Responsive form with validation

---

## ✨ Sample Contact Object

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```