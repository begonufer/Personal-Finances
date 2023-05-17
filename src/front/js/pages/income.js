import React from "react";
import { Link } from "react-router-dom";
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

export const Income =()=>{
  return (
    <>
            <div id="login" className="w-100 h-100">
                <div className="row">
                    <h1 className="text-center text-white p-5" id="fondoizq">Ingresos</h1>                  
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
                    <a href="/totalincomes" id="totalizacion" className="text-center shadow align-middle align-items-center text-decoration-none">
                        <span>Resumen de ingresos</span>
                    </a>
                </div>
                <Link to="/addincome">
                    <button type="button" className="btn btn-circle btn-xl"> <i className="fa-solid fa-plus"></i> </button>
                </Link>
            </div> 
    </>   
  )
}

export const barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: 'ingresos',
        data: [1800,1600,1500,1200],
        backgroundColor: 'rgb(0, 255, 0)',
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
  labels: ['Casa', 'Compra'],
  datasets: [
    {
      label: 'Ingresos vs Gastos',
      data: [1847, 3672, 1200],
      backgroundColor: [
        'rgb(87, 165, 196)',
        'rgb(177, 210, 152)',
        'rgb(199, 225, 153)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 0,
    },
  ],
};