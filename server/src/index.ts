import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = 3000;

type Todo = {
  id: number;
  value: string;
};

const todos: Todo[] = [];

app.get("/", (_, res) => {
  res.json({ message: "Server is up" });
});

app.get("/todos", (_, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { value } = req.body;

  const todo: Todo = {
    id: Math.floor(Math.random() * 1000),
    value,
  };

  todos.push(todo);

  res.json({ message: "Todo created", todo });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

  if (todoIndex === -1) {
    res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(todoIndex, 1);

  res.json({ message: "Todo deleted" });
});

app.listen(port, () => {
  console.log(`🚀 Server started at http://localhost:${port}`);
});
