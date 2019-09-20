import React from "react";
import { Motion, spring } from "react-motion";
const NavbarShape = ({ width, height }) => (
  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
    {({ opacity }) => (
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 108.27 97.21"
        style={{
          opacity
        }}
      >
        <defs>
          <style>{`.cls-1{
            stroke:#666;
            fill: none;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation: dash 3s forwards;
          }
          @keyframes dash {
              to {
                  stroke-dashoffset: 0;
              }
          }`}</style>
        </defs>
        <circle className="cls-1" cx="34.68" cy="34.68" r="34.18" />
        <rect
          className="cls-1"
          x="35.23"
          y="24.02"
          width="72.75"
          height="72.75"
        />
      </svg>
    )}
  </Motion>
);

export default NavbarShape;
