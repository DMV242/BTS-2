"use client";

import { createContext, useState, useContext } from "react";


const geolocationContext = createContext();



const GeolocationProvider = function ({ children }) {

    const [coords, setCoords] = useState({});

    const getGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function successCallback(position) {
            setCoords({
                "long": position.coords.longitude,
                "lat": position.coords.latitude
            })
            return {
                "long": position.coords.longitude,
                "lat": position.coords.latitude
            }
        }

        function errorCallback(error) {
            console.error("Error getting location:", error);
        }



    }



    return <geolocationContext.Provider value={{
        coords, getGeolocation
    }}>
        {children}
    </geolocationContext.Provider>

}

export function useGeolocation() {

    const context = useContext(geolocationContext);

    if (!context) {
        throw new Error("useGeolocation must be used within a GeolocationProvider");
    }
    return context;

}

export default GeolocationProvider


