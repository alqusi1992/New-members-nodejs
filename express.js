const express = require("express");
const app = express();
const path = require("path");
// const middleware = require("./middleware/middleware");

const PORT = process.env.PORT || 5000;

// init middle ware
// app.use(middleware);

// Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/Members", require("./routes/api/Members"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
