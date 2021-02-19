const loginRoute = require("./login");

const constructorMethod = app => 
{
  app.use("/login", loginRoute);

  app.get("/", function(req, res) {
    res.send("Welcome to MELODIA!");
  });

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });

};

module.exports = constructorMethod;