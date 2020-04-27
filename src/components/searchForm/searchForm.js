import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Summary from "../summary/summary";
import { checkCurrentWeather, checkForecast } from '../../utils/functions';


const SeachForm = props => {

  const [cityInput, setCityInput] = useState("");

  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = event => {
    setCityInput(event.target.value);
  }

  const handleSearchCurrent = async event => {
    event.preventDefault();
    resetState();
    setIsLoading(true);
    const data = await checkCurrentWeather(cityInput);
    setIsLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setResults([data]);
      setCity(data.name);
    }
  }

  const handleSearchForecast = async event => {
    event.preventDefault();
    setError(false);
    setIsLoading(true);
    const data = await checkForecast(cityInput);
    setIsLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setResults(data.list);
      setCity(data.city.name);
    }
  }

  const resetState = () => {
    setCity("");
    setResults([]);
    setIsLoading(false);
    setError(false);
  }

  useEffect(() => {
    return () => {
      resetState();
    }
  }, [])

  let content =
    (
      <React.Fragment>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ingrese una ciudad para obtener el pronóstico del clima</Form.Label>
            <Form.Control onChange={handleInputChange} value={cityInput} type="text" placeholder="Ciudad" />
            <Form.Text className="text-muted">
              Si deja el campo vacío, obtendrá la información local del clima
          </Form.Text>
          </Form.Group>
          <Form.Group>
            <Button onClick={handleSearchCurrent} type="submit" block>Obtener pronostico actual</Button>
            <Button onClick={handleSearchForecast} type="submit" block>Obtener pronostico a 5 dias</Button>
          </Form.Group>
        </Form>
        <Summary
          isLoading={isLoading}
          error={error}
          results={results}
          city={city}
        />
      </React.Fragment>
    )
  return content;
}

export default SeachForm;