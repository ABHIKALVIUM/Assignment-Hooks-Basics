import React, { useState } from "react";
import { useEffect } from "react";

function Buttons(props){
  const [state, setState] = useState(" ");
  const [like, setLike] = useState(0);
  const handleContent = ()=>{
    setState(state=>state==" "?props.para:" ")
  }
  const handleLike = ()=>{
    setLike(like=>like+1)
  }
  useEffect(()=>{
    alert("Content Button Clicked");
  },[state])
  return(
    <div>
      <h3>{state}</h3>
      <button onClick={handleContent}>Content</button>
      <h4>{like}</h4>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}
export default Buttons;