import React,{Fragment} from "react";
import './external.css';

//chnging color using fuction 
/*const CircleTask = () =>{
     const changeColor = ()=>{
        document.getElementById("d1").style.backgroundColor="red";
     }

    return (
        <div>
             <h2>This is Circle Task Componenetx</h2>
             <div className='circle' id='d1'>
                  hii 
             </div>
             <button type ='button' style={{backgroundColor:"red",color:"white"}} onClick={()=>changeColor("red")}></button>
        </div>
    )
}
export default CircleTask;*/

//Usimg Fragment 
const CircleTask = () =>{
     const changeColor = ()=>{
        document.getElementById("d1").style.backgroundColor="red";
     }

    return (
        <React.Fragment>
             <h2>This is Circle Task Componenetx</h2>
             <div className='circle' id='d1'>
                  hii 
             </div>
             <button type ='button' style={{backgroundColor:"red",color:"white"}} onClick={()=>changeColor("red")}></button>
        </React.Fragment>
    )
}
export default CircleTask;