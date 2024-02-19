import React, { Component } from "react";

//ToDo
/*class MyStateComp extends Component{

     render(){
        const {address,contact} =this.props;
        return<div>

              <h1> This is Address {address}</h1>
              <h2> this is contact {contact}</h2>
        </div>
     }

}
export default MyStateComp;*/

//State in Class Componenet 
/*class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Aakash",
            salary:85000
        }
       }
    render(){
       return<div>

             <h1> This is My state Component</h1>
             <h2> Employee Name is  {this.state.empName} and salary is{this.state.salary}</h2>
       </div>
    }

}
export default MyStateComp;*/

//destructuring 

class MyStateComp extends Component{

    cconstructor(){
       }
    render(){
        const{empName,post,salary,gender}=this.state
       return<div>

                  <h1> This is Mysate Component </h1>


       </div>
    }
}
export default MyStateComp;
