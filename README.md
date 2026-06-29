# REST + Socket.IO Chat API

A simple real-time chat backend built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **Socket.IO**.

## 🚀 Features

- Create Users
- List All Users
- Send Messages
- Retrieve Conversation Between Two Users
- Real-time Message Broadcasting using Socket.IO
- MongoDB Database Integration
- Automatic Timestamps for Messages

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Postman

---

## 📁 Project Structure

```
REST-SOCKET.IO-CHAT-API
│
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── user.controller.js
│   │   └── message.controller.js
│   ├── models
│   │   ├── User.js
│   │   └── Message.js
│   ├── routes
│   │   ├── user.routes.js
│   │   └── message.routes.js
│   ├── socket
│   │   └── socket.js
│   ├── app.js
│   └── server.js
│
├── socket-test
│   └── test.html
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd REST-SOCKET.IO-CHAT-API
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file.

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### Start the server

```bash
npm run dev
```

---

## 📌 API Endpoints

### Create User

```
POST /users
```

Request Body

```json
{
  "username": "Bhanu"
}
```

---

### Get All Users

```
GET /users
```

---

### Send Message

```
POST /messages
```

Request Body

```json
{
  "sender": "<sender_user_id>",
  "receiver": "<receiver_user_id>",
  "text": "Hello!"
}
```

---

### Get Conversation

```
GET /messages/:user1/:user2
```

Example

```
GET /messages/USER_ID_1/USER_ID_2
```

---

## 🔌 Socket.IO Events

### Client Listens

```
new_message
```

Whenever a new message is created, the server broadcasts it to all connected clients.

---

## 🧪 Testing Socket.IO

A simple test client is available:

```
socket-test/test.html
```

Open it using **Live Server** and send a `POST /messages` request using Postman.

You should receive the `new_message` event instantly in the browser console.

---

## 📷 Testing with Postman

Use Postman to test:

- Create User
- List Users
- Send Message
- Get Conversation

---

## 👨‍💻 Author

**Bhanu Aitireddy**