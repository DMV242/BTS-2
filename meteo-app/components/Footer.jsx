"use client"
import { motion } from 'framer-motion';
import React from 'react'


function Footer({ ishomepage }) {
    return (
        <motion.footer
            className="footer"
            style={ishomepage ? { position: "absolute", bottom: 0, } : null}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="footer-content">
                <p>© 2024 WeatherIO App. Tous droits réservés.</p>
                <p>Créé par DMV242</p>
            </div>
        </motion.footer>
    );
}

export default Footer