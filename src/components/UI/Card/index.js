import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {/* Conditionally render card header if props are provided */}
      {(props.headerLeft || props.headerRight) && (
        <div className="cardHeader">
          {props.headerLeft && (
            <div
              style={{
                alignSelf: "center",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {props.headerLeft}
            </div>
          )}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {/* Render card content */}
      {props.children}
    </div>
  );
};

export default Card;
