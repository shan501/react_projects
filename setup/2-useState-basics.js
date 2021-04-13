import React, { useState } from 'react';

const UseStateBasics = () => {
  const [color,setColor]=useState("Black")
  const handClick=()=>{
    if (color==="Black"){
      setColor("Red")
    }else{
      setColor("Black")
    }
  }

  return <React.Fragment>
    <h2>{color}</h2>;
    <button className="btn" onClick={handClick}>Change Color</button>
    </React.Fragment>
};

export default UseStateBasics;
