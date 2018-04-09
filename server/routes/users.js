import express from "express";
import users from "../controllers/usersCtrl";

const router = express.Router();

// Route to get list of crypto currencies for drop down.
//Index
router.get("/", users.findAll);
//Read
router.get("/:id", users.findById);
//Create
router.post("/", users.create);
//Update
router.put("/:id", users.update);
//Destroy
router.delete("/:id", users.remove);

// Export routes for server.js to use.
export default router;
