
// Using function Key word "function"
/*function FunctionComp(){
    return <h2> This is Function Component</h2>
}

export default FunctionComp;*/

//using Arrow function 
/*const FunctionComp = ()=>{
     return <div> 
           <h2>
              This is Function Component 
              <p>this is Paragraph in Function Component</p>
              <p> My Name is </p>
           </h2>
     </div>       
}

export default FunctionComp;*/

//accessing Props in Function 
/*const FunctionComp = (props)=>{
    return <div> 
          <h2>
             This is Function Component 
             <p>this is Paragraph in Function Component</p>
             <p> My Name is {props.myName} age {props.age}</p>
          </h2>
    </div>       
}

export default FunctionComp;*/

// Destructuring of props in Function Componenet

const FunctionComp = (props)=>{
    const {myName,age,address,contact} = props;
    return <div> 
          <h2>
             This is Function Component 
             <p>this is Paragraph in Function Component</p>
             <p> My Name is {myName} age {age}</p>
          </h2>
    </div>       
}

export default FunctionComp;