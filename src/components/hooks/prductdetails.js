import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

export function Details(){
    const {s_no}=useParams()
    const[uimage,setUimage]=useState('')
    const[sname,setSname]=useState('')
    const[des,setDes]=useState('')
    const[phone,setPhone]=useState('')
    const[mark,setMark]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3004/paruser/"+s_no)
        .then(res=>res.json())
        // .then(data=>setEffect(data));
        .then((data)=>{
                setUimage(data[0].uimage)
                setSname(data[0].sname)
                setDes(data[0].des)
                setPhone(data[0].phone)
                setMark(data[0].mark)
        })
        

    },[])
    return(
        <>
            <div className="container-fluid row">
                <div className="col-lg-6">
                    <img src={uimage} className="container-fluid"/>
                </div>
                <div className="col-lg-6">
                    <h1>{sname}</h1>
                    <p>{des}</p>
                    <h4>$ {phone}</h4>
                    <h4>{mark}</h4>
                    {/* <h5>{effect.rating.rate}</h5>
                    <h5>{effect.rating.count}</h5> */}
                </div>
            </div>
        </>
    );
}