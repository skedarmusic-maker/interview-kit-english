"use client";

import { motion } from "framer-motion";
import { AlertCircle, Frown, Users, Briefcase } from "lucide-react";

const pains = [
    {
        icon: AlertCircle,
        title: "Medo de Travar",
        description: "Aquele branco na mente na hora H, mesmo sabendo a resposta em português.",
    },
    {
        icon: Users,
        title: "Síndrome do Impostor",
        description: "Sentir que não merece a vaga porque seu inglês não é 'nativo' ou perfeito.",
    },
    {
        icon: Frown,
        title: "Vergonha do Sotaque",
        description: "Medo de ser julgado pela pronúncia e perder a credibilidade profissional.",
    },
    {
        icon: Briefcase,
        title: "Frustração Profissional",
        description: "Perder vagas de R$ 15k+ (dólar/euro) não por falta de técnica, mas de confiança.",
    },
];

export default function PainPoints() {
    return (
        <section className="py-20 bg-neutral-900/50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Você sente que o seu inglês <span className="text-purple-500">'some'</span> quando o recrutador começa a falar?
                    </h2>
                    <p className="text-gray-400">
                        Você não está sozinho. A maioria dos profissionais qualificados perde oportunidades por barreiras emocionais, não linguísticas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-colors">
                                <pain.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{pain.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{pain.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
