const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const path = require("path");
const dbPath = path.resolve(__dirname, "Points1-7/basketball.sqlite3");
const db = new sqlite3.Database(dbPath);

const app = express();
const port = 3001; 

// Middleware
app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  db.all(
    `SELECT * 
          FROM Player 
          LIMIT 12`,
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: rows });
      }
    }
  );
});

app.get("/api/stats", (req, res) => {
  db.all(
    `SELECT * 
          FROM Stat 
          ORDER BY count DESC
          LIMIT 12 `,
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: rows });
      }
    }
  );
});

app.get("/players", (req, res) => {
  const { name } = req.query;
  db.all(
    `SELECT * FROM Player WHERE name LIKE ?`,
    ["%" + name + "%"],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: rows });
      }
    }
  );
});

app.get("/players/:id", (req, res) => {
  const { id } = req.params;
  db.all(
    `SELECT * FROM Player WHERE player_id = ?`,
    [id], // Parameterized input
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ data: rows });
      }
    }
  );
});

app.post("/new-data", (req, res) => {
  res.send("Data added"); 
});

app.post('/addPlayer', (req, res) => {
  const { school_id, name, age, height, weight, position } = req.body;

  // Insert player into the database
  const sql = 'INSERT INTO Player (school_id, name, age, height, weight, position) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [school_id, name, age, height, weight, position];

  db.run(sql, values, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Player successfully added
    res.json({ message: 'Player added successfully', player_id: this.lastID });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
