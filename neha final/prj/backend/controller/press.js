const { conn } = require("../db/conn");

// CREATE operation
const createEntry = async (req, res) => {
  const { title, content, status } = req.body;

  try {
    conn.query(
      `INSERT INTO press (title, content, status) VALUES (?, ?, ?)`,
      [title, content, status],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Entry created successfully');
        }
      }
    );
  } catch (error) {
    res.send(error);
  }
};

// READ operation
const getAllEntries = async (req, res) => {
  try {
    conn.query('SELECT * FROM press', (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    res.send(error);
  }
};

// UPDATE operation
const updateEntry = async (req, res) => {
  const { id, title, content, status } = req.body;

  try {
    conn.query(
      `UPDATE press SET title = ?, content = ?, status = ? WHERE id = ?`,
      [title, content, status, id],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Entry updated successfully');
        }
      }
    );
  } catch (error) {
    res.send(error);
  }
};

// DELETE operation
const deleteEntry = async (req, res) => {
  const { id } = req.body;

  try {
    conn.query(
      `DELETE FROM press WHERE id = ?`,
      [id],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Entry deleted successfully');
        }
      }
    );
  } catch (error) {
    res.send(error);
  }
};

module.exports = { createEntry, getAllEntries, updateEntry, deleteEntry };
