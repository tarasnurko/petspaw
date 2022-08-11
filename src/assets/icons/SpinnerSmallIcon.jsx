import React from "react";

const SpinnerSmallIcon = () => {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={8} cy={8} r={7} stroke="url(#a)" strokeWidth={2} />
      <defs>
        <radialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 8 -8 0 8 8)"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SpinnerSmallIcon;
