import { motion } from 'motion/react';
import { CakeSlice, Leaf, Clock, Smartphone, ChefHat, Heart } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: <CakeSlice className="w-7 h-7" />, text: "Variedade para sair da mesmice" },
    { icon: <Leaf className="w-7 h-7" />, text: "Opções sem açúcar, sem glúten e sem lactose" },
    { icon: <Clock className="w-7 h-7" />, text: "Receitas práticas para a rotina" },
    { icon: <Smartphone className="w-7 h-7" />, text: "Acesso pelo celular" },
    { icon: <ChefHat className="w-7 h-7" />, text: "Fáceis de acompanhar" },
    { icon: <Heart className="w-7 h-7" />, text: "Mais possibilidades para compartilhar com a família" },
  ];

  return (
    <section className="py-20 px-4 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-3xl mx-auto leading-tight"
        >
          MAIS OPÇÕES. MENOS DÚVIDA NA HORA DE COZINHAR.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white p-6 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm border border-brand-dark/5"
            >
              <div className="p-3 bg-brand-light/10 text-brand-light rounded-2xl shrink-0">
                {benefit.icon}
              </div>
              <p className="font-medium text-brand-dark/90 leading-snug my-auto">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
