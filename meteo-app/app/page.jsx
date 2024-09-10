"use client";
import Forecast from "@/components/Forecast";
import Highligths from "@/components/Highligths";
import { MeteoCardToday } from "@/components/MeteoCardToday";
import NavBar from "@/components/NavBar";
import SearchField from "@/components/SearchField";





export default function Home() {


  return (
    <main>
      <NavBar />
      <SearchField />
      <MeteoCardToday />
      <Forecast />
      <Highligths />
    </main>
  );






}

