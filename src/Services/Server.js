// import img from ".././component/User_Doc_Images/upload_images"

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const app = express();
const port = 8080;
const path = require("path");

const corsOptions = {
  origin: "*",
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  exposedHeaders: ["Authorization", "Other-Header"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "database",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Registration Endpoint
app.post("/user/create", (req, res) => {
  const { firstName, lastName, email, mobile, username, password } = req.body;

  const sql =
    "INSERT INTO users (first_name, last_name, email, mobile, username, password) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [firstName, lastName, email, mobile, username, password],
    (err, result) => {
      if (err) {
        console.error("Registration failed:", err);
        res
          .status(500)
          .json({ success: false, message: "Registration failed" });
      } else {
        res.json({ success: true, message: "Registration successful" });
      }
    }
  );
});
const jwt = require("jsonwebtoken");
// const { default: Control } = require("react-select/dist/declarations/src/components/Control");

// Login Endpoint
app.post("/generate-token-authentication", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Login failed:", err);
      res.status(500).json({ success: false, message: "Login failed" });
    } else if (result.length === 0) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    } else {
      const user = result[0];
      const token = jwt.sign(
        { sub: result[0].id, username: user.username },
        "secret",
        { expiresIn: "1h" }
      );

      // Include the token in the response
      res.json({
        success: true,
        message: "Login successful",
        token,
        username: user.username,
      });
    }
  });
});

// Create Query Endpoint
app.post("/query/create", (req, res) => {
  const { queryCategory, queryDescription, date, replay, status } = req.body;

  const sql =
    "INSERT INTO query ( queryCategory, queryDescription, date, replay, status) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [queryCategory, queryDescription, date, replay, status],
    (err, result) => {
      if (err) {
        console.log(result);
        console.error("Query creation failed:", err);
        res
          .status(500)
          .json({ success: false, message: "Query creation failed" });
      } else {
        const newQuery = {
          queryCategory,
          queryDescription,
          date,
        };

        res.status(201).json(newQuery);
      }
    }
  );
});

// Create Review Endpoint
app.post("/review/create", (req, res) => {
  const { course, is_publish, overall_rating, review_for, review_date } =
    req.body;

  const sql =
    "INSERT INTO reviews (course, review_for, overall_rating, is_publish, review_date) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [course, review_for, overall_rating, is_publish, review_date],
    (err, result) => {
      if (err) {
        console.error("Review creation failed:", err);
        res
          .status(500)
          .json({ success: false, message: "Review creation failed" });
      } else {
        const newReview = {
          course,
          review_for,
          overall_rating,
          is_publish,
          review_date,
        };

        res.status(201).json(newReview);
      }
    }
  );
});

app.options("/bank/addBank", cors(corsOptions));
app.post("/bank/addBank", cors(corsOptions), (req, res) => {
  const { bankName, accountHolderName, accountNumber, ifscCode, upiId } =
    req.body;

  // Assuming you have a table named 'bank_details'
  const sql =
    "INSERT INTO bank_details ( account_holder_name, account_number, bank_name, ifsc_code, upi_id) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [accountHolderName, accountNumber, bankName, ifscCode, upiId],
    (err, result) => {
      if (err) {
        console.error("Bank details update failed:", err);
        res
          .status(500)
          .json({ success: false, message: "Bank details update failed" });
      } else {
        res.json({
          success: true,
          message: "Bank details updated successfully",
        });
      }
    }
  );
});

app.put("/bank/updateBank", cors(corsOptions), (req, res) => {
  const bankId = req.params.id;
  const { bankName, accountHolderName, accountNumber, ifscCode, upiId } =
    req.body;

  // Assuming you have a table named 'bank_details'
  const sql =
    "UPDATE bank_details SET account_holder_name = ?, account_number = ?, bank_name = ?, ifsc_code = ?, upi_id = ? WHERE id = ?";

  db.query(
    sql,
    [accountHolderName, accountNumber, bankName, ifscCode, upiId, bankId],
    (err, result) => {
      if (err) {
        console.error("Bank details update failed:", err);
        res
          .status(500)
          .json({ success: false, message: "Bank details update failed" });
      } else {
        res.json({
          success: true,
          message: "Bank details updated successfully",
        });
      }
    }
  );
});

app.put("/changePassword", cors(corsOptions), (req, res) => {
   const { username, currentPassword, newPassword } = req.body;

  // Assuming you have a table named 'bank_details'
  const checkPasswordSql =
    "SELECT * FROM users WHERE username = ? AND password = ?";
  const updatePasswordSql = "UPDATE users SET password = ? WHERE username = ?";

  db.query(checkPasswordSql, [username, currentPassword], (err, result) => {
    if (err) {
        console.error("Password Not Change:", err);
        res
          .status(500)
          .json({ success: false, message: "Password Not Change" });
      }  else if (result.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid old password" });
      }else {
      // Step 2: Update the password if the old password is correct
      db.query(updatePasswordSql, [newPassword, username], (updateErr) => {
        if (updateErr) {
          console.error("Error updating password:", updateErr);
          return res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        } else {
          return res.json({
            success: true,
            message: "Password changed successfully",
          });
        }
      });
    }
  });
});

// File Upload Endpoint

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.resolve(__dirname, "../component/User_Doc_Images/upload_images")
    );
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/file/upload", upload.single("multipartFile"), (req, res) => {
  const { selectCategory } = req.body;
  const filePath = req.file.path;
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    console.log(filePath);
    // const userId = decoded.sub;
    const sql =
      "INSERT INTO file_upload (id, document, selectCategory) VALUES (null, ?, ?)";

    db.query(sql, [filePath, selectCategory], (dbErr, result) => {
      if (dbErr) {
        console.error("File upload failed:", dbErr);
        res.status(500).json({ success: false, message: "File upload failed" });
      } else {
        res.json({ success: true, message: "File uploaded successfully" });
      }
    });
  });
});

// app.options('/upload/:id', cors(corsOptions));

app.get(`/file/getAllFile`, (req, res) => {
  const userId = req.params.id;

  console.log(res);

  const sql =
    "SELECT * FROM file_upload (id, document, selectCategory) VALUES (?, ?, ?)";

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error fetching files:", err);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
