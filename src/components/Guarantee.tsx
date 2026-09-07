import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 px-4 bg-brand-cream border-t border-brand-dark/5">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-brand-dark/5"
        >
          <div className="shrink-0 p-6 bg-brand-light/10 text-brand-light rounded-full">
            <ShieldCheck className="w-16 h-16" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              GARANTIA DE 7 DIAS
            </h2>
            <p className="text-brand-dark/80 text-lg leading-relaxed">
              Você tem 7 dias de garantia incondicional para conhecer o material. Se perceber que não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
