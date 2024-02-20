import React from "react";

const ChildComp = (props)=>{
    
    return <div> <h1>This Is Child Component </h1>
                  <p> <strong>{props.id}</strong></p>
             <p> <strong>{props.name}</strong></p>
             <p><strong>{props.name}</strong></p>
              <hr/>
             
             
    </div>
}

export default ChildComp;