import React, { useContext } from "react";
import dataContext from "./dataContext";

const Header = () => {
  const { title } = useContext(dataContext) ?? { title: "" };
  return (
    <div className="header">
      <h1>{title}</h1>
      <hr />
    </div>
  );
};

export default Header;
