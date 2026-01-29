import Hero from "./components/Hero";
import TargetAudience from "./components/TargetAudience";
import Storytelling from "./components/Storytelling";
import Solution from "./components/Solution";
import AppShowcase from "./components/AppShowcase";
import SocialProof from "./components/SocialProof";
import Deliverables from "./components/Deliverables";
import TeacherBio from "./components/TeacherBio";
import PreparationStrategy from "./components/PreparationStrategy";
import Offer from "./components/Offer";
import StickyCTA from "./components/StickyCTA";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Hero />
      <TargetAudience />
      <Storytelling />
      <PreparationStrategy />
      <Solution />
      <AppShowcase />
      <SocialProof />
      <Deliverables />
      <TeacherBio />
      <Offer />
      <FAQ />

      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} The Ultimate English Interview Kit. Todos os direitos reservados.</p>
          <p>Feito com tecnologia e estratégia para sua aprovação.</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Política de Privacidade</span>
          </div>
        </div>
      </footer>
      <StickyCTA />
    </main>
  );
}
