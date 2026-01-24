"use client";

import { motion } from "framer-motion";
import { Copy, Clock, Award, Ear } from "lucide-react";

const strategyItems = [
    {
        icon: Copy,
        title: "Perguntas e Respostas em Inglês para Entrevista",
        description: "Cansado de procurar listas genéricas de 'perguntas e respostas'? Nosso Simulador de Scripts Blindados cria respostas estratégicas baseadas na sua experiência real, eliminando o risco de você parecer um robô decorando textos.",
        delay: 0
    },
    {
        icon: Clock,
        title: "Como se apresentar em uma entrevista em inglês?",
        description: "O guia definitivo para o seu 'Tell me about yourself'. Saiba exatamente o que dizer nos primeiros 2 minutos para causar uma impressão de autoridade imediata, usando o nosso Checklist de Preparação Expressa (30 min).",
        delay: 0.1
    },
    {
        icon: Award,
        title: "Como usar o Método STAR na prática?",
        description: "Transforme suas histórias em conquistas. Aprenda a aplicar a estrutura STAR para destacar seus resultados financeiros e técnicos, exatamente como os recrutadores de multinacionais esperam ouvir, através do nosso Guia Método STAR Descomplicado.",
        delay: 0.2
    },
    {
        icon: Ear,
        title: "Dicas para entrevista em inglês por vídeo ou online",
        description: "Domine o ambiente digital. Nosso Pack de Treino de Sotaques (Listen & Repeat) treina seu ouvido para sotaques globais, garantindo que você entenda cada pergunta por vídeo, sem precisar pedir para o recrutador repetir.",
        delay: 0.3
    }
];

export default function PreparationStrategy() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Sua Preparação <span className="text-purple-500">Estratégica</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A metodologia validada para você eliminar o amadorismo e se posicionar como o profissional internacional que você é.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {strategyItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay }}
                            className="bg-neutral-900/50 border border-white/10 p-8 rounded-2xl group hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-purple-500" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
