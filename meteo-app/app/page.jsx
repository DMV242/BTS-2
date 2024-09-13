"use client";
import Forecast from "@/components/Forecast";
import Highligths from "@/components/Highligths";
import Loader from "@/components/Loader";
import { MeteoCardToday } from "@/components/MeteoCardToday";
import NavBar from "@/components/NavBar";
import SearchField from "@/components/SearchField";
import { useEffect, useState } from "react";


export default function Home() {

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


    <main>
      <NavBar setIsSearchvisible={setIsSearchvisible} isSearchVisible={isSearchvisible} setIsAnimationStart={setIsAnimationStart} />
      <SearchField isSearchVisible={isSearchvisible} setIsSearchvisible={setIsSearchvisible} setIsAnimationStart={setIsAnimationStart} />
      <MeteoCardToday isAnimationStart={isAnimationStart} />
      <Forecast />
      <Highligths />
    </main>
  );






}
