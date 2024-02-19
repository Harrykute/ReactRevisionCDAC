
//creating comp with Function 

const MethodEventComp = ()=>{

    //default Function 
     const greet =()=>{
        window.alert("Good Morning All Student");
     }
     //parameterised Function 
     const welcome = (stdName)=>{
        window.alert(`Welcome You ${stdName}`)

        //using multiple Parameter
        const friendsheep = (std1,std2)=>{
            window.alert(`${std1} and ${std2} are best friend `)
        }

     }
       return <div>
               <h1> This is MethodEventComp </h1>
               <button type = "button" onClick={()=>greet()}>Greet</button>
               <button type = "button" onClick={()=>welcome("panchshil")}>Welcome</button>
               {/*<p onMouseOver = { ()=>friendsheep("panchshil","Harish")} >Over Mouse On Me </p>*/}

       </div>
}
export default MethodEventComp;