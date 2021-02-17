import express from "express";
// eslint-disable-next-line import/no-unresolved
import { postAddComment, postRegisterView } from "../controllers/videocontroller";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;



