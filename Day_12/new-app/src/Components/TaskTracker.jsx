import {useState} from 'react';
function TaskTracker(){
    const [item,setItem]=useState("");
    const [task,setTask]=useState([]);
    const submit=()=>{
        setTask([...task,item]);
    }
    return(
        <>
            <h1>Task Tracker</h1>
            <form onSubmit={submit}>
                <input type="text" onChange={(e)=>(setItem(e.target.value))}/>
                <button>Add task</button>
            </form>
        </>
    );
}
export default TaskTracker;