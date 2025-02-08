const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("Error opening database", err.message);
  } else {
    console.log("Connected to SQLite in-memory database");
    db.run(`CREATE TABLE IF NOT EXISTS product_clicks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id TEXT,
            clicks INTEGER DEFAULT 1
        )`);
  }
});
module.exports = db;
