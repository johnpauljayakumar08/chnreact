import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import axios  from 'axios'
export function HooksEffect(){
    const[effect,setEffect]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3004/userdetails")
        .then(res=>res.json())
        .then(data=>setEffect(data))
    },[])
    const del=(s_no)=>{
        var key={s_no:s_no}
        axios.post("http://localhost:3004/delete",key)
        .then(function(res){
            if(res.data.status==="error"){
                alert("your data is not Deleted")
            }
            else if(res.data.status==="success"){
                alert("data is deleted")
                window.location.reload()
            }
        })
        axios.post("http://localhost:3004/insert",key)
    }
    return(
        <>
            <div className="container-fluid row">

                {effect.map((value,index)=>(
                    <>
                        <div class="card col-lg-4" >
                           
                            <div class="card-body">
                                <h5 class="card-title">{value.name}</h5>
                                <p class="card-text">${value.department}</p>
                                <h4>{value.phone}</h4>
                                <h5>{value.email}</h5>
                                <Link to={`/update/${value.s_no}`} class="btn btn-primary">update</Link>
                                <button className="btn btn-danger" onClick={()=>{del(value.s_no)}} >Delete</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}