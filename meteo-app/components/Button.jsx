import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'


function Button({ city }) {

    const router = useRouter();
    return (
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
            router.push(`/meteo/${city}`)
        }} > Confirmer &rarr;</ motion.button>
    )
}

export default Button