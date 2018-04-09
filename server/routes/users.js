import express from "express";
import users from "../controllers/userCtrl"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", users.findAll);
router.get("/:id", users.findById);
router.post("/", users.create);
router.put("/:id", users.update);
router.delete("/:id", users.remove);

// Export routes for server.js to use.
export default router;
