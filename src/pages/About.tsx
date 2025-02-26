import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Globe, HandHelping, Users, Target, Award } from 'lucide-react';

function About() {
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80"
            alt="Medical Team"
            className="w-full h-full object-cover opacity-30"
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
        src="https://images.unsplash.com/photo-1576765607924-1c08f94bb3ef?auto=format&fit=crop&q=80"
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
        MANCA Health Foundation is dedicated to improving maternal and child health by providing essential healthcare services, education, and support programs.
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

       {/* Impact Section */}
       <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">Families Supported</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Communities Reached</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-gray-600">Healthcare Programs</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
