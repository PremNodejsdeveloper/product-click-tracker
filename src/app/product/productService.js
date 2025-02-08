const db = require("../../config/database.js");

exports.trackClick = (product_id) => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT * FROM product_clicks WHERE product_id = ?",
      [product_id],
      (err, row) => {
        if (err) return reject(err);
        if (row) {
          db.run(
            "UPDATE product_clicks SET clicks = clicks + 1 WHERE product_id = ?",
            [product_id],
            (updateErr) => {
              if (updateErr) return reject(updateErr);
              resolve(row.clicks + 1);
            }
          );
        } else {
          db.run(
            "INSERT INTO product_clicks (product_id, clicks) VALUES (?, ?)",
            [product_id, 1],
            (insertErr) => {
              if (insertErr) return reject(insertErr);
              resolve(1);
            }
          );
        }
      }
    );
  });
};

exports.getClickCount = (product_id) => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT clicks FROM product_clicks WHERE product_id = ?",
      [product_id],
      (err, row) => {
        if (err) return reject(err);
        resolve(row ? row.clicks : 0);
      }
    );
  });
};
