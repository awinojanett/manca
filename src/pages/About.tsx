import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Globe, HandHelping, Users, Target, Award } from 'lucide-react';
import Strategies from '../components/Strategies';

function About() {
  useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="absolute inset-0">
          <img
            src="/007.jpeg"
            alt="Medical Team"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Empowering Health, Transforming Lives</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Providing quality healthcare and support for mothers, children, and adolescents worldwide.</p>
        </div>
      </div>

      {/* Who We Are Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Image on the Left */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-lg overflow-hidden"
    >
      <img
        src="/010.jpeg"
        alt="Healthcare workers"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Text on the Right */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-left"
    >
      <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
      <p className="text-gray-700 text-lg mb-4">
        MANCA Health Foundation is focused on Health and Well-being for Maternal, Neonatal, Child, and Adolescent. We are dedicated to improving maternal and child health by providing essential healthcare services, education, and support programs.
      </p>
      <p className="text-gray-700 text-lg">
        Through our dedicated team of professionals, we ensure that families receive the best possible care, empowering communities for a healthier future.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        MANCA Health Foundation is focused on Health and Well-being for Maternal, Neonatal, Child, and Adolescent. We are dedicated to improving maternal and child health by providing essential healthcare services, education, and support programs.
      </p>
      <p className="text-gray-700 text-lg">
        Through our dedicated team of professionals, we ensure that families receive the best possible care, empowering communities for a healthier future.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        MANCA Health Foundation is focused on Health and Well-being for Maternal, Neonatal, Child, and Adolescent. We are dedicated to improving maternal and child health by providing essential healthcare services, education, and support programs.
      </p>
      <p className="text-gray-700 text-lg">
        Through our dedicated team of professionals, we ensure that families receive the best possible care, empowering communities for a healthier future.
      </p>
    </motion.div>
  </div>
</section>


      {/* What We Do Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Maternal Care</h3>
              <p className="text-gray-600">Providing prenatal and postnatal care to ensure safe deliveries and healthy mothers.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Community Outreach</h3>
              <p className="text-gray-600">Educating and empowering communities with health awareness programs.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <HandHelping className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Support & Advocacy</h3>
              <p className="text-gray-600">Working with governments and NGOs to improve healthcare policies.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Join Us</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">Be part of our mission. Volunteer, donate, or partner with us to make a difference.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">Get Involved</button>
        </div>
      </section>

      <Strategies />  

      {/* Governance Structure Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Governance Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Board of Directors</h3>
              <p className="text-gray-600">Providing strategic guidance and oversight for MANCA’s mission and objectives.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Executive Coordinator</h3>
              <p className="text-gray-600">Leading day-to-day operations and ensuring effective execution of programs.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Program Managers</h3>
              <p className="text-gray-600">Overseeing maternal health, neonatal care, child wellness, and adolescent health programs.</p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Finance & Admin</h3>
              <p className="text-gray-600">Ensuring financial accountability and smooth administrative operations.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Monitoring & Evaluation</h3>
              <p className="text-gray-600">Tracking program effectiveness and data-driven improvements.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <HandHelping className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Community Health Promoters</h3>
              <p className="text-gray-600">Delivering health services and education at the grassroots level.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
