"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function TeacherBio() {
    return (
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 overflow-hidden relative border-t border-white/5">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Column 1: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto md:mx-0 max-w-[400px] md:max-w-none"
                    >
                        {/* Frame/Backdrop - Depth Effect */}
                        <div className="absolute inset-0 bg-purple-500/5 border border-purple-500/20 rounded-[2rem] translate-x-4 translate-y-4 -z-10" />

                        <div className="relative rounded-[2rem] overflow-hidden border border-purple-500/30 shadow-2xl shadow-black/50 aspect-[4/5] md:aspect-auto">
                            <Image
                                src="/images/teacherpaty.png"
                                alt="Teacher Patrícia"
                                width={500}
                                height={650}
                                className="w-full h-full object-cover object-top"
                                unoptimized
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Column 2: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Sua Mentora: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                Teacher Patrícia
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                            <p>
                                Sou professora de inglês há <strong className="text-white">15 anos</strong> e tive a incrível experiência de morar por <strong className="text-white">5 anos na Flórida, EUA</strong>.
                            </p>
                            <p>
                                Meu maior desafio como professora é demonstrar que <strong className="text-white">você tem potencial</strong> para aprender a língua, independentemente do seu nível atual.
                            </p>
                            <p>
                                Meu diferencial? Criar conexões genuínas com cada aluno, entendendo seu estilo de aprendizado para tornar o processo mais natural e eficaz. Juntos, vamos transformar o inglês em uma parte do seu dia a dia!
                            </p>
                        </div>

                        {/* Direct Access Badge */}
                        <div className="inline-flex items-center gap-4 bg-white/5 border border-purple-500/30 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-colors cursor-default">
                            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                                    Acesso Direto
                                    <span className="text-[10px] bg-purple-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        VIP
                                    </span>
                                </h4>
                                <p className="text-sm text-gray-400 leading-tight">
                                    Você terá meu contato pessoal no WhatsApp para suporte e feedbacks.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
