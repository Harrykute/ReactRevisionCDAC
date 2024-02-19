import React,{useState} from "react";


const UseStateHookComp = ()=>{
    const[salary,setSalary] = useState(30000);
     //task 
     const[myName,setMyname]=useState("Harish");
    //using function
     const incremental=()=>{
        setSalary(salary+1000)
     }

     //if you want to render list 
     const[subject,setSubject]=useState(["HTML","CSS","Bootsrap","React","Javascript"])

     //we will use Array Of Object 
      const [course,setCourses] = useState([
        {id:1,name:"Fullstack Course"},
        {id:2,name:"MERN stack Course "},
        {id:3,name:"Cloud Course"},
        {id:4,name:"Cloud Softwear"}
      ])

    return <div>
    <h1>This is UseState Hook Componenet </h1>
    <div> Salary : {salary} </div>
    <button type='button' onClick={()=>incremental()}>Incremental sal </button>
    <button type='button' onClick={()=>setSalary(salary+10000)}>salary ++ </button>
    <p> Change Name Using Hook Task </p>
    <p> MyName is : {myName} </p>
    <button type='button' onClick={()=>setMyname("Panchashil Wankhede")}> Name Change </button>
   <hr/>
        printing list 
       <ul>
        {
            
            subject.map((val,index)=>{
                return <li key={index}>{val}</li>
            })
        }
       </ul>

       <label> Select Course : </label>
       <select>
         <option value="">SELECT YOUR COURSE </option>{
            course.map((val,index)=>{
                return <option key={index}>{val.name} </option>
            })
         }
       </select>

     </div>
}

export default UseStateHookComp;

