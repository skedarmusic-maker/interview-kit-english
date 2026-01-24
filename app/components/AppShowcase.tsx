"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AppShowcase() {
    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Exclusividade do Kit</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Simulador de Scripts <span className="text-purple-500">Blindados</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sua resposta perfeita, montada em segundos. Você só preenche as lacunas e o App gera o roteiro estratégico a prova de falhas.
                    </p>
                </div>

                {/* App Demo Container */}
                <div className="max-w-5xl mx-auto relative cursor-default">
                    {/* Glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-600/20 blur-[100px] rounded-full" />

                    <div className="relative bg-[#0F0F12] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#141418]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="text-gray-500 text-xs font-mono">interview-simulator.app</div>
                            <div className="w-4" />
                        </div>

                        {/* Content */}
                        <div className="grid md:grid-cols-2">
                            {/* Left: Input */}
                            <div className="p-8 border-r border-white/5">
                                <div className="space-y-6">
                                    <div>
                                        <label className="text-xs text-purple-400 uppercase font-bold tracking-wider mb-2 block">Seu Cargo Atual</label>
                                        <div className="h-10 bg-black/50 border border-white/10 rounded-lg flex items-center px-4 text-gray-300 text-sm font-mono">
                                            Senior Software Engineer|
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-purple-400 uppercase font-bold tracking-wider mb-2 block">Destaque de Carreira</label>
                                        <div className="h-24 bg-black/50 border border-white/10 rounded-lg p-3 text-gray-300 text-sm font-mono">
                                            Liderei a migração de monólito para microsserviços reduzindo latência em 40%...
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <button className="w-full h-12 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-bold transition-colors shadow-lg shadow-purple-900/20">
                                            Gerar Script "Tell Me About Yourself"
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Output */}
                            <div className="p-8 bg-black/20 flex flex-col relative">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">98% Match</div>
                                </div>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Script Gerado:
                                </h3>
                                <div className="flex-1 rounded-lg border border-purple-500/20 bg-purple-900/5 p-4 text-gray-300 text-sm leading-relaxed font-mono overflow-hidden">
                                    <p>
                                        <span className="text-purple-400">"I am a</span> <span className="bg-white/10 text-white px-1 rounded">Senior Software Engineer</span> with over 5 years of experience.
                                        <br /><br />
                                        Currently, I specialize in scalable architecture. One of my proudest achievements was when <span className="bg-white/10 text-white px-1 rounded">I led the migration to microservices</span>, which <span className="bg-white/10 text-white px-1 rounded">reduced system latency by 40%</span>.
                                        <br /><br />
                                        <span className="text-purple-400">I am looking for</span> this opportunity because I want to apply my skills in... "
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
