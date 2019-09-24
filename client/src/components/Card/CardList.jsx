import React from "react";

const CardList = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {children}
    </div>
  );
};

export default CardList;
