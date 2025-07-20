import {useState} from 'react'
function Usestate(){
const [likes,setlikes]=useState(0);
const [isSubscribed,setSubscription]=useState(false);
   return(
    <>
    <center>

         <div>
        <button onClick={() => setlikes(likes+1)}>👍Like</button>
        <p>Like:{likes}</p>
    </div>
    <div>
        {isSubscribed ?
    (<p>Thanks for subscribing</p>):<button onClick={() => setSubscription(true)} style={{color:'white',backgroundColor:'red',border:'none',borderRadius:'5px'}}>Subscribe</button>}
    </div>

    </center>
 
  
    </>
   );
}
export default Usestate;