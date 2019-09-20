import React from "react";

const fontStyles = {
  h1: "3em",
  h2: "2.3em",
  h3: "1.8em",
  h4: "1.4em",
  h5: "1.2em",
  h6: "1.1em",
  p: "1em"
};
const Title = ({
  children,
  size = "h1",
  variant = "h1",
  noMargin,
  ligther,
  style,
  ...props
}) => {
  const fontSize = fontStyles[size];
  const Tag = variant;

  const tagStyle = {
    fontSize,
    margin: 0,
    marginBottom: noMargin ? 0 : ".7em",
    fontWeight: ligther ? "lighter" : "bold",
    letterSpacing: "-.015em",
    ...style
  };
  return (
    <Tag style={tagStyle} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
