import { useWeather } from '@/context/weatherContext'
import { useState } from 'react';
useState

const Forecast = () => {

    const [step, setStep] = useState(0);
    const { forecastData } = useWeather();


    return (
        <section class="forecast rounded-sm">
            <div class="forecast-box">
                {forecastData.list.slice(step, step + 5).map((data, index) => {
                    return (
                        <>
                            <div class="forecast-container" key={index}>
                                <div class="forecast-item">
                                    <img src={`/images/weather_icons/${data.weather[0].icon}.png`} />
                                    <p>{parseInt(data.main.temp - 273.15)}°C</p>
                                </div>
                                <div class="forecast-date">
                                    <p>{new Date(data.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                                <div class="forecast-date">
                                    <p>{data.dt_txt.slice(11, 16)}</p>
                                </div>
                            </div>
                            <hr />
                        </>

                    )
                })}

            </div>
            <div>
                <button style={{
                    backgroundColor: "var(--on-surface)",
                    color: "var(--surface)",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    borderRadius: "1rem",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                    marginLeft: "1rem",
                    marginBottom: "6px",
                }}

                    onClick={() => {
                        step < 34 ? setStep((step) => step + 5) : setStep(0)
                    }}
                > Avancer le temps </button>
            </div>
        </section >
    )
}

export default Forecast