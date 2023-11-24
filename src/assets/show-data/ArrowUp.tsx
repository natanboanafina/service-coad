import * as React from "react";
const SvgArrowUp = (props: any) => (
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
      d='M7 3v18M7 3l4 4M7 3 3 7m11-4h7m-7 6h5m-5 6h3m-3 6h1'
    />
  </svg>
);
export default SvgArrowUp;
