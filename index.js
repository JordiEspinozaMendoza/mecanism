const express = require("express");
const { createServer, get } = require("node:http");
const { join } = require("node:path");
const app = express();
const server = createServer(app);
const { calculate } = require("./utils");

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "client/index.html"));
});

app.get("/index.js", (req, res) => {
  res.sendFile(join(__dirname, "client/index.js"));
});

app.post("/api/calculate", (req, res) => {
  try {
    const theta2 = req.body.theta2 * (Math.PI / 180);
    const theta3 = req.body.theta3 * (Math.PI / 180);
    const theta4 = req.body.theta4 * (Math.PI / 180);

    const result = calculate({
      theta2,
      theta3,
      theta4,
      ...req.body,
    });

    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
