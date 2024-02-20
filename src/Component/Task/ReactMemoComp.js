import React, { useState } from "react";

const ReactMemoComp = (props)=>{

       console.log("React memeo Comp Call")
       return (
                <div>
                    <h1> This is ReactMemoComp </h1>
                    <p> MyName Is : {props.myName}</p>
                    
                </div>
       )

}
export default ReactMemoComp;