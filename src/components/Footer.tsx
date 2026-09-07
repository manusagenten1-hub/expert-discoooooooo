import { motion } from 'motion/react';
import CTAButton from './Button';

export default function Footer() {
  return (
    <footer className="py-20 md:py-32 px-4 bg-brand-cream text-center border-t border-brand-dark/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6 leading-tight text-brand-dark font-heading"
        >
          MENOS TEMPO PENSANDO NO QUE FAZER.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-medium text-brand-light mb-8"
        >
          Mais opções para preparar, experimentar e compartilhar.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-brand-dark/70 mb-12 max-w-2xl mx-auto"
        >
          300 receitas. 2 bônus. Um repertório inteiro para variar sua rotina.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-6 max-w-md mx-auto"
        >
          <div className="text-5xl font-black text-brand-dark font-heading">
            R$ 14,90
          </div>
          
          <CTAButton href="#oferta" className="w-full text-xl py-5">QUERO MINHAS 300 RECEITAS</CTAButton>
          
          <p className="text-sm font-medium text-brand-dark/50">
            Pagamento único • Acesso imediato
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
