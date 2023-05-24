import React, { useState, useEffect, useContext } from "react";
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
import { Context } from "../store/appContext";
import { format } from "date-fns";
import es from "date-fns/locale/es";

export const Expenses =()=>{

  const { store, actions } = useContext(Context);

  const pieData = {
    datasets: [
      {
        label: "Ingresos",
        data: [1847, 632, 1276, 1340, 998, 3672, 1200, 1023, 678, 4560, 5423],
        backgroundColor: [
          "rgb(40, 124, 147)",
          "rgb(29, 174, 159)",
          "rgb(29, 180, 122)",
          "rgb(138, 181, 63)",
          "rgb(188, 207, 44)",
          "rgb(207, 193, 44)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    };

  const [ bardata, setBardata ] = useState({
    labels: [],
    datasets: [
      {
        label: "gastos",
        data: [],
        backgroundColor: [
          "rgb(40, 124, 147)",
          "rgb(29, 174, 159)",
          "rgb(29, 180, 122)",
          "rgb(138, 181, 63)",
          "rgb(188, 207, 44)",
          "rgb(207, 193, 44)",
      ]
      },
    ],
  });
  
  useEffect(() => {
    async function transformData() {
      await actions.getExpenses();
      const data = store.expenses.map((expense) => {
        const dateTime = new Date(expense.dateTime);
        const month = format(dateTime, "MMMM", { locale: es });
        return { ...expense, dateTime, month };
      });
      const months = Array.from(
        data.reduce((total, { month }) => {
          total.add(month);
          return total;
        }, new Set())
      );
      const valueByMonth = months.map((month) =>
        data.reduce((totalByMonth, expense) => {
          if (expense.month === month) {
            totalByMonth += expense.value;
          }
          return totalByMonth;
        }, 0)
      );
      const graphdata = {
        labels: months,
        datasets: [
          {
            label: "gastos",
            data: valueByMonth,
            background: "rgb(199, 225, 153)",
          },
        ],
      };
      setBardata(graphdata);
    }
    transformData();
  }, []);

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
              <div className="col justify-content-center align-items-center p-5 mb-4">
                <Bar options={options} data={bardata} />
              </div>
            </div>
            <div className="d-block w-100 h-100 m-5 align-items-center">
              <Link to="/totalexpenses">
                <button id="botoningreso" className="btn btn-lg w-100 text-white fs-2 m-3">Resumen de gastos</button>
              </Link>
              <Link to="/addexpense">
                  <button type="button" className="btn btn-circle btn-xl"> <i className="fa-solid fa-plus"></i> </button>
              </Link>
            </div>
          </div>
        </>
    )
}
