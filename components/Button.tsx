import React from "react";

const Button = ({
  variant,
  children,
}: {
  variant: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`bg-blue-200 hover:bg-blue-300 cursor-pointer p-2 rounded ${variant == "icon" && ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
