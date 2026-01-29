"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll percentage
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

            // Show after 30% scroll
            if (scrollPercent > 30) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToOffer = () => {
        const offerSection = document.getElementById("offer");
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-900/90 backdrop-blur-md border-t border-white/10 md:hidden pb-safe"
                >
                    <a
                        href="https://pay.kiwify.com.br/L0AzUvb?sck=sticky"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 w-full bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        QUERO GARANTIR MINHAS RESPOSTAS
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                            <Lock className="w-3 h-3" /> Compra 100% Segura
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
