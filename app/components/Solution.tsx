"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, X, Search } from "lucide-react";

export default function Solution() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            A diferença entre o <span className="text-purple-500">gaguejo</span> e a contratação
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Esqueça decoreba de textos longos. O Kit é a cura definitiva para a ansiedade pré-entrevista, focado em estratégia e não apenas em gramática.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-red-900/10 border border-red-900/30 rounded-xl">
                                <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-red-200">O Jeito Antigo (Errado)</h4>
                                    <p className="text-sm text-gray-400">PDFs de 50 páginas genéricoss, listas de palavras soltas e aulas de gramática que não preparam para perguntas comportamentais.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-green-900/10 border border-green-500/30 rounded-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                                <Check className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-green-200">O Ultimate Kit (Novo Jeito)</h4>
                                    <p className="text-sm text-gray-400">Simulador Interativo de Respostas, Estratégia STAR, e Scripts 'Fill-in-the-blanks' que se adaptam à sua experiência.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* SEO Driven Strategy Card */}
                        <div className="bg-neutral-900 border border-purple-500/30 rounded-3xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Search className="w-6 h-6 text-purple-500" />
                                Você já pesquisou por isso?
                            </h3>

                            <div className="space-y-6">
                                {/* Item 1 */}
                                <div className="group">
                                    <h3 className="text-purple-300 font-semibold mb-2 flex items-start gap-2 text-sm md:text-base">
                                        <Search className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                                        Como se apresentar em uma entrevista em inglês?
                                    </h3>
                                    <p className="text-gray-400 text-sm pl-6 border-l-2 border-purple-500/20 group-hover:border-purple-500 transition-colors">
                                        Pare de traduzir mentalmente. O Kit entrega o roteiro do seu "Tell me about yourself" pronto para uso.
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="group">
                                    <h3 className="text-purple-300 font-semibold mb-2 flex items-start gap-2 text-sm md:text-base">
                                        <Search className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                                        Perguntas e respostas entrevista de emprego em inglês
                                    </h3>
                                    <p className="text-gray-400 text-sm pl-6 border-l-2 border-purple-500/20 group-hover:border-purple-500 transition-colors">
                                        Acesse o banco de dados do Simulador com as 50 perguntas que os recrutadores de Big Techs realmente fazem.
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="group">
                                    <h3 className="text-purple-300 font-semibold mb-2 flex items-start gap-2 text-sm md:text-base">
                                        <Search className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                                        Como responder sobre pontos fracos em inglês?
                                    </h3>
                                    <p className="text-gray-400 text-sm pl-6 border-l-2 border-purple-500/20 group-hover:border-purple-500 transition-colors">
                                        Aprenda a técnica de "reframe" para transformar fraquezas em pontos de evolução estratégica.
                                    </p>
                                </div>

                                {/* Item 4 */}
                                <div className="group">
                                    <h3 className="text-purple-300 font-semibold mb-2 flex items-start gap-2 text-sm md:text-base">
                                        <Search className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                                        Exemplos de Método STAR para entrevistas
                                    </h3>
                                    <p className="text-gray-400 text-sm pl-6 border-l-2 border-purple-500/20 group-hover:border-purple-500 transition-colors">
                                        Não apenas a teoria, mas 10 exemplos reais de conquistas narradas com impacto e autoridade.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
