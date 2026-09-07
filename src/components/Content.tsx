import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Wheat, UtensilsCrossed, Sandwich, Cookie, Milk, Soup, GlassWater, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Content() {
  const categories = [
    { icon: <Coffee />, title: "Café da Manhã", count: "39 receitas" },
    { icon: <Wheat />, title: "Pães, Bolos e Massas", count: "43 receitas" },
    { icon: <UtensilsCrossed />, title: "Almoços e Jantares Práticos", count: "55 receitas" },
    { icon: <Sandwich />, title: "Lanches e Salgados", count: "39 receitas" },
    { icon: <Cookie />, title: "Sobremesas Sem Açúcar", count: "66 receitas" },
    { icon: <Milk />, title: "Receitas Cremosas Sem Lactose", count: "27 receitas" },
    { icon: <Soup />, title: "Molhos, Cremes e Acompanhamentos", count: "20 receitas" },
    { icon: <GlassWater />, title: "Bebidas, Vitaminas e Extras", count: "11 receitas" },
  ];

  const gallery = [
    { name: "Bolo de Cenoura com Cobertura Cremosa", img: "https://i.ibb.co/QjcWCx7v/9Xqd-Bay.webp" },
    { name: "Pão Caseiro Sem Glúten", img: "https://i.ibb.co/6R0NkKXt/1y-Pajy-N.webp" },
    { name: "Panqueca Leve de Banana", img: "https://i.ibb.co/Q3PwHB3j/c-Y8OF7l.webp" },
    { name: "Brigadeiro Sem Açúcar", img: "https://i.ibb.co/Jwnw1MFh/w-S19-So-M.webp" },
    { name: "Torta Salgada de Frango", img: "https://i.ibb.co/5WGryL0H/tql5cat.jpg" },
    { name: "Brownie Fit de Chocolate", img: "https://i.ibb.co/KpXrhcGT/Small-Batch-Brownies-Eats-Delightful.webp" },
    { name: "Cookie Crocante sem glúten", img: "https://i.ibb.co/jktKR5R8/Cookies-Veganos-com-peda-os-de-Chocolate-Cozinha-Roman.webp" },
  ];

  const testimonials = [
    "https://i.ibb.co/cc5d8W25/Whats-App-Image-2026-09-06-at-20-13-54.webp",
    "https://i.ibb.co/5WXCw11t/Whats-App-Image-2026-09-06-at-20-20-54.webp",
    "https://i.ibb.co/ks1mV9Nk/Whats-App-Image-2026-09-06-at-20-27-27.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto"
          >
            300 RECEITAS PARA VOCÊ PARAR DE REPETIR AS MESMAS.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-dark/70"
          >
            Uma coleção completa para diferentes momentos do dia.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx }}
              className="bg-brand-cream p-6 rounded-3xl flex flex-col items-center text-center gap-3 hover:bg-brand-light hover:text-white transition-colors group cursor-default"
            >
              <div className="p-3 bg-white text-brand-light rounded-2xl group-hover:text-brand-orange transition-colors shadow-sm">
                {cat.icon}
              </div>
              <h4 className="font-bold text-lg leading-tight">{cat.title}</h4>
              <span className="text-sm opacity-80 font-medium">{cat.count}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading font-bold"
            >
              Veja o que estão dizendo das receitas:
            </motion.h3>
          </div>
          
          <div className="relative max-w-md mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-brand-cream/30 border border-brand-dark/5 flex items-center justify-center">
            <button onClick={handlePrev} className="absolute left-2 z-20 p-2 bg-white/80 rounded-full hover:bg-white"><ChevronLeft/></button>
            <button onClick={handleNext} className="absolute right-2 z-20 p-2 bg-white/80 rounded-full hover:bg-white"><ChevronRight/></button>
            
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={testimonials[currentIndex]}
                alt={`Depoimento ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-contain p-2"
              />
            </AnimatePresence>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-brand-orange' : 'bg-brand-dark/20 hover:bg-brand-dark/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading font-bold"
          >
            OLHA O QUE PODE APARECER NA SUA MESA:
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx % 4) }}
              className="group relative rounded-3xl overflow-hidden aspect-square shadow-md"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 md:p-6">
                <p className="text-white font-medium text-sm md:text-base leading-tight drop-shadow-md">
                  {item.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
