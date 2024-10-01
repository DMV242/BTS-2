"use client";

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar'
import SearchField from '@/components/SearchField';



import React from 'react'

function page() {


    return (
        <main>
            <NavBar />
            <SearchField isSearchVisible={true} />
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
                }}>Vous voulez voir la météo de ville ? : Madrid</p>
                <Button />
            </div>

            <Footer ishomepage={true} />
        </main>
    )
}

export default page