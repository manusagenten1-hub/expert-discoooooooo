import { motion } from 'motion/react';

export default function Opportunity() {
  const steps = [
    {
      num: "01",
      title: "ESCOLHA O MOMENTO",
      desc: "Café, almoço, jantar, lanche ou sobremesa."
    },
    {
      num: "02",
      title: "ENCONTRE UMA OPÇÃO",
      desc: "Receitas reunidas em categorias práticas."
    },
    {
      num: "03",
      title: "PREPARE SEM COMPLICAÇÃO",
      desc: "Receitas simples e ilustradas."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-brand-light/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            E SE VOCÊ JÁ TIVESSE AS OPÇÕES PRONTAS?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/80 max-w-3xl mx-auto leading-relaxed"
          >
            Em vez de procurar uma receita toda vez que bater a dúvida, você abre seu repertório e escolhe o que combina com aquele momento.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          {["300 RECEITAS", "8 CATEGORIAS", "1 ÚNICO LUGAR"].map((badge, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-light text-brand-dark px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-sm">
              {badge}
            </div>
          ))}
        </motion.div>

        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-6"
          >
            Seu problema não é falta de receitas. <br className="hidden md:block"/>É falta de um repertório que você realmente consiga usar.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
