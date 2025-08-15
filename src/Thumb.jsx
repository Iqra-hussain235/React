import { useState } from "react";



export default function Thumb()
{
    
    let [isthumb,setisthumb] = useState(false);
    let [click,setclick] =useState(false);
    let toggleLike = ()=>{
        console.log("Like toggled");
        setisthumb(!isthumb);
        setclick(click+1);
        
    }
    
 
  return (
    <div>

    
    <p onClick={toggleLike}>
        {
            isthumb ? <i class="fa-regular fa-thumbs-up"></i>:<i class="fa-solid fa-thumbs-up"></i>
        }
    </p>
    <p onClick={click}>click={click}</p>
    </div>
  );
};