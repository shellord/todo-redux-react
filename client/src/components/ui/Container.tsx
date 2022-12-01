import React, { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-900 h-screen p-10">
      <div className="mx-auto w-1/2 flex justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default Container;
