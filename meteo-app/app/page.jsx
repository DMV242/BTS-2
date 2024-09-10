"use client";
import BasicExample from "@/components/NavBar";
import { useEffect, useState } from "react";



export default function Home() {

  const [seconds, setSeconds] = useState(240);
  const [value, setValue] = useState(-1);
  const minutes = parseInt(seconds / 60);
  const secondsLeft = seconds % 60;
  if (seconds <= 0) {
    setSeconds(600)
  }

  useEffect(() => {


    const id = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);


    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <main >
      <div style={{
        textAlign: "center"
      }}>
        <BasicExample />
        <h1>David Quick recrute !</h1>
        <h3>Il reste {minutes < 10 ? "0" + minutes : minutes} : {secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}</h3>
        <main id="#main"></main>
      </div>
    </main>
  );






}

