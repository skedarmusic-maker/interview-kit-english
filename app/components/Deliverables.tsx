"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Headphones, Smartphone, MessageCircle } from "lucide-react";

// The images for the carousel on the first card
const carouselImages = [
    "/images/THE%20UTAMATE.png",
    "/images/O%20PROTOCOLO.png",
    "/images/QA.png"
];

export default function Deliverables() {
    // Carousel State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        O que você vai <span className="text-purple-500">receber</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        O arsenal completo para garantir sua aprovação.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Item 1: The Book Carousel (Large Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 row-span-2 relative bg-neutral-900 rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-purple-500/50 transition-all flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="w-full h-[300px] md:h-auto md:flex-1 flex items-center justify-center mb-6 relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Image
                                        src={carouselImages[currentImageIndex]}
                                        alt={`Product ${currentImageIndex + 1}`}
                                        width={300}
                                        height={400}
                                        className="w-auto h-full max-h-[300px] drop-shadow-2xl object-contain"
                                        unoptimized
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="relative z-10 mt-auto">
                            {/* Slide Indicators */}
                            <div className="flex justify-center gap-2 mb-4">
                                {carouselImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? "bg-purple-500" : "bg-white/20"}`}
                                    />
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">The Ultimate Kit</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Não é apenas um livro. É o arsenal completo: Guias, Scripts e Protocolos de Aprovação.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2: Audio Pack (Wide Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-all"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                                <Headphones className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Pack de Sotaques Reais</h3>
                                <p className="text-gray-400">
                                    Treine seu ouvido para entender indianos, americanos e europeus.
                                </p>
                            </div>
                            {/* Visual Soundwave visualization */}
                            <div className="hidden md:flex items-center gap-1 h-8 ml-auto opacity-50">
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-purple-500 rounded-full"
                                        animate={{ height: [10, 32, 10] }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 3: The App (Standard Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 bg-neutral-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-all"
                    >
                        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none" />
                        <Smartphone className="w-10 h-10 text-green-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">App Scripts Blindados</h3>
                        <p className="text-gray-400 text-sm">
                            A ferramenta que monta suas respostas em minutos.
                        </p>
                    </motion.div>

                    {/* Item 4: Mentorship Bonus (Standard Card Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 bg-neutral-900 rounded-3xl p-8 border border-[#d4af37]/30 relative overflow-hidden group hover:bg-[#d4af37]/5 transition-all"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/20 blur-[50px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-[#d4af37]" />
                            </div>
                            <span className="text-xs font-bold text-[#d4af37] border border-[#d4af37]/30 px-2 py-1 rounded-full uppercase tracking-wider">
                                Bônus Exclusivo
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">Mentoria de Bolso</h3>
                        <p className="text-gray-400 text-sm">
                            A Teacher Patrícia no seu contato pessoal. Tire dúvidas reais.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
