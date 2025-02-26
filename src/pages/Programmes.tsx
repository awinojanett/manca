
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Baby, Users, BookOpen, Apple, Shield, Brain, Stethoscope } from 'lucide-react';

function Programmes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: Heart,
      title: 'Maternal Health',
      description: 'Comprehensive care for mothers throughout pregnancy and postpartum.',
      color: 'blue',
    },
    {
      icon: Baby,
      title: 'Child Development',
      description: 'Supporting healthy growth and development in early childhood.',
      color: 'green',
    },
    {
      icon: Users,
      title: 'Family Planning',
      description: 'Education and resources for family planning and reproductive health.',
      color: 'blue',
    },
    {
      icon: BookOpen,
      title: 'Health Education',
      description: 'Community workshops and educational programs for better health.',
      color: 'green',
    },
    {
      icon: Apple,
      title: 'Nutrition Program',
      description: 'Promoting healthy eating habits and nutritional awareness.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Immunization',
      description: 'Ensuring children receive essential vaccinations and preventive care.',
      color: 'green',
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Supporting mental wellness for mothers and children.',
      color: 'blue',
    },
    {
      icon: Stethoscope,
      title: 'Primary Care',
      description: 'Basic healthcare services for families and communities.',
      color: 'green',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-manca-blue to-manca-green">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Programs"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Programmes
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive healthcare solutions for mothers and children
          </motion.p>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Healthcare Programs</h2>
            <div className="w-20 h-1 bg-manca-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive programs designed to support maternal and child health at every stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${
                  program.color === 'blue' ? 'border-manca-blue' : 'border-manca-green'
                }`}
              >
                <program.icon className={`w-12 h-12 mb-4 ${
                  program.color === 'blue' ? 'text-manca-blue' : 'text-manca-green'
                }`} />
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join us in our mission to improve maternal and child health outcomes
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-manca-blue text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get Involved
              </button>
              <button className="px-8 py-3 border-2 border-manca-green text-manca-green rounded-full hover:bg-manca-green hover:text-white transition-colors duration-300">
                Support Our Programs
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Programmes;