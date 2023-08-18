import React, { useState } from "react";

export function Datefun(){
    const[view,setView]=useState("")
    function day(){
        var data=document.getElementById("date").value
        var mydata=new Date(data)
        alert(mydata)
        mydata.setDate(mydata.getDate()+5)
        var date=mydata.getDate()
        var month=mydata.getMonth()+1
        var year=mydata.getFullYear()
       setView(date+"/"+month+"/"+year)
        
   }
    return(
        <>
            <input type="date" id="date"/>
            <button onClick={day}>submit</button>
            <h1>{view}</h1>

        </>
    );
}