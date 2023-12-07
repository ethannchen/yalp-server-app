import * as dao from "./dao.js";
let currentUser = null;
function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
    }
    currentUser = await dao.createUser(req.body);
    res.json(currentUser);
  };
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    currentUser = await dao.findUserById(userId);
    res.json(status);
  };
  const findUserByUsername = async (req, res) => {
    const user = await dao.findUserByUsername(req.params.username);
    res.json(user);
  };
  app.post("/api/users", createUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.put("/api/users/:userId", updateUser);
  app.get("/api/users/:username", findUserByUsername);
}
export default UserRoutes;