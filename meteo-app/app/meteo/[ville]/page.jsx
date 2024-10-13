"use client";
import Footer from "@/components/Footer";
import Forecast from "@/components/Forecast";
import Highligths from "@/components/Highligths";
import Loader from "@/components/Loader";
import { MeteoCardToday } from "@/components/MeteoCardToday";
import NavBar from "@/components/NavBar";
import SearchField from "@/components/SearchField";
import { useWeather } from "@/context/weatherContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export default function Home({ params: { ville } }) {

  const router = useRouter();
  const { setCity, fetchWeatherByCityName, setSearchCity, error } = useWeather();

  useEffect(() => {
    setCity(ville);
    setSearchCity(ville);
  }, [ville])


  useEffect(() => {
    fetchWeatherByCityName(ville);
  }, [ville])

  const [isLoading, setIsLoading] = useState(true);
  const [isSearchvisible, setIsSearchvisible] = useState(false);
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <div style={
        {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: "24px"
        }
      }> <h1>Le pays ou la ville que dont vous tentez d'avoir la météo n'existe pas 😭😭 </h1>
        <motion.button style={{
          backgroundColor: "var(--on-surface)",
          color: "var(--surface)",
          padding: "1rem",
          fontSize: "1.5rem",
          borderRadius: "1rem",
          cursor: "pointer",
          border: "none",
          outline: "none",
          marginTop: "4rem",


        }} whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.5,
          }
        }} onClick={() => {
          router.push(`/`)
        }} > Allez vers la page d'accueil &rarr;</ motion.button>
      </div>)
  }
  return (
    <>
      <main className="home-container">
        <NavBar
          setIsSearchvisible={setIsSearchvisible}
          isSearchVisible={isSearchvisible}
          setIsAnimationStart={setIsAnimationStart}
        />
        <SearchField
          isSearchVisible={isSearchvisible}
          setIsSearchvisible={setIsSearchvisible}
          setIsAnimationStart={setIsAnimationStart}
          initialState={{ scale: 0, x: 1000 }}
        />
        <MeteoCardToday isAnimationStart={isAnimationStart} city={ville} />
        <Forecast />

        <Highligths />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );






}

