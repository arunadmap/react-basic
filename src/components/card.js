import React from "react";

const Card = ({ title, icon, button }) => {
  return (
    <div className="flex flex-column card center ">
      <div className="flex center gap-8 flex-column">
        {icon}
        <span> {title} </span>
      </div>
      {button}
    </div>
  );
};

Card.defaultProps = {
  title: "Default Title",
};

export default Card;
