import React from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
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
  labels: ["Enero", "Febrero", "Marzo", "Abril"],
  datasets: [
    {
      label: "Ingresos",
      data: [1800, 1600, 1500, 1200],
      backgroundColor: ["rgb(138, 181, 63)"],
    },
    {
      label: "Gastos",
      data: [1500, 1300, 1200, 1000],
      backgroundColor: ["rgb(40, 124, 147)"],
    },
  ],
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Anual",
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

// export const pieData = {

//   labels: ['Ingresos', 'Gastos'],
//   datasets: [
//     {
//       label: 'Ingresos vs Gastos',
//       data: [1800, 1200, 1293],
//       backgroundColor: [
//         'rgb(87, 165, 196)',
//         'rgb(177, 210, 152)',
//         'rgb(199, 225, 153)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//       ],
//       borderWidth: 0,
//     },
//   ],
// };

export const Principal = () => {
  return (
    <>
      <div id="login" className="w-100 h-100">
        <div className="row">
          <h1 className="text-center text-white p-5" id="fondoizq">
            Mi<span className="conmo"> CONMO</span>
          </h1>
        </div>
        <div className="row justify-content-center align-items-center">
          {/* <div className="col-5 p-5 m-5 text-center">
                        <div className="row mt-5">
                          <Pie data={pieData} />
                        </div>
                    </div> */}
          <div className="col justify-content-center align-items-center p-5 mb-4">
            <Bar options={options} data={barData} />
          </div>
        </div>
        <Link to="/expenses">
          <button
            id="botoningreso"
            className="btn btn-lg w-100 text-white fs-4 m-3"
          >
            Descargar en pdf
          </button>
        </Link>
      </div>
    </>
  );
};
