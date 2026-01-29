"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Storytelling() {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-neutral-900 border-b border-white/5 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        O cenário que você <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            conhece bem demais...
                        </span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Column 1: A Expectativa (The Dream/Effort) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="absolute -top-4 -left-4 bg-gray-800 text-gray-300 text-xs font-bold px-4 py-2 rounded-full border border-white/10 shadow-xl uppercase tracking-wider">
                            A Expectativa
                        </div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-6">
                            Você fez tudo "certo"
                        </h3>
                        <div className="space-y-4 text-gray-400 leading-relaxed font-medium">
                            <p>
                                ✓ Você estuda gramática há anos e sabe as regras.
                            </p>
                            <p>
                                ✓ Faz aulas de conversação semanais com professores.
                            </p>
                            <p>
                                ✓ Assiste suas séries favoritas no original sem legenda.
                            </p>
                            <p className="text-purple-400 italic">
                                "Eu estou pronto. É só uma conversa, certo?"
                            </p>
                        </div>
                    </motion.div>

                    {/* Divider for Mobile */}
                    <div className="md:hidden flex justify-center -my-4 z-20">
                        <div className="bg-red-500/20 p-2 rounded-full border border-red-500/50 animate-pulse">
                            <span className="block w-2 H-2 bg-red-500 rounded-full" />
                        </div>
                    </div>

                    {/* Column 2: A Realidade (The Pain) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative p-10 rounded-2xl bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 shadow-[0_0_50px_rgba(220,38,38,0.1)]"
                    >
                        <div className="absolute -top-4 -right-4 bg-red-900/80 text-red-100 text-xs font-bold px-4 py-2 rounded-full border border-red-500/30 shadow-xl uppercase tracking-wider">
                            A Dura Realidade
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Mas quando a câmera liga...
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            O recrutador pergunta <span className="text-white font-semibold italic">"Tell me about a challenge you overcame"</span>, e o branco acontece.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            O vocabulário some. Você gagueja. E vê a oportunidade de ganhar em Dólar escorrer pelas mãos, <strong className="text-red-400">não por falta de competência técnica</strong>, mas por falta de estratégia.
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-red-500/20">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                <span className="text-2xl">😓</span>
                            </div>
                            <p className="text-sm text-red-200/60 font-medium">
                                Isso soa familiar?
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Desktop CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center hidden md:block"
                >
                    <button
                        onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })}
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    >
                        NÃO QUERO PASSAR POR ISSO DE NOVO
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-gray-500 text-sm mt-3">Você não precisa sofrer sozinho. Existe um método.</p>
                </motion.div>

            </div>
        </section>
    );
}
