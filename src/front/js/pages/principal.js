import React from "react";
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

export const barData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
      {
        label: 'Ingresos',
        data: [1800,1600,1500,1200],
        backgroundColor: 'rgb(0, 143, 57)',
      },
      {
        label: 'Egresos',
        data: [1500,1300,1200,1000],
        backgroundColor: 'rgb(203, 50, 52)',
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
  labels: ['Ingresos', 'Gastos'],
  datasets: [
    {
      label: 'Ingresos vs Gastos',
      data: [1800, 1200],
      backgroundColor: [
        'rgb(0, 143, 57)',
        'rgb(203, 50, 52)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const Principal =()=>{
    return (
      <>
        <Pie data={pieData} />
        <Bar options={options} data={barData} />
      </>
    )
}


