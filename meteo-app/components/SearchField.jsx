import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';


const SearchField = ({ isSearchVisible, setIsAnimationStart, initialState }) => {
    const toastRef = useRef(null)
    const router = useRouter();
    const ville = "Mardid";

    const animateParams = {
        scale: 1.009,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    };

    return (
        <AnimatePresence onExitComplete={() => setIsAnimationStart?.(false)}>
            {isSearchVisible && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    toastRef.current = toast("Recherche en cours", {
                        style: {
                            color: "white",
                            backgroundColor: " var(--surface)",
                            fontSize: 38
                        },

                        isLoading: true,
                    });
                    setTimeout(() => {
                        toast.update(toastRef.current, { type: "success", autoClose: 5000, isLoading: false, render: "Recherche terminée" });

                    }, 3000);
                    router.push(`/meteo/${ville}`);
                }}>
                    <motion.input
                        key="searchInput"
                        type="text"
                        className="search rounded-sm"
                        placeholder="Rechercher une ville"

                        initial={initialState ? initialState : { x: 0, scale: 0 }}
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
