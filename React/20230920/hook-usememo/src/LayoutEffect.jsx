// import React, {useState, useEffect } from 'react';

// export default function LayoutEffect() {
//     const [num, setNum] = useState(0);

//     useEffect(() => {
//         for(let i=0; i<1000000; i++){

//         }
//         setNum((prev) => prev + 1); //사실은 엄청 오래걸리고 어려운 로직
//     },[]);

//     return (
//         <div>{num}</div>
//     )
// }

import { useState, useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
  const [value, setValue] = useState(100);
  
  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
		<div style={{ width: value, height: value, backgroundColor: 'blue'}}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default LayoutEffect;
