import axios from 'axios';

export const checkCurrentWeather = async (city) => {
  const uri = `http://localhost:3000/v1/current/${city}`
  try {
    const response = await axios.get(uri);
    return response.data;
  } catch (error) {
    return {error: "Ciudad no encontrada"}
  }
}

export const checkForecast = async (city) => {
  const uri = `http://localhost:3000/v1/forecast/${city}`
  try {
    const response = await axios.get(uri);
    return response.data;
  } catch (error) {
    return {error: "Ciudad no encontrada"}
  }
}