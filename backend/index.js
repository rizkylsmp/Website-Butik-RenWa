const bodyParser = require("body-parser");
const response = require("./response");
const express = require("express");
const db = require("./connect");
const cors = require("cors");
const app = express();
const port = 8800;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/produk", (req, res) => {
  const sql = "SELECT * FROM produk";
  db.query(sql, (error, result) => {
    if (error) {
      response(500, "invalid", "error", res);
    }
    response(200, result, "Get all data from produk", res);
  });
});

app.get("/produk/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM produk WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      response(500, "invalid", "error", res);
    }
    response(200, result, "Nama produk by id", res);
  });
});

app.post("/produk", (req, res) => {
  const { nama, harga } = req.body;
  const sql = `INSERT INTO produk (nama, harga) VALUES ('${nama}', '${harga}')`;
  db.query(sql, (error, result) => {
    if (error) {
      response(500, "invalid", "error", res);
    }
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        id: result.insertId,
      };
      response(200, data, "Data berhasil ditambahkan", res);
    }
  });
});

app.put("/produk", (req, res) => {
  const { nama, harga } = req.body;
  const sql = `UPDATE produk SET harga = ${harga} WHERE nama = '${nama}'`;
  db.query(sql, (error, result) => {
    if (error) {
      response(500, "invalid", "error", res);
    }
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        message: result.message,
      };
      response(200, data, "Data berhasil diubah", res);
    } else {
      response(404, "not found", "error", res);
    }
  });
});

app.delete("/produk", (req, res) => {
  const { nama } = req.body;
  const sql = `DELETE FROM produk WHERE nama = '${nama}'`;
  db.query(sql, (error, result) => {
    if (error) {
      response(500, "invalid", "error", res);
    }
    if (result?.affectedRows) {
      const data = {
        isDeleted: result.affectedRows,
        message: result.message,
      };
      response(200, data, "Data berhasil dihapus", res);
    } else {
      response(404, "not found", "error", res);
    }
  });
});

app.listen(port, () => {
  console.log(`Localhost:${port}`);
});
