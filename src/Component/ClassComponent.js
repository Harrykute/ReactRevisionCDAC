import React, { Component } from "react";

/*class ClassComp extends Component{
    render(){
        return <div> <h2> This is Class Component</h2> 
               <p> This is Paragrph from Class Component  </p>
                </div>
    }
}

export default ClassComp;*/

//Accessing props in Class Componenet

/*class ClassComp extends Component{
    render(){
        return <div> <h2> This is Class Component</h2> 
               <p> {this.props.address}  age {this.props.age} </p>
                </div>
    }
}

export default ClassComp;*/

//destructuting 
class ClassComp extends Component{
    render(){
        //destructing of Props 
        const{myName,age,address,contact} = this.props;
        return <div> <h2> This is Class Component</h2> 
               <p> Name : {myName}  age {age} address {address} contact {contact} </p>
                </div>
    }
}
export default ClassComp;


