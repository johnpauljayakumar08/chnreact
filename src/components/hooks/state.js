import React, { useState } from "react";
export function Hooksstate(){
    // const[variable,setVariable]=useState(inin-value)
    const[count,setCount]=useState(0)
    
    return(
        <>
            <h1>{count}</h1>
            <button type="button" onClick={()=>{setCount(count+5)}}>Add</button>
            <button type="button" onClick={()=>{setCount(count-5)}}>sub</button>
        </>
    );
}