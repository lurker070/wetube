import express from "express";
import passport from "passport";
import { getMe, getJoin, getLogin, githubLogin, logout, postGithubLogin, postJoin, postLogin, facebookLogin, postFacebookLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(
    routes.githubCallback, 
    passport.authenticate("github", { failureRedirect: '/login' }), 
    postGithubLogin
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
    routes.facebookCallback, 
    passport.authenticate("facebook",{ failureRedirect: '/login' }),
    postFacebookLogin
);

export default globalRouter;
