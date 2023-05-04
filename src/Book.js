import React, { useState } from "react";
import {useLocation } from "react-router-dom";

function Book(){
    const location=useLocation();
    const {movie}=location.state;
    const [email,setEmail]=useState("");
    const[name,setName]=useState("");
    const booked=()=>{
    localStorage.setItem({name:name,email:email},true);
    alert("currently unavailable")

    }
    return <div className="book">
    <p className="book-p">Book Show</p>
    <div className="data">
    <form onSubmit={booked()}>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email here" required/>
    <label>Name:</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name here" required/>
    <label>Movie Language:</label>
        <input type="text" value={movie.show.language} readOnly/>
        <label>Time of Show:</label>
        <input type="text" value={movie.show.language} readOnly/>
        <label>Time of Show:</label>
        <input type="text" value={movie.show.schedule.time} readOnly/>
        <label>Day of Show:</label>
        <input type="text" value={movie.show.schedule.days} readOnly/>
        <div className="btn">
        <button onClick={(e)=>e.preventDefault()} type="submit" >Book Show</button>
        
        
        </div>

    </form>
</div>
    </div>
}
export default Book;