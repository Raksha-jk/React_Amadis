import { useEffect, useState } from "react";
function Form(){
    const [name,setName]=useState("");
    useEffect(()=>{console.log("name Changed",name)},[name])
    return(
        <>
        <form>
            <label>Enter the name:
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </label>
        </form>
        </>
    )
}
export default Form;