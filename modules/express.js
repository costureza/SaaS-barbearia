const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Olá mundo</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Zumir",
      email: "zumir@g.com",
    },
    {
      name: "Zumira",
      email: "zumira@g.com",
    },
  ];
  res.status(200).json(users);
});

const port = 8080;
app.listen(port, () => console.log(`Rodando com o express na porta ${port}`));
