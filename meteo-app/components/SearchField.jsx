import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const SearchField = ({ isSearchVisible, setIsAnimationStart }) => {
    const toastRef = useRef(null)

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
                    toastRef.current = toast("In progress", {
                        style: {
                            color: "white",
                            backgroundColor: " var(--surface)",
                            fontSize: 38
                        },

                        isLoading: true,
                    });
                    setTimeout(() => {
                        toast.update(toastRef.current, { type: "success", autoClose: 5000, isLoading: false, render: "City found" });

                    }, 3000);




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
