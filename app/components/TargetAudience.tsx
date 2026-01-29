"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function TargetAudience() {
    const points = [
        {
            text: "Vai fazer entrevista em inglês nos próximos dias",
            icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
        },
        {
            text: "Já sabe inglês, mas trava sob pressão",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
        },
        {
            text: "Tem medo de errar e parecer inseguro",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
        },
        {
            text: "Disputa vagas em TI, Business ou multinacionais",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
        },
    ];

    return (
        <section className="bg-neutral-900 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            <span className="text-purple-400">Este kit é para você que:</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {points.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <div className="shrink-0 bg-black/50 p-2 rounded-full">
                                    {item.icon}
                                </div>
                                <span className="text-gray-200 font-medium md:text-lg">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 text-center"
                    >
                        <p className="text-gray-500 text-sm italic">
                            Criado por professor com mais de 10 anos de experiência preparando profissionais para o mercado internacional.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
