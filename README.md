# 🚀 Express TypeScript API with MongoDB, Swagger, and Docker

A production-ready REST API boilerplate using:

- ✅ Express.js with TypeScript
- ✅ MongoDB with Mongoose
- ✅ Swagger auto-generated documentation
- ✅ Docker & Docker Compose support
- ✅ MongoDB seed data on container startup
- ✅ Environment configuration with `.env`

---

## 📦 Features

- Auto-generated Swagger docs from JSDoc (`/api-docs`)
- Type-safe API with TypeScript
- MongoDB data seeding on first run
- Docker multi-stage build for optimized image size (~250MB)
- Easy development with live-reloading
- Clean separation of concerns: models, routes, config

---

## 📁 Project Structure

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Docs:** Swagger (auto-generated)
- **Dev Tools:** ts-node-dev, Docker, dotenv

---

## 🧪 MongoDB Seed Data

On first run, MongoDB will auto-load seed data from:

```js
// mongo-init/init.js
db = db.getSiblingDB("devdb");
db.users.insertMany([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
]);
```
