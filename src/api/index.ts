import { Router } from "express";

import users from "./routes/users.route";
const router: Router = Router();

router.use("/users", users);
// router.use("/projects", projects);

export default router;
