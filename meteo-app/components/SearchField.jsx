import { useWeather } from '@/context/weatherContext';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';


const SearchField = ({ isSearchVisible, setIsAnimationStart, initialState, setIsSearchvisible, ishome }) => {
    const toastRef = useRef(null)
    const { city, searchCity, setSearchCity, fetchWeatherByCityName, setCity, fetchForecastData } = useWeather();


    const animateParams = {
        scale: 1.009,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    };

    return (
        <AnimatePresence onExitComplete={() => setIsAnimationStart?.(false)}>
            {isSearchVisible && (
                <form onSubmit={async (e) => {
                    e.preventDefault()

                    if (ishome) return;

                    toastRef.current = toast("Recherche en cours", {
                        style: {
                            color: "white",
                            backgroundColor: " var(--surface)",
                            fontSize: 38
                        },

                        isLoading: true,
                    });
                    await fetchWeatherByCityName(searchCity);
                    await fetchForecastData(searchCity);
                    setCity(searchCity);
                    toast.update(toastRef.current, { type: "success", autoClose: 5000, isLoading: false, render: "Recherche terminée" });
                    setIsSearchvisible?.(false);

                }}>
                    <motion.input
                        key="searchInput"
                        type="text"
                        className="search rounded-sm"
                        placeholder="Rechercher une ville"
                        defaultValue={city}
                        initial={initialState ? initialState : { x: 0, scale: 0 }}
                        animate={{ scale: 1, x: 0 }}
                        exit={{
                            opacity: 0,
                            y: -1000,
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut',
                            },
                        }}
                        required
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value.trim())}
                        whileHover={animateParams}
                        whileFocus={animateParams}
                    />
                </form>
            )}
        </AnimatePresence>
    );
};

export default SearchField;
