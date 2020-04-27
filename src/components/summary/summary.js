import React from 'react';

const Summary = props => {

  let currentDay = null;

  //Parseo y filtro de fechas
  const parseDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getUTCDate();
    if (day != currentDay) {
      currentDay = day;
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      return `${day}/${month}/${year}`
    } else {
      return null
    }
  }

  let content = "";

  if (props.isLoading) {
    content = <p>Cargando...</p>
  } else if (props.error) {
    content = <p>Ocurrio un error: {props.error}</p>
  } else if (props.results) {
    content =
      (
        <div className="summary">
          {props.results.map((result, index) => {
            const formatedDate = parseDate(result.dt);
            if (formatedDate) {
              return (
                <p key={index}>Pronóstico para el dia {formatedDate} en la ciudad de {props.city}: La temperatura es de {result.main.temp}°C
                con una sensación térmica de {result.main.feels_like}°C. Se esperan temperaturas máximas de {result.main.temp_max}°C
                y mínimas de {result.main.temp_min}°C. La humedad es del {result.main.humidity}%.
                </p>
              )
            }
          })}
        </div>
      )
  }

  return content;
}

export default Summary;