
import ChildComp from "./ChildComponent";
import React,{useState} from "react";

const ParentComp = ()=>{
    const[emp,setEmp]=useState(
        {id:1,name:"Sagar",sal:5000}
        );

        const incrementalSalary =()=>{
            setEmp({id:1,name:"sagar",sal:5000})
        };

    return <div> <h1>This Is Parent Componenet</h1>
                 <p> <strong>{emp.id}</strong></p>
                <p> <strong>{emp.name}</strong></p>
               <p><strong>{emp.name}</strong></p>
               <hr/>
               <ChildComp id="1" name="Harish" Salary="sal"/>  
               
                  <button > </button>      

               </div>
}

export default ParentComp;