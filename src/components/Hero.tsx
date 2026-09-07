import { motion } from 'motion/react';
import { CheckCircle2, Lock } from 'lucide-react';
import CTAButton from './Button';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden px-4 text-center">
      {/* Title Banner */}
      <div className="inline-block bg-brand-orange text-white py-1 px-4 mb-8 text-sm font-bold tracking-widest uppercase rounded-full">
        300 RECEITAS SEM GLÚTEN
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-brand-light/10 text-brand-light font-semibold text-sm mb-6 tracking-wide">
            300 RECEITAS PARA VARIAR SUA ROTINA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6">
            Emagreça até 4 quilos por semana comendo apenas alimentos sem Glúten
          </h1>
          <p className="text-lg md:text-xl text-brand-dark/80 mb-8 leading-relaxed">
            Mais de 300 receitas deliciosas sem glúten para você emagrecer comendo bem
          </p>
          
          {/* Mockup */}
          <div className="my-12 flex justify-center">
            <img 
              src="https://i.ibb.co/CpDKpSKW/Chat-GPT-Image-6-de-set-de-2026-19-53-39.webp" 
              alt="Mockup 300 Receitas Sem Glúten" 
              className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <ul className="space-y-4 mb-10 text-left inline-block">
            {[
              "Café, Almoço, Jantar, Lanches e sobremesas",
              "Receitas doces e salgadas",
              "Acesso imediato"
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="flex items-center gap-3 text-brand-dark/90 font-medium"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-light shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="space-y-4">
            <CTAButton href="#oferta">QUERO TER AS 300 RECEITAS</CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
