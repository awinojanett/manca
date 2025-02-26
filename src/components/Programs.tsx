
import { motion } from 'framer-motion';
import { Heart, Baby, Shield as Child, Users, BookOpen, Users2, Apple, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const programs = [
    {
      icon: Heart,
      title: 'Safe Motherhood Initiative',
      description: 'Supporting women through pregnancy, childbirth, and postpartum care.',
    },
    {
      icon: Baby,
      title: 'Newborn Health Program',
      description: 'Enhancing neonatal care and survival rates.',
    },
    {
      icon: Child,
      title: 'Child Wellness Program',
      description: 'Promoting health and development in young children.',
    },
    {
      icon: Users,
      title: 'Adolescent Health Program',
      description: 'Supporting youth with health education and resources.',
    },
    {
      icon: Users2,
      title: 'Community Health Training',
      description: 'Building local capacity for healthcare delivery.',
    },
    {
      icon: BookOpen,
      title: 'Health Education',
      description: 'Raising awareness through workshops and outreach.',
    },
    {
      icon: Apple,
      title: 'Nutrition Initiative',
      description: 'Addressing malnutrition and food security.',
    },
    {
      icon: Shield,
      title: 'Emergency Response',
      description: 'Providing rapid support during health crises.',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive healthcare initiatives designed to support communities at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <program.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-700 text-sm">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;