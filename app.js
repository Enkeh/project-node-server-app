import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import cors from "cors";

import UserRoutes from "./users/routes.js";
import LikesRoutes from "./likes/routes.js";
import FollowsRoutes from "./follows/routes.js";
import WatchedRoutes from "./watched/routes.js";
import CuratedRoutes from "./curated/routes.js";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/project';
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));  
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}));
app.use(express.json());

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
WatchedRoutes(app);
CuratedRoutes(app);

app.listen(process.env.PORT || 4000);
