import axios from "axios";
import React from "react";

export function Insertdata(){
    function insertdetails(event){
        event.preventDefault();
        //getvalue
        var name=document.getElementById("name").value
        var department=document.getElementById("department").value
        var phone=document.getElementById("phone").value
        var email=document.getElementById("email").value
        //change into object for sending to api
        var key={
            name:name,
            department:department,
            phone:phone,
            email:email
        }
        //form validation 
        if(name===''){
            alert("name is empty")
        }
        else if(department===''){
            alert("department is empty")
        }
        else if(phone===''){
            alert("phone number is empty")
        }
        else if(email===''){
            alert("email is empty")
        }
        //api for inserting
        else{
            axios.post("http://localhost:3004/insert",key)
            .then(function(res){
                if(res.data.status==="error"){
                    alert("data are not inserted")
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.reload()
                }
            })
        }
    }
    return(
        <>
            <form onSubmit={insertdetails}>
                <input type="text" name="name" id="name" placeholder="Enter the name"/><br/>
                <input type="text" name="department" id="department" placeholder="Enter the department"/><br/>
                <input type="text" name="phone" id="phone" placeholder="Enter the phone"/><br/>
                <input type="email" name="email" id="email" placeholder="Enter the email"/><br/>
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>
        </>
    );
}