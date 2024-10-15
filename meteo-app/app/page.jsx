"use client";

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar'
import SearchField from '@/components/SearchField';
import { useWeather } from '@/context/weatherContext';



function Page() {

    const { searchCity } = useWeather();
    return (

        <main>
            <NavBar ishome={true} />
            <SearchField isSearchVisible={true} ishome={true} />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
            }}>
                <p style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    marginTop: "2rem",
                }}>Vous voulez voir la météo de ville ? : {searchCity}</p>
                <Button city={searchCity} />

            </div>
            <Footer ishomepage={true} />
        </main>

    )
}

export default Page;