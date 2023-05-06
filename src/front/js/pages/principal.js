import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const data = {
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

export const Principal =()=>{
    return (
        <Bar options={options} data={data} />
    )
}