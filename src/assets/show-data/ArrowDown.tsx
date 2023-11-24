import * as React from "react";
const ArrowDown = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M7 3v18m0 0-4-4m4 4 4-4m3 4h7m-7-6h5m-5-6h3m-3-6h1'
    />
  </svg>
);
export default ArrowDown;
