// mongo-init/init.js
db = db.getSiblingDB('devdb'); // this matches your .env DB name

db.users.insertMany([
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" }
]);

print("✅ Seed data inserted into devdb.users");
