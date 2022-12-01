import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  onClick: () => void;
  variant: "primary" | "secondary";
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  variant,
}) => {
  return (
    <button
      className={clsx("px-3 py-1 rounded", {
        "bg-green-500": variant === "primary",
        "bg-red-500": variant === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
