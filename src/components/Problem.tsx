import { motion } from 'motion/react';
import { Utensils, Clock, Frown, ThumbsDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Utensils className="w-8 h-8 text-brand-orange" />,
      text: "Acaba repetindo as mesmas receitas"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-orange" />,
      text: "Perde tempo procurando o que fazer"
    },
    {
      icon: <Frown className="w-8 h-8 text-brand-orange" />,
      text: "Encontra opções complicadas demais"
    },
    {
      icon: <ThumbsDown className="w-8 h-8 text-brand-orange" />,
      text: "E sente que comer melhor significa abrir mão do sabor"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          VOCÊ NÃO PRECISA DE MAIS UMA RECEITA. PRECISA DE <span className="text-brand-light">OPÇÕES.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-dark/70 mb-4"
        >
          Porque o problema não é querer comer melhor.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-brand-dark text-brand-cream px-8 py-4 rounded-2xl shadow-xl shadow-brand-dark/10 mb-16 transform -rotate-1"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-wide">
            É NÃO SABER O QUE PREPARAR.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-brand-cream p-8 rounded-3xl flex flex-col items-center text-center gap-4 border border-brand-dark/5"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm">
                {prob.icon}
              </div>
              <p className="font-medium text-lg text-brand-dark/90 leading-snug">
                {prob.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-medium text-brand-dark/80"
        >
          Quando as opções são poucas, a rotina fica repetitiva.
        </motion.p>
      </div>
    </section>
  );
}
