
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollClick: () => void;
}

function Hero({ onScrollClick }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-500 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/mother.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MANCA Health Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Empowering mothers, newborns, children, and adolescents for a healthier future
          </p>
          <button
            onClick={onScrollClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={onScrollClick}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
}

export default Hero;