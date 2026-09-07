import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const faqs = [
    {
      q: "As receitas são gostosas de verdade?",
      a: "As receitas foram pensadas para manter sabor e textura, mesmo em versões sem açúcar, sem glúten e sem lactose."
    },
    {
      q: "Preciso ter experiência na cozinha?",
      a: "Não. As receitas são apresentadas de forma simples e ilustrada para facilitar o preparo."
    },
    {
      q: "Vou precisar comprar ingredientes difíceis?",
      a: "As receitas variam de acordo com o preparo. O Guia de Substituições Inteligentes também ajuda quando você precisa adaptar algum ingrediente."
    },
    {
      q: "As receitas servem para a família toda?",
      a: "O repertório reúne receitas para diferentes momentos e gostos, permitindo escolher opções para compartilhar em casa."
    },
    {
      q: "Como vou receber?",
      a: "O acesso é digital e fica disponível após a confirmação do pagamento."
    },
    {
      q: "Posso acessar pelo celular?",
      a: "Sim. O material foi pensado para ser acessado pelo celular."
    },
    {
      q: "E se eu não gostar?",
      a: "Você conta com o prazo de garantia informado na oferta, seguindo as condições estabelecidas para solicitar o reembolso."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          DÚVIDAS FREQUENTES
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="border border-brand-dark/10 rounded-2xl overflow-hidden bg-brand-cream/30"
            >
              <div 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-lg text-brand-dark pr-4">{faq.q}</span>
                <span className="text-brand-orange shrink-0">
                  {openIdx === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-brand-dark/70 text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
