import { Router } from "express";

// Local Modules
import myFirstController from "../controllers/myFirstController";
import interactionWithDiscordController from "../controllers/interactionWithDiscordController";

const router = Router();

// Requests
router.get("/", myFirstController.methodGet);
router.post("/", myFirstController.methodPost);

router.post(
  "/interactions",
  interactionWithDiscordController.interactionMethod
);

module.exports = router;

export default router;
