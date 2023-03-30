import React from "react";

type ButtonProps = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Button = ({ handleClick, handleChange, value = "" }: ButtonProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default Button;
