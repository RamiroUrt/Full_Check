import React from "react";
import "./BurgerCheck.css";

const BurgerCheck = ({ open }: { open: boolean }) => {
  return (
    <div className={`burger ${open ? "open" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerCheck;
