import React from "react";

interface LeafsvgProps {
  classname?: string;
  type?: string;
}

function Leafsvg({ classname, type }: LeafsvgProps) {
  return (
    <>
      {type === "Dark" ? (
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
            fill="#28E3E9"
          />
        </svg>
      ) : (
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0V6C10 11.5228 5.52285 16 0 16V10Z"
            fill="#62C3C6"
            fill-opacity="0.3"
          />
        </svg>
      )}
    </>
  );
}

export default Leafsvg;
