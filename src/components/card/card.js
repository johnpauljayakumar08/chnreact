import React from "react";
import profile from './profile.png'
import watch from './watch.png'
import './card.css'
export function Congcard(){
    return(
        <>
            <div className="card_bg text-center ">
                <h1>Congralution</h1>
                <div className="cardbgcolor col-lg-4 mx-auto p-5 rotate">
                    <img src={profile}/>
                    <h1>john paul</h1>
                    <p> i am john paul Full stack Developer</p>
                    <img src={watch}/>
                </div>
            </div>
        </>
    );
}