import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Updatedetails(){
    const {s_no}=useParams()
    const[name,setName]=useState('')
    const[department,setDepartment]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3004/getupdate/"+s_no)
        .then(res=>res.json())
        .then((data)=>{
            setName(data[0].name)
            setDepartment(data[0].department)
            setPhone(data[0].phone)
            setEmail(data[0].email)
        })
    },[])
    const handleupdate=(event)=>{
        event.preventDefault()
        var key={
            name:name,
            department:department,
            phone:phone,
            email:email
        }
        axios.put("http://localhost:3004/updatedata/"+s_no,key)
        .then(function(res){
            if(res.data.status==="error"){
                alert("data are not Updated")
            }
            else if(res.data.status==="success"){
                alert("data are updated")
                window.location.href='/view'
            }
        })
    }
    return(
        <>
            <h1>Update Details</h1>
            <form onSubmit={handleupdate}>
                <input type="text" name="name" id="name" value={name} placeholder="Enter the name" onChange={(a)=>{setName(a.target.value)}}/><br/>
                <input type="text" name="department" id="department" value={department} placeholder="Enter the department" onChange={(a)=>{setDepartment(a.target.value)}}/><br/>
                <input type="text" name="phone" id="phone" value={phone} placeholder="Enter the phone" onChange={(a)=>{setPhone(a.target.value)}}/><br/>
                <input type="email" name="email" id="email" value={email} placeholder="Enter the email" onChange={(a)=>{setEmail(a.target.value)}}/><br/>
                <button type="submit" className="btn btn-primary">update</button>
                 
            </form>
        </>
    );
}