import React, { useContext } from "react";
import dataContext from "./dataContext";

export const Footer = () => {
  const { list } = useContext(dataContext) ?? { list: [] };
  const len = (list || []).length;
  return (
    <div className="footer">
      <h1>Students Count - {len}</h1>
    </div>
  );
};
