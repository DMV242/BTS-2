"use client"
import { useEffect } from 'react';
import Stats from './Stats'
import { useWeather } from '@/context/weatherContext'
import { motion } from 'framer-motion';


function formatDate(timestamp, add = 0) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
}


function Highligths() {

    const { forecastData, fetchForecastData, city } = useWeather();


    useEffect(() => {
        async function getForecast() {
            await fetchForecastData(city)
        }
        getForecast();

    }, [])






    return (

        <section class="today-highligths">

            <p class="today-highligths-text">Aujoud'hui à</p>

            <div class="today-highligths-temp">
                <div class="forecast-by-hour-container" style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        forecastData.list.filter((data) => {
                            return data.dt_txt.includes(formatDate(Date.now()))
                        }).map((data) => {
                            return (
                                <div class="rounded-sm">
                                    <p>{data.dt_txt.slice(11, 16)}</p>
                                    <img src={`/images/weather_icons/${data.weather[0].icon}.png`} width="48px" height="48px" />
                                    <p>{parseInt(data.main.temp - 273.15)} C°</p>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />

                <div class="forecast-by-hour-container" style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    {
                        forecastData.list.filter((data) => {
                            return data.dt_txt.includes(formatDate(Date.now()))
                        }).map((data) => {
                            return (
                                <div class="rounded-sm">
                                    <p>{data.dt_txt.slice(11, 16)}</p>
                                    <motion.img src="/images/weather_icons/direction.png" width="48px" height="48px" initial={{
                                        scale: 1.5,
                                        rotate: 0
                                    }} animate={{
                                        scale: 1,
                                        rotate: data.wind.deg,
                                        duration: 2
                                    }} />
                                    <p>{parseInt(data.wind.speed)} km/h</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Stats />

        </section >


    )
}

export default Highligths