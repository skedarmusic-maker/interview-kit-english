"use client";

import Image from "next/image";
import { Check, Star, Lock, Smartphone, ShieldCheck, Shield, ArrowRight } from "lucide-react";

export default function Offer() {
    const products = [
        "The Ultimate Interview Kit (Ebook Master)",
        "Acesso ao App de Scripts Blindados (Fill-in-the-blanks)",
        "Checklist de Preparação Express (30 min)",
        "Método STAR Descomplicado",
        "Pack de Treino de Sotaques (Listen & Repeat)",
        "Modelos de Currículo & Cover Letter Atrativos",
        "Audiobook: Mindset de Aprovação Internacional"
    ];



    return (
        <section id="offer" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-neutral-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                    {/* Header */}
                    <div className="bg-purple-600 p-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                            Oferta Exclusiva de Lançamento
                        </h2>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12">

                            {/* Stack */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white mb-6">Você vai receber:</h3>
                                <ul className="space-y-4">
                                    {products.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="bg-purple-500/20 p-1 rounded-full shrink-0 mt-1">
                                                <Check className="w-4 h-4 text-purple-400" />
                                            </div>
                                            <span className="text-gray-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bonus VIP */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl relative">
                                    <div className="absolute -top-3 left-6 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-black" /> BÔNUS VIP
                                    </div>
                                    <div className="flex items-start gap-4 pt-2">
                                        <Smartphone className="w-8 h-8 text-yellow-500 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-yellow-400">Suporte WhatsApp: Teacher Patrícia</h4>
                                            <p className="text-sm text-yellow-200/70 mt-1">
                                                Tire dúvidas e receba feedback direto de uma especialista.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Price & CTA */}
                            <div className="flex flex-col justify-center items-center text-center bg-black/30 md:bg-transparent rounded-2xl md:rounded-none p-6 md:p-0">
                                <div className="mb-6">
                                    <span className="text-gray-500 text-lg line-through block mb-2">De R$ 997,00</span>
                                    <div className="text-5xl font-black text-white tracking-tighter mb-2">
                                        <span className="text-xl font-medium text-purple-400 align-top mr-1">12x</span>
                                        29,70
                                    </div>
                                    <span className="text-gray-400">ou R$ 297,00 à vista</span>
                                </div>

                                <a
                                    href="https://pay.kiwify.com.br/L0AzUvb"
                                    target="_blank"
                                    rel="noopener noreferrer"

                                    className="relative z-10 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all transform hover:-translate-y-1 mb-6 cursor-pointer"
                                >
                                    QUERO GARANTIR MINHAS RESPOSTAS
                                    <ArrowRight className="w-6 h-6" />
                                </a>

                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Lock className="w-3 h-3" />
                                    Pagamento 100% Seguro
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 w-full">
                                    <div className="flex justify-center mb-3">
                                        <Image
                                            src="/images/Selo_de_Garantia_de_7_Dias_PNG_Transparente_Sem_Fundo.png"
                                            alt="Garantia Incondicional de 7 Dias"
                                            width={100}
                                            height={100}
                                            className="w-24 h-auto drop-shadow-lg"
                                            unoptimized
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Garantia INCONDICIONAL de 7 dias <br />ou seu dinheiro de volta.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
