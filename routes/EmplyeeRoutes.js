const express = require("express");
const EmplyeeRoutes = express.Router();
const employeeController = require("../controller/employeeController");
const fileStorage = require("../tools/fileStorage");
const {checkAuth, authorizeAdmin, authorizeUser} = require("../middleware/authMiddleware");

EmplyeeRoutes.get("/all",employeeController.getAllemployee);
EmplyeeRoutes.post("/create",fileStorage.upload,employeeController.create);
EmplyeeRoutes.put("/update/:id",fileStorage.upload,employeeController.updateEmployee);
EmplyeeRoutes.delete("/delete/:id",employeeController.deleteEmployee);
EmplyeeRoutes.get("/:id",employeeController.getemployeeById);
/*
EmplyeeRoutes.put("/update/:id",checkAuth,authorizeAdmin,fileStorage.upload,employeeController.updateEmployee);
EmplyeeRoutes.delete("/delete/:id",checkAuth,authorizeAdmin,employeeController.deleteEmployee);
*/

module.exports = EmplyeeRoutes;

