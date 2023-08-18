import React from "react";
import macimag from './mac.jpg'
import './task2.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export function Card(){
    return(
        <>
            <h1 className="text-primary">This is Card</h1>
            <img src={macimag}/>
            <img src={macimag}/>
            
            <Link to='/'><FontAwesomeIcon icon={faUser} /></Link>
            
        </>
    );
}