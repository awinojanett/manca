import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            To enhance the quality of life and health outcomes for mothers, newborns, children, and adolescents through accessible healthcare, education, advocacy, and community-based initiatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="bg-blue-800 text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Accessible Healthcare</h3>
            <p>
            Ensuring that individuals in underserved communities have access to high-quality, affordable, and timely healthcare services. Our goal is to bridge the gap in medical care by offering essential treatments, preventive care, and health education to improve overall well-being.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Advocacy</h3>
            <p className="text-gray-700">
            Empowering communities through knowledge, awareness, and strong advocacy efforts. We provide educational resources, training programs, and policy support to help individuals make informed decisions about their health and well-being, ensuring lasting positive change.
            </p>
          </div>
          <div className="bg-green-700 text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Community Initiatives</h3>
            <p>
            Building sustainable solutions through local engagement, collaboration, and empowerment. By working closely with community members, organizations, and leaders, we create impactful programs that address pressing needs, foster self-sufficiency, and drive long-term positive change. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;
