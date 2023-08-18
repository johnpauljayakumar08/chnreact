import axios from "axios";
import React from "react";

export function Registration(){
    function handlesignup(event){
        event.preventDefault()
        var roll=document.getElementById("roll").value
        var name=document.getElementById("name").value
        var department=document.getElementById("department").value
        var phone=document.getElementById("phone").value
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value
        var key={
            roll:roll,
            name:name,
            department:department,
            phone:phone,
            email:email,
            password:password

        }
        if(roll===''){
            alert("Select the Roll")
        }
        else if(name===""){
            alert("Enter the name")
        }
        else if(department===""){
            alert("Enter the department")
        }
        else if(phone===""){
            alert("Enter the phone")
        }
        else if(email===""){
            alert("Enter the email")
        }
        else if(password===""){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:3004/register",key)
            .then(function(res){
                if(res.data.status==="error"){
                    alert("Data are not inserted")
                }
                else if(res.data.status==="success"){
                    alert("user is Created")
                }
            })
        }
    }
    return(
        <>
            <form onSubmit={handlesignup}>
                <select id="roll" name="roll">
                    <option>Select the Roll</option>
                    <option value="staff">Staff</option>
                    <option value="student">student</option>
                </select>
                <input type="text" name="name" id="name" placeholder="Enter the name"/><br/>

                <input type="text" name="department" id="department" placeholder="Enter the department"/><br/>
                <input type="text" name="phone" id="phone" placeholder="Enter the phone"/><br/>
                <input type="email" name="email" id="email" placeholder="Enter the email"/><br/>
                <input type="password" name="password" id="password" placeholder="Enter the password"/><br/>
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>
        </>
    );
}
