
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Heart, HandHeart, Handshake } from 'lucide-react';

function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initiatives = [
    {
      icon: Users,
      title: 'Community Health Workers',
      description: 'Training and empowering local health workers to serve their communities.',
    },
    {
      icon: Heart,
      title: 'Support Groups',
      description: 'Creating spaces for sharing experiences and building connections.',
    },
    {
      icon: HandHeart,
      title: 'Volunteer Program',
      description: 'Engaging community members in health initiatives and outreach.',
    },
    {
      icon: Handshake,
      title: 'Partnerships',
      description: 'Collaborating with local organizations to expand our impact.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-manca-blue to-manca-green">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
            alt="Community"
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
            Our Community
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building stronger, healthier communities through collaboration and engagement
          </motion.p>
        </div>
      </div>

      {/* Initiatives Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Community Initiatives</h2>
            <div className="w-20 h-1 bg-manca-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our community programs focus on building sustainable healthcare solutions through local engagement and empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <initiative.icon className="w-12 h-12 text-manca-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <div className="w-20 h-1 bg-manca-green mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-manca-blue">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team of dedicated volunteers and make a difference in your community.</p>
              <button className="text-manca-blue hover:text-white hover:bg-manca-blue border-2 border-manca-blue px-6 py-2 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-manca-green">Partner</h3>
              <p className="text-gray-600 mb-4">Collaborate with us to create sustainable healthcare solutions.</p>
              <button className="text-manca-green hover:text-white hover:bg-manca-green border-2 border-manca-green px-6 py-2 rounded-full transition-colors duration-300">
                Partner With Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-manca-blue">Donate</h3>
              <p className="text-gray-600 mb-4">Support our community initiatives through financial contributions.</p>
              <button className="text-manca-blue hover:text-white hover:bg-manca-blue border-2 border-manca-blue px-6 py-2 rounded-full transition-colors duration-300">
                Donate Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;