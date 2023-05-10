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
        
            <div className="wrap flex-column   w-100  m-3">
                <div>
                    <h1 className="text-center">Ingresos</h1>
                    <h5 className="text-center">Resumen mensual</h5>   
                    <button>User</button> 
                </div>
            <div className="d-flex  justify-content-center ">
                <div>
                <Link to="/totalincomes">
                        <button className="btn btn-success rounded ">Resumen</button>
                    </Link>
                <Link to="/addincome">
                        <button className="btn btn-success rounded">Añade un ingreso</button>
                    </Link>
                    <Pie data={pieData} />
        <Bar options={options} data={barData} />
                    </div>
                    </div>
                    </div>
        
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
      data: [1800, 1200],
      backgroundColor: [
        'rgb(255, 255, 204)',
        'rgb(51, 204, 204)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


