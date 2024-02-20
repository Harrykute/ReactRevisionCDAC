
import React, { useState } from "react";

const ArrayObjComp =()=>{
      const[product,setProduct] = useState([
        {name:"Harish" , sal:5000 , company:"Microsoft"},
        {name:"Madan" , sal:8000 , company:"Google"},
        {name:"Pratik" , sal:5000 , company:"Nagpur LTD "},
        {name:"Harish" , sal:10000 , company:"google "}
      ])

    return (
          <div>
                <h1> This is Array Object Component </h1>
                <table>
                  <thead>
                        <tr>
                              <th>sr.No</th> <th>name</th> <th>sal</th> <th>company</th>
                        </tr>
                  </thead>
                  <tbody>
                        {
                              product.map((val,index)=>{
                                    return <tr>
                                          <td>{index + 1}</td>
                                          <td>{val.name}</td>
                                          <td>{val.sal}</td>
                                          <td>{val.company}</td>
                                    </tr>
                              })
                        }
                  </tbody>
                </table>
          </div>

    )
}
export default ArrayObjComp;