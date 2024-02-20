
import React, {useState} from "react";

const ConrenComp = ()=>{
         const[isCond,setIsCond] = useState(true);

    //1. use of if else 
    /*  if(isCond){
          return <h2> This is Panchashil </h2>
      }
      else{
        return <h2> This is user Harish </h2>
      }

    return <div>
            <h1> This is Confitional Component </h1>
    </div>*/

    //2. Element as Variable
   /* let msg=""
    if(isCond){
        msg = "This Is If Block "
    }
    else{
        msg="This is Else Block"
    }
    return <h2>{msg}</h2>*/

    //using ternary Operator

    /*return (!isCond) ? <h2>This is Harish </h2> : <h2>This is Harish Kute</h2>*/

    //4. use of Short ciruit 
     /* return (isCond) && <h2>This is Harish </h2>*/

     

}

export default ConrenComp;