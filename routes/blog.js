const express = require("express");
const {
  Addblog,
  Deleteblog,
  Editblog,
  Getblogs,
} = require("../controllers/blog");
const blog = require("../models/newUser");
const blogRoute = express.Router();

blogRoute.post("/add", Addblog);
blogRoute.get("/all", Getblogs);
blogRoute.delete("/delete/:id", Deleteblog);
blogRoute.put("/edit/:id", Editblog);
module.exports = blogRoute;