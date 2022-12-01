import React from "react";
import Button from "./ui/Button";

type Props = {
  id: number;
  value: string;
};

const TodoItem: React.FC<Props> = ({ id, value }) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <p>{value}</p>
      <Button onClick={() => null} variant="secondary">
        <span className="text-lg">X</span>
      </Button>
    </div>
  );
};

export default TodoItem;
