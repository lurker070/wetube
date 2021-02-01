import express from "express";
import { deleteVideo, editVideo, videoDetail, videos } from "../controllers/videocontroller";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get("/", videos);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

