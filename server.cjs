const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const path = require("path");
const dbPath = path.resolve(__dirname, "Points1-7/basketball.sqlite3");
const db = new sqlite3.Database(dbPath);

const app = express();
const port = 3001; // Or another port of your choice

// Middleware
app.use(cors());
app.use(express.json());

// Example API endpoints:
app.get("/data", (req, res) => {
  db.all("SELECT * FROM Player LIMIT 10", (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
});

app.post("/new-data", (req, res) => {
  // Implement logic to insert data using req.body
  res.send("Data added"); // Adjust the response as needed
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
