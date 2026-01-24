"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "E se meu inglês for básico?",
        a: "O Kit foi desenhado para todos os níveis. Os scripts são adaptáveis e o App ajuda você a construir frases complexas mesmo com vocabulário simples. O foco é te dar confiança, independente do nível."
    },
    {
        q: "Como recebo o acesso?",
        a: "Imediatamente após a confirmação do pagamento. Você receberá um e-mail com login e senha para acessar a plataforma do aluno e o App."
    },
    {
        q: "Tenho acesso por quanto tempo?",
        a: "Você tem acesso vitalício ao material e ao App, incluindo futuras atualizações."
    },
    {
        q: "Serve para qualquer área?",
        a: "Sim! Os scripts e a metodologia STAR funcionam para TI, Engenharia, Marketing, Vendas e qualquer área corporativa."
    },
    {
        q: "Tenho uma entrevista nos próximos dias, dá tempo?",
        a: "Sim! O kit foi desenhado exatamente para situações de urgência. Enquanto cursos tradicionais levam meses, o nosso Checklist de Preparação Expressa e o Simulador de Scripts permitem que você estruture suas respostas estratégicas em menos de 30 minutos. Você foca no que realmente cai na entrevista, sem perder tempo com gramática desnecessária para o momento."
    },
    {
        q: "Meu inglês não é perfeito, vou conseguir passar?",
        a: "Com certeza. Recrutadores internacionais não buscam perfeição gramatical, mas sim clareza e estratégia. O kit ensina você a usar o Método STAR para narrar suas conquistas com autoridade, mesmo que você cometa pequenos erros de sotaque. Além disso, o Pack de Sotaques prepara seu ouvido para entender recrutadores do mundo todo, eliminando o medo do \"branco\" na hora da pergunta."
    },
    {
        q: "Vou ter suporte se eu tiver uma dúvida específica?",
        a: "Diferente de cursos automatizados, aqui você tem acesso direto à Teacher Patrícia via WhatsApp. Com 15 anos de experiência preparando profissionais para multinacionais, ela validará suas respostas e tirará suas dúvidas em tempo real. É como ter uma mentora particular no seu bolso para garantir que você não cometa erros bobos que poderiam custar sua aprovação."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-semibold text-gray-200">{faq.q}</span>
                                {openIndex === i ? (
                                    <ChevronUp className="w-5 h-5 text-purple-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-gray-400">
                    <p>
                        Ainda tem alguma dúvida?{" "}
                        <a
                            href="https://wa.me/5511999999999" // TODO: Update with actual number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 font-bold underline decoration-2 underline-offset-4 transition-colors"
                        >
                            Clique aqui
                        </a>{" "}
                        e fale com a Teacher Patrícia no WhatsApp.
                    </p>
                </div>
            </div>
        </section>
    );
}
