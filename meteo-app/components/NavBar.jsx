import { useGeolocation } from "@/context/geolacationContext";
import { useWeather } from "@/context/weatherContext";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";




function NavBar({ isSearchVisible, setIsSearchvisible, setIsAnimationStart, ishome }) {


    const { fetchWeatherByCoordonates } = useWeather();
    const [geolocation, setIsGeolocation] = useState(false);
    const ref = useRef()


    return (
        <nav className="nav">
            <div>
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="logo" width={150} height={24} />
                </Link>
            </div>
            <div>
                <ul className="actions">
                    <li className="btn rounded-xl" onClick={() => {
                        setIsSearchvisible?.((prev) => !prev)
                        setIsAnimationStart?.(true)
                    }}>
                        {isSearchVisible ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        }

                    </li>
                    {!ishome ?
                        <li className="btn rounded-xl" onClick={() => {
                            const getGeolocation = () => {
                                if (navigator.geolocation) {
                                    ref.current = toast("Récupération de la géolocalisation", {
                                        style: {
                                            color: "white",
                                            backgroundColor: " var(--surface)",
                                            fontSize: 38
                                        },
                                        isLoading: true,
                                    });
                                    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
                                } else {
                                    console.log("Geolocation is not supported by this browser.");
                                }

                                function successCallback(position) {

                                    fetchWeatherByCoordonates(position.coords.longitude, position.coords.latitude)
                                    setIsGeolocation(true);
                                    toast.update(ref.current, { type: "success", autoClose: 5000, isLoading: false, render: "Recupération terminée" });
                                }

                                function errorCallback(error) {
                                    toast("Erreur lors de la récupération de la géolocalisation", {
                                        style: {
                                            color: "white",
                                            backgroundColor: " var(--surface)",
                                            fontSize: 38
                                        },
                                    })
                                }
                            }
                            getGeolocation()
                        }
                        } style={{
                            backgroundColor: geolocation ? "blue" : null
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </li> : null}
                </ul>
            </div>
        </nav >
    );
}

export default NavBar;