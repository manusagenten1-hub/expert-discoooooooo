import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function CTAButton({ children, href = "#oferta", className = "" }: { children: React.ReactNode, href?: string, className?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-lg md:text-xl py-4 px-8 rounded-full shadow-lg shadow-brand-orange/30 transition-all w-full sm:w-auto text-center ${className}`}
    >
      {children}
      <ChevronRight className="w-6 h-6" />
    </motion.a>
  );
}
