import { motion } from "framer-motion";
import { Heart, Users, Brain, Scale, Target } from "lucide-react";
import { useInView } from "react-intersection-observer";

function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Providing care with empathy and understanding.",
    },
    {
      icon: Scale,
      title: "Equity",
      description: "Ensuring equal access to quality healthcare.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together for greater impact.",
    },
    {
      icon: Target,
      title: "Accountability",
      description: "Maintaining transparency and responsibility.",
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Embracing new solutions for better outcomes.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-100 via-green-100 to-blue-50 overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-green-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-400 opacity-10 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white shadow-lg p-8 rounded-lg relative"
            >
              <value.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
