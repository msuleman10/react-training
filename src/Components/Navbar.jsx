import React from 'react';
import { useState } from "react";
import Home from '../Pages/Home';
function Navbar() {
    const [data , setData]=useState("hello");
    
    const handelClick=()=>{
        setData(<Home />)
    };
    return (
        <>
        <nav>
            <h2>Hello</h2>
            <div>
                <input type="text" />
                <button>search</button>
            </div>
            <button onClick={handelClick}>Home</button>
        </nav>
        <div>{data}</div>
        </>
    )
}

export default Navbar
