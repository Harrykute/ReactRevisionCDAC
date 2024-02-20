
import React, { Fragment, useState } from "react";
import ReactMemoComp from "./ReactMemoComp";

const MyNameComp = ()=>{
    const[myName,setMyName] = useState("Harish");
    console.log("My Name Comp Call");
    return (
          <div>
            <h2> This is Myname Component </h2>
             <p>Myname {myName}  </p>
            <button type='button' onClick={()=>setMyName("Panch")}> Change Name</button>
            <ReactMemoComp myName={myName} />
          </div>
    )
}
export default MyNameComp;