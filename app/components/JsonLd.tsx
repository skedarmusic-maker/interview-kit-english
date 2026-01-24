import React from 'react';

const JsonLd = () => {
    const faqData = [
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
            a: "Sim! O kit foi desenhado exatamente para situações de urgência. Enquanto cursos tradicionais levam meses, o nosso Checklist de Preparação Expressa e o Simulador de Scripts permitem que você estruture suas respostas estratégicas em menos de 30 minutos."
        },
        {
            q: "Meu inglês não é perfeito, vou conseguir passar?",
            a: "Com certeza. Recrutadores internacionais não buscam perfeição gramatical, mas sim clareza e estratégia. O kit ensina você a usar o Método STAR para narrar suas conquistas com autoridade."
        },
        {
            q: "Vou ter suporte se eu tiver uma dúvida específica?",
            a: "Diferente de cursos automatizados, aqui você tem acesso direto à Teacher Patrícia via WhatsApp. É como ter uma mentora particular no seu bolso."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://interview.softenglish.com.br/#organization",
                "name": "SoftEnglish",
                "url": "https://interview.softenglish.com.br",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://interview.softenglish.com.br/favicon.ico",
                    "width": 512,
                    "height": 512
                },
                "sameAs": []
            },
            {
                "@type": "Product",
                "name": "The Ultimate English Interview Kit",
                "description": "Domine sua entrevista internacional. Prepare-se em 10 minutos sem decoreba e sem travar usando o único método com App de Scripts Blindados.",
                "image": "https://vz-5af29887-36d.b-cdn.net/90b4a2ad-9a65-4179-8b32-69679527e1fa/thumbnail_9934a3ac.jpg",
                "url": "https://interview.softenglish.com.br",
                "brand": {
                    "@type": "Brand",
                    "name": "SoftEnglish"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "297.00",
                    "priceCurrency": "BRL",
                    "availability": "https://schema.org/InStock",
                    "url": "https://pay.kiwify.com.br/L0AzUvb",
                    "priceValidUntil": "2026-12-31",
                    "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "BR",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 7,
                        "returnMethod": "https://schema.org/ReturnByMail",
                        "returnFees": "https://schema.org/FreeReturn"
                    },
                    "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingRate": {
                            "@type": "MonetaryAmount",
                            "value": 0,
                            "currency": "BRL"
                        },
                        "shippingDestination": {
                            "@type": "DefinedRegion",
                            "addressCountry": "BR"
                        }
                    }
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
