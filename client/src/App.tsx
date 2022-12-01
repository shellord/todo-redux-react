import Container from "./components/ui/Container";
import TodoItem from "./components/TodoItem";
import Button from "./components/ui/Button";

const App = () => {
  return (
    <Container>
      <div>
        <div className="flex items-center">
          <input className="bg-gray-500 text-black p-2" />
          <div className="ml-3" />
          <Button onClick={() => null} variant="primary">
            <span className="text-lg">+</span>
          </Button>
        </div>
        <div className="mt-10" />
        <div>
          <div>
            <p>No. of todos: {"1"}</p>
            <div className="mt-5" />
            <TodoItem id={1} value={"Cook food"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default App;
