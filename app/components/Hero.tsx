"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);

    const scrollToOffer = () => {
        document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-purple-200">Vagas Internacionais Abertas Agora</span>
                </motion.div>

                {/* Headline - Mais Direto e "Dor" */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight max-w-5xl"
                >
                    Passe na Entrevista em Inglês <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                        Mesmo Sem Ser Fluente
                    </span>
                </motion.h1>

                {/* Subheadline Text - Conecta Medo + Solução + Público */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-8 font-normal max-w-3xl"
                >
                    Respostas prontas, perguntas mais comuns e estrutura certa para entrevistas em <span className="text-white font-semibold">empresas internacionais, TI e Business.</span>
                </motion.p>

                {/* Video Component (VSL) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-4xl aspect-video bg-black rounded-xl shadow-2xl shadow-purple-900/20 overflow-hidden border border-white/10 mb-10 group"
                    style={{ loading: "lazy" } as any}
                >
                    {!isPlaying ? (
                        <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            onClick={() => setIsPlaying(true)}
                        >
                            <Image
                                src="https://vz-5af29887-36d.b-cdn.net/90b4a2ad-9a65-4179-8b32-69679527e1fa/thumbnail_9934a3ac.jpg"
                                alt="Vídeo: Como destravar sua carreira internacional"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                            {/* Play Button */}
                            <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform duration-300 pl-2">
                                <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                            </div>
                        </div>
                    ) : (
                        <iframe
                            src="https://iframe.mediadelivery.net/embed/585415/90b4a2ad-9a65-4179-8b32-69679527e1fa?autoplay=true&preload=true"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen={true}
                        />
                    )}
                </motion.div>

                {/* CTA Button & Urgency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <button
                        onClick={scrollToOffer}
                        className="group relative inline-flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-lg md:text-xl py-5 px-12 rounded-full transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:-translate-y-1 transform"
                    >
                        QUERO ME PREPARAR AGORA
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Urgency Text */}
                    <p className="text-red-400 font-medium text-sm md:text-base flex items-center gap-2 animate-pulse">
                        <Clock className="w-4 h-4" />
                        A entrevista acontece uma vez. A preparação não pode falhar.
                    </p>

                    {/* Footer Social Proof - Reorganized */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-4">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>Acesso Imediato</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>Garantia de 7 Dias</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>Compra Segura</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
