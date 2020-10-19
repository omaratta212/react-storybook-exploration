import React from "react";

export interface LoadingProps {
  w: number,
  h : number
}
export const Loading: React.FC<LoadingProps> = ({w, h}) => (
  <svg
    style={{margin:'auto', background: "background: rgb(221, 221, 221)"}}
    width={w + 'px'}
    height={h + 'px'}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#ffffff"
      stroke-width="10" r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138">
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1">
      </animateTransform>
    </circle>
  </svg>
)
