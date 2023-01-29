import React from "react";

function Button({
  text,
  bg,
  info,
  padding,
  width,
  font,
  type,
  size,
  border,
  rounded,
}) {
  return (
    <button
      type={type}
      className={`${text} ${bg} ${width} ${border} ${font} ${size} ${padding} ${rounded}`}
    >
      {/* py-2 px-4  */}
      {info}
    </button>
  );
}

export default Button;
