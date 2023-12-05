import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
import businessRoutes from "./businesses/routes.js";
import Hello from "./hello.js";

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
    // origin: process.env.FRONTEND_URL,
    origin: "http://localhost:3000",
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
app.use(session(sessionOptions));
app.use(express.json());
businessRoutes(app);
Hello(app);

app.listen(process.env.PORT || 4000);
