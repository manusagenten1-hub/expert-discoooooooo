import { motion } from 'motion/react';
import { CalendarDays, ArrowRightLeft } from 'lucide-react';

export default function Bonus() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            E PARA VOCÊ REALMENTE USAR AS RECEITAS…
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-dark/70"
          >
            Você ainda recebe 2 materiais GRATUITOS para facilitar sua rotina.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bonus 01 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cream rounded-[2.5rem] p-8 md:p-12 relative flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CalendarDays className="w-32 h-32 text-brand-dark" />
            </div>
            <div className="relative z-10 mb-8">
              <span className="inline-block bg-brand-orange text-white font-bold text-sm px-4 py-1.5 rounded-full mb-6">
                BÔNUS 01
              </span>
              <h3 className="text-3xl font-extrabold mb-4 font-heading text-brand-dark">CARDÁPIO DE 30 DIAS</h3>
              <p className="text-lg text-brand-dark/80 leading-relaxed">
                30 dias de ideias prontas para você não precisar decidir todos os dias o que preparar.
              </p>
            </div>
            
            {/* Visual Representation */}
            <div className="mt-auto bg-white rounded-2xl p-6 shadow-sm border border-brand-dark/5 relative z-10">
               <div className="flex items-center gap-3 mb-4 opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                  </div>
               </div>
               <div className="flex items-center gap-3 opacity-80">
                  <div className="w-10 h-10 rounded-full bg-brand-light/30"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/2 bg-brand-light/30 rounded"></div>
                    <div className="h-2 w-full bg-brand-light/30 rounded"></div>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Bonus 02 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-light rounded-[2.5rem] p-8 md:p-12 text-white relative flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ArrowRightLeft className="w-32 h-32" />
            </div>
            <div className="relative z-10 mb-8">
              <span className="inline-block bg-white text-brand-light font-bold text-sm px-4 py-1.5 rounded-full mb-6">
                BÔNUS 02
              </span>
              <h3 className="text-3xl font-extrabold mb-4 font-heading">GUIA DE SUBSTITUIÇÕES INTELIGENTES</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Alternativas para adaptar ingredientes quando você precisar, ajudando a manter sabor e textura.
              </p>
            </div>

            {/* Visual Representation */}
            <div className="mt-auto bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 relative z-10">
               <div className="flex justify-between items-center mb-3 text-white/80 font-medium">
                  <span>Farinha de Trigo</span>
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="text-white">Farinha de Amêndoas</span>
               </div>
               <div className="flex justify-between items-center text-white/80 font-medium">
                  <span>Açúcar Refinado</span>
                  <ArrowRightLeft className="w-4 h-4" />
                  <span className="text-white">Xilitol / Eritritol</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
