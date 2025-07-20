import {useState} from 'react';
import Button from '/Button'
function Tasklist({task}){
    const [item,setItem]=useState([]);
    return (
        <>
        <li>{task} <Button text='Remove'/></li>
        </>
    );

}
export default Tasklist;