const Hello = (app) => {
  app.get("/hello", (req, res) => {
    res.send("Life is good!");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to the Final Project of Yalp!");
  });
};

export default Hello;
