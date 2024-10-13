import { useWeather } from '@/context/weatherContext'
import { motion } from 'framer-motion'
import Image from 'next/image'


export const MeteoCardToday = ({ isAnimationStart }) => {


    const { weatherData, city } = useWeather();
    const tempInCelcius = parseInt(weatherData?.main?.temp - 273.15)
    const drawFlag = function (code) {
        const flag = String.fromCodePoint(0x1F1E6 + code.charCodeAt(0) - 'A'.charCodeAt(0)) +
            String.fromCodePoint(0x1F1E6 + code.charCodeAt(1) - 'A'.charCodeAt(0));
        return flag
    }
    const formatDate = (timestamp, timezoneOffset) => {
        const date = new Date((timestamp + timezoneOffset) * 1000);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',

        };
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);
        return formattedDate;
    }



    return (
        <motion.section class="current-temp rounded-sm"
            initial={{ opacity: 1, y: 0 }}
            animate={isAnimationStart ? { opacity: 0, y: 0, pointerEvents: "none" } : { opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.009, transition: { duration: 0.3, ease: 'easeInOut' } }}
            whileFocus={{ scale: 1.009, transition: { duration: 0.3, ease: 'easeInOut' } }} >
            <div class="current-temp-box">
                <p class="heading">Aujourd'hui</p>
                <div class="current-temp-contaner">
                    <div class="temp-container">
                        <div>
                            <p class="temp-value">{tempInCelcius}°C  </p>
                            <p class="temp-description">Description : {weatherData.weather[0].description[0].toUpperCase() + weatherData.weather[0].description.slice(1)}</p>
                        </div>
                        <div>
                            <Image src={`/images/weather_icons/${weatherData.weather[0].icon}.png`} alt="sun" width={50} height={50} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="location-info">
                <ul class="icons-box">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>

                        <p>{formatDate(weatherData.dt, weatherData.timezone)}</p>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p>{city[0].toUpperCase() + city.slice(1)} {drawFlag(weatherData.sys.country)}</p>
                    </li>
                </ul>
            </div>
        </motion.section>
    )
}
