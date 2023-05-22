import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Addincome = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getIncomeCategories();
  }, []);

  const [value, setValue] = useState("");
  const [incomecategory_id, setIncomecategory_id] = useState("");
  const [dateTime, setDateTime] = useState("");
  const updateValue = (valueInputValue) => {
    setValue(valueInputValue);
  };
  const updateIncomeCategory = (categoryInputValue) => {
    setIncomecategory_id(categoryInputValue);
  };
  const updateDateTime = (dateTimeInputValue) => {
    setDateTime(dateTimeInputValue);
  };

  const addincome = () => {
    actions.setIncome(dateTime, incomecategory_id, value);
    console.log(store.Income);
  };
  return (
    <>
      <div id="login" className="w-100 h-100">
        <div className="row">
          <h1 className="text-center text-white p-5" id="fondoizq">
            Añade un ingreso
          </h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-9 p-5 m-5 text-center">
            <div className="row mt-5">
              <input
                type="date"
                className="col-3 my-3 rounded-0"
                onChange={(e) => {
                  updateDateTime(e.target.value);
                }}
                id="inputDate"
                placeholder="Fecha"
              />
              <div className="col-6">
                <select
                  onChange={(e) => {
                    updateIncomeCategory(e.target.value);
                  }}
                  id="inputCategory"
                  className="w-100 my-3 rounded-0"
                >
                  <option>Selecciona una categoría</option>
                  {store.incomecategories?.map((incomecategory) => {
                    return (
                      <option key={incomecategory.id} value={incomecategory.id}>
                        {incomecategory.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                type="text"
                className="col-3 my-3 rounded-0"
                onChange={(e) => {
                  updateValue(e.target.value);
                }}
                id="inputQuantity"
                placeholder="Importe"
              />
            </div>
            <div className="mt-5 mb-4 justify-content-between">
              <Link to="/income">
                <button
                  id="botoningreso"
                  className="col-3 btn btn-lg text-white fs-4 m-3"
                >
                  Cancelar
                </button>
              </Link>
              <button
                onClick={() => addincome()}
                id="botoningreso"
                className="col-3 btn btn-lg m-3 text-white fs-4"
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
