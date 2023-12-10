import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
import userRoute from "./users/routes.js"
import reviewRoute from "./review/routes.js"
import homepageRoute from "./homepage/routes.js"
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/yalp";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

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
userRoute(app);
reviewRoute(app);
homepageRoute(app);
app.use(session(sessionOptions));

app.listen(process.env.PORT || 4000);
