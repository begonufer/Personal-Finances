import React from "react";
import { Link } from "react-router-dom";
import { AddExpenseButton } from "../component/addexpensebutton";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const Expenses =()=>{
    return (
        <>
          <div id="login" className="w-100 h-100">
            <div className="row">
              <h1 className="text-center text-white p-5" id="fondoizq">Gastos</h1>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-5 p-5 m-5 text-center">
                <div className="row mt-5">
                  <Pie data={pieData} />
                </div>
              </div>
              <div className="col-5 justify-content-center align-items-center mt-5 mb-4">
                <Bar options={options} data={barData} />
              </div>
            </div>
            <div className="d-block w-100 h-100 m-5 align-items-center">
              <Link to="/totalexpenses" id="totalizacion" className="text-center m-5 text-center shadow align-middle align-items-center text-decoration-none">
                <h2 className="d-none d-sm-inline">Resumen de gastos</h2>
              </Link>
              <Link to="/addexpense">
                  <button type="button" className="btn btn-circle btn-xl"> <i className="fa-solid fa-plus"></i> </button>
              </Link>
              <AddExpenseButton />
            </div>
          </div>      
        </>
    )
}

export const barData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  datasets: [
    {
      label: 'Fijos',
      data: [1800,1600,1500,1200],
      backgroundColor: 'rgb(153, 204, 255)',
    },
    {
      label: 'Variables',
      data: [1500,1300,1200,1000],
      backgroundColor: 'rgb(255, 153, 204)',
    },
    
  ],
};  

export const options = {
plugins: {
  title: {
    display: true,
    text: 'Conmo',
  },
},
responsive: true,
scales: {
  x: {
    stacked: true,
  },
  y: {
    stacked: true,
  },
},
};

export const pieData = {
labels: ['Ocio', 'Trabajo'],
datasets: [
  {
    label: 'ocio vs casa',
    data: [1800, 1200],
    backgroundColor: [
      'rgb(255, 255, 153)',
      'rgb(204, 153, 255)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1,
  },
],
};