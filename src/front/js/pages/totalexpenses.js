import React from "react";
import { Link } from "react-router-dom";
export const Totalexpenses =()=>{
    return (
        <>
        <div className="wrap flex-column   w-100  m-3">
            <div>
            <h1 className="text-center">Resumen</h1>
                </div>

        <div className="d-flex  justify-content-center">
            
            </div>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Categoria</th>
      <th scope="col">Importe</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10/07/2023</td>
      <td>casa</td>
      <td>200</td>
      <td>400</td>
    </tr>
    <tr>
    <td>23/06/2022</td>
      <td>transporte</td>
      <td>234</td>
      <td>543</td>
    </tr>
    <tr>
    <td>06/11/2023</td>
      <td>gasolina</td>
      <td>899</td>
      <td>1235</td>
    </tr>
  </tbody>
</table>
<div>
        <Link to="/expenses">
                        <button className="btn btn-success rounded">Volver</button>
                    </Link>
                    
           
                <Link to="/variableexpense">
                        <button className="btn btn-success rounded">Gastos Variables</button>
                    </Link>
            
        </div>
        
        </div>
        
        
        
        </>
        
        
    )
}