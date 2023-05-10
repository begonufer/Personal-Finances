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

export const Expenses =()=>{
    return (
        <>
        <div className="wrap flex-column   w-100  m-3">
            
            <div>
               <h1 className="text-center">Gastos</h1>
               <h5 className="text-center">Resumen mensual</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                <Link to="/totalexpenses">
                        <button className="btn btn-success rounded ">Resumen</button>
                    </Link>
                    </div>
                    <div>
                <button  href="#" className="btn btn-success d-flex align-items-center  dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    Añadir un gasto
                </button>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li className="dropdown-item">
                        <Link to="/addvariableexpense">
                            <button className="btn btn-primary">Variable</button>
                        </Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/addfixedexpense">
                            <button className="btn btn-primary">Fijo</button>
                        </Link>
                        
                        
                    </li>
     
                </ul>
                 <Pie data={pieData} />
        <Bar options={options} data={barData} />
                </div>
  
               
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

