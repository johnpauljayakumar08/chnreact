import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";

export function Login(){
    function handleLogin(event){
        event.preventDefault()
        var username=document.getElementById("username").value 
        var password=document.getElementById("password").value 
        var key={
            username:username,
            password:password
        }
        if(username===''){
            alert("Enter the username")
        }
        else if(password===''){
            alert("enter the password")
        }
        else{
            axios.post("http://localhost:3004/login",key)
            .then((res)=>{

                if(res.data.status==="success"){
                    let id=res.data.id
                    let roll=res.data.roll
                    if(roll==="staff"){
                        window.location.href=`/staff/${id}`
                    }
                    else if(roll==="student"){
                        window.location.href=`/student/${id}`
                    }

                }
                else if(res.data.status==="invalid_user"){
                    alert("Please check the login details")
                }
                else if(res.data.status==="error"){
                    alert("Please enter the crt username ")
                }
            })
        }
    }
    return(
        <>
            <form onSubmit={handleLogin}>
                <input type="text" id="username" name="username" placeholder="Enter the Username"/>
                <input type="password" id="password" name="password" placeholder="Enter the Password"/>
                <button type="submit" className="btn btn-success">Login</button>
                <a href="tel:9994736580"><FontAwesomeIcon icon={faUmbrella}/></a>
            </form>
        </>
    );
}