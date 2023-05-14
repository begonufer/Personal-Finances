import React from "react";
import { Link } from "react-router-dom";
export const Totalexpenses =()=>{
    return (
        <>
          <div className="wrap flex-column   w-100  m-3">
            <div>
              <h1 className="text-center">Resumen</h1>
            </div>
            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Importe</th>
                        <th scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">09/09/09</th>
                        <td>Cate1</td>
                        <td>23'00 €</td>
                        <td>1035'56 €</td>
                        </tr>
                        <tr>
                        <th scope="row">09/09/09</th>
                        <td>Cate2</td>
                        <td>45'00 €</td>
                        <td>995'56 €</td>
                        </tr>
                        <tr>
                        <th scope="row">09/09/09</th>
                        <td>Cate3</td>
                        <td>10'45 €</td>
                        <td>985'11 €</td>
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