import { Router } from "express";

// Local Modules 
import myFirstController from "../controllers/myFirstController";

const router = Router();

// Requests  
router.get('/', myFirstController.methodGet);
router.post('/', myFirstController.methodPost);

module.exports = router;

export default router;