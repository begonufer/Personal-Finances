import React, { useState, useEffect, useContext } from "react";
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
import { Context } from "../store/appContext";
ChartJS.register(ArcElement, Tooltip, Legend);
import { format } from "date-fns";
import es from 'date-fns/locale/es';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export const Income =()=>{
  const { store, actions } = useContext(Context)
  const [bardata, setBardata] = useState(
    {
      labels: [],
      datasets: [
        {
          label: 'ingresos',
          data: [],
          backgroundColor: 'rgb(0, 255, 0)',
        },
      ],
  });
    useEffect(() => {
        async function transformData() {
            await actions.getIncomes();
            const data = store.incomes.map((income) => {
              const dateTime = new Date(income.dateTime);
              const month = format(dateTime, 'MMMM', {locale: es})
              return { ...income, dateTime, month}
            })
            const months = Array.from(data.reduce((total, {month}) => {
              total.add(month);
              return total;
            }, new Set()));
            const valueByMonth = months.map((month) => data.reduce((totalByMonth, income) => {
              if(income.month === month) {
                totalByMonth += income.value
              }
              return totalByMonth
            }, 0))
            const graphdata = {
              labels: months,
              datasets: [
                {
                  label: 'ingresos',
                  data: valueByMonth,
                  backgroundColor: 'rgb(0, 255, 0)',
                },
              ],
          };
          setBardata(graphdata);
        }
        transformData();
    }, [])
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
                      <Bar options={options} data={bardata} />
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