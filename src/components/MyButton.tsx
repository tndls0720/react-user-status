import React from "react";

interface MyBottonProps {
  onClick: () => void;
}

export const MyButton: React.FC<MyBottonProps> = ({ onClick }) => {
  return <button onClick={onClick}>상태변경</button>;
};