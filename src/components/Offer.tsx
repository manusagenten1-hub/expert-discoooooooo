import { motion } from 'motion/react';
import { CheckCircle2, Lock } from 'lucide-react';
import CTAButton from './Button';

export default function Offer() {
  return (
    <section id="oferta" className="py-20 md:py-32 px-4 bg-brand-dark text-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
          >
            VOCÊ PODE CONTINUAR PROCURANDO O QUE PREPARAR…
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-cream/80"
          >
            Ou pode ter 300 opções organizadas para escolher quando quiser.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white text-brand-dark rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-black/40 border-8 border-brand-light/30"
        >
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.ibb.co/Z1cnjHCY/Chat-GPT-Image-6-de-set-de-2026-19-28-49.webp" 
              alt="Mockup 300 Receitas Sem Glúten" 
              className="w-full max-w-sm h-auto object-contain drop-shadow-xl"
            />
          </div>
          <div className="text-center mb-8 pb-8 border-b border-gray-100">
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-brand-light">
              300 RECEITAS + 2 BÔNUS
            </h3>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "300 receitas doces e salgadas",
              "Receitas sem açúcar, sem glúten e sem lactose",
              "Café da manhã, almoço, jantar, lanches e sobremesas",
              "Acesso imediato",
              "Acesso pelo celular",
              "Cardápio de 30 Dias",
              "Guia de Substituições Inteligentes"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-1 mb-2">
              <span className="text-brand-dark/50 line-through text-2xl font-bold">De R$ 59,99</span>
              <div className="text-6xl md:text-7xl font-black font-heading text-brand-dark tracking-tight">
                <span className="text-3xl font-bold align-top relative top-3 mr-1">R$</span>
                14,90
              </div>
            </div>
            <p className="text-brand-dark/60 font-medium">Pagamento único</p>
            <div className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm inline-block">
              ⚠️ OFERTA ACABA DIA 09/09!
            </div>
          </div>

          <div className="space-y-4">
            <CTAButton href="https://pay.cakto.com.br/nafbd53_1090046" className="w-full text-xl py-5">QUERO ACESSAR AGORA</CTAButton>
            <div className="flex items-center justify-center gap-2 text-sm text-brand-dark/60 font-medium pt-2">
              <Lock className="w-4 h-4" />
              <span>Compra segura • Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
