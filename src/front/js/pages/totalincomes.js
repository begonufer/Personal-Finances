import React from "react";
import { Link } from "react-router-dom";
export const Totalincomes =()=>{
    return (
        <>
          <div className="wrap flex-column   w-100  m-3">
        <div className="flex-column d-block align-items-center   m-5">
        <h1 className="text-center">Resumen de Ingresos</h1>
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


<Link to="/income">
                        <button className="btn btn-success rounded">Volver</button>
                    </Link>
        </div>
        
        </>
    )
}