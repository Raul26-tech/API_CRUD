const express = require("express");

const server = express();

server.use(express.json());

const courses = ["Node Js", "JavaScript", "React"];

server.get("/cursos", (req, res) => {
  return res.json(courses);
});

server.get("/curso/:index", (req, res) => {
  const { index } = req.params;

  return res.json(courses[index]);
});

//Criando novos cursos - POST
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  courses.push(name);

  return res.json(courses);
});

//Atualizando um curso - PUT
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  courses[index] = name;

  return res.json(courses);
});

// Excluíndo curso - DELETE
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  courses.splice(index, 1);
  return res.json({ message: "Curso excluído" });
});

server.listen(3000);
