"use client";
import Footer from "@/components/Footer";
import Forecast from "@/components/Forecast";
import Highligths from "@/components/Highligths";
import Loader from "@/components/Loader";
import { MeteoCardToday } from "@/components/MeteoCardToday";
import NavBar from "@/components/NavBar";
import SearchField from "@/components/SearchField";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





export default function Home({ params: { ville } }) {

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

