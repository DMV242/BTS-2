import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const SearchField = ({ isSearchVisible, setIsAnimationStart }) => {

    const animateParams = {
        scale: 1.009,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    };

    return (
        <AnimatePresence onExitComplete={() => setIsAnimationStart(false)}>
            {isSearchVisible && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    alert('Recherche effectuée')

                }}>
                    <motion.input
                        key="searchInput"
                        type="text"
                        className="search rounded-sm"
                        placeholder="Rechercher une ville"

                        initial={{ scale: 0.9, x: 1000 }}
                        animate={{ scale: 1, x: 0 }}
                        exit={{
                            opacity: 0,
                            y: -1000,
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut',
                            },
                        }}

                        whileHover={animateParams}
                        whileFocus={animateParams}
                    />
                </form>
            )}
        </AnimatePresence>
    );
};

export default SearchField;
