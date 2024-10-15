"use client";

import { createContext, useContext, useState, useEffect } from "react";



const weatherContext = createContext();


function WeatherProvider({ children }) {


    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Paris");
    const [searchCity, setSearchCity] = useState(city);
    const [forecastData, setForecastData] = useState({
        list: []
    })
    const [forecastError, setForecastError] = useState();
    const [isLoadingForecast, setisLoadingForecast] = useState(false)


    const fetchWeatherByCityName = async (city) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=fr`);
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            const data = await response.json();

            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };
    async function fetchWeatherByCoordonates(lon, lat) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=fr`);
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            const data = await response.json();

            setWeatherData(data);
            setCity(data.name)
            setError(null);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };
    const fetchForecastData = async (city) => {
        setisLoadingForecast(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=fr`);
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            const data = await response.json();

            setForecastData(data);
            setForecastError(null);
        } catch (error) {
            setForecastError(error.message);
        }
        setisLoadingForecast(false);
    };


    useEffect(() => {

        async function fetchWeatherAtStart() {
            await fetchWeatherByCityName(city);
        }

        fetchWeatherAtStart();

    }, [city])




    return (
        <weatherContext.Provider value={{
            weatherData,
            loading,
            error,
            city,
            setCity,
            searchCity,
            setSearchCity,
            fetchForecastData,
            isLoadingForecast,
            forecastData,
            forecastError,
            fetchWeatherByCityName,
            fetchWeatherByCoordonates
        }}>
            {children}
        </weatherContext.Provider>
    );
}


export function useWeather() {
    const context = useContext(weatherContext);
    if (!context) {
        throw new Error("useWeather must be used within a WeatherProvider");
    }
    return context;
}




export default WeatherProvider;