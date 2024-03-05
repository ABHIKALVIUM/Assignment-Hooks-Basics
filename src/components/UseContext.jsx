import React, { useContext } from "react";
import { ToggleTheme } from "../App";
import Buttons from "./Buttons";

function useContent() {
  const para = `The latest folded phones redefine portability and innovation, 
  seamlessly blending cutting-edge technology with a foldable design. 
  Offering expansive foldable screens, these devices effortlessly transition 
  from compact to tablet-sized displays.`;

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "orange" : "grey",
    color: theme ? "black" : "black",
    padding: "10%",
    margin: "8%",
  };

  return (
    <div style={themeStyle}>
      <Buttons para={para} />
    </div>
  );
}

export default useContent;
