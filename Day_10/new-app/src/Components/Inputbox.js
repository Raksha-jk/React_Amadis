import Button from './Button';
import {useState} from 'react'
import {useRef} from 'react'
function Inputbox({setTask}){
    const myRef=useRef(null);
    const handle=()=>{
        const myTask=myRef.current.value.trim();
        if(myTask){
            setTask(myTask);
            myRef.current.value="";
        }
    }
    return (
        <>
        <input ref={myRef} className='task' placeholder='Enter the task'></input>
        <Button onClick={handle} text='Add'/>
        </>
    )
}
export default Inputbox;