import * as React from "react";

const Menu: React.FC = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M24 18a2 2 0 1 0 0-4H8a2 2 0 1 0 0 4zM8 10a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4zM24 26a2 2 0 1 0 0-4H8a2 2 0 1 0 0 4z'
      style={{
        fill: "rgba(255,255,255,0.1)",
        stroke: "#ffffff",
        strokeWidth: 1,
        strokeMiterlimit: 10
      }}
    />
  </svg>
);
export default Menu;
