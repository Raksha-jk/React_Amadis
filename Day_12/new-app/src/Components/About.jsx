import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
function About(){
    const [text,setText]=useState("Start");
    const navigate=useNavigate();
    const handled=()=>{
        navigate('/');
    }
    const Click=()=>{
        setText((pre)=>(pre=="Start" ? "Stop":"Start"))
    }
    return(
        <>
        <h1>Welcome to About</h1>
        <button onClick={handled}>Go to Home</button>
        <button onClick={Click}>{text}</button>
        </>
    )
}
export default About;