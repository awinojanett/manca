import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, HandHeart, Handshake } from "lucide-react";

function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initiatives = [
    {
      icon: Users,
      title: "Community Health Workers",
      description:
        "We provide extensive training and resources to local health workers, equipping them with the knowledge and skills needed to offer essential healthcare services within their communities. This initiative helps bridge the gap in healthcare accessibility and ensures that every individual receives timely and quality care, regardless of their location.",
    },
    {
      icon: Heart,
      title: "Support Groups",
      description:
        "Our support groups offer a safe and welcoming environment where individuals facing similar health challenges can connect, share their experiences, and find encouragement. By fostering meaningful conversations and emotional support, these groups help individuals feel empowered and less isolated in their journeys toward improved well-being.",
    },
    {
      icon: HandHeart,
      title: "Volunteer Program",
      description:
        "Through our volunteer program, we encourage passionate individuals to contribute to community health initiatives. Volunteers play a crucial role in spreading awareness, assisting with healthcare services, and participating in outreach programs. Their dedication helps strengthen our mission to improve overall community health and well-being.",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description:
        "We collaborate with local organizations, healthcare providers, and government agencies to amplify our impact and extend our reach. These partnerships allow us to pool resources, implement innovative health solutions, and create sustainable programs that address the unique healthcare challenges of different communities.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-manca-blue to-manca-green">
        <div className="absolute inset-0">
          <img
            src="/003.jpeg"
            alt="Community"
            className="w-full h-full object-cover opacity-40"
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
            Building stronger, healthier communities through collaboration and
            engagement
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
              Our community programs focus on building sustainable healthcare
              solutions through local engagement and empowerment.
            </p>
          </motion.div>

          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <img
                  src={`/00${index + 2}.jpeg`}
                  alt={initiative.title}
                  className="w-full md:w-1/2 h-64 object-cover square-lg shadow-lg"
                />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Get Involved</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Volunteer</h3>
              <p className="text-gray-700 mb-4">
                Join our team of dedicated volunteers and contribute to creating healthier communities through active participation and support.
              </p>
              <button className="text-blue-700 hover:text-white hover:bg-blue-700 border-2 border-blue-700 px-6 py-2 rounded-full transition-colors duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-600">Partner</h3>
              <p className="text-gray-700 mb-4">
                Work with us to develop and implement sustainable healthcare solutions that positively impact local communities and drive lasting change.
              </p>
              <button className="text-green-600 hover:text-white hover:bg-green-600 border-2 border-green-600 px-6 py-2 rounded-full transition-colors duration-300">
                Partner With Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Donate</h3>
              <p className="text-gray-700 mb-4">
                Your generous donations help us provide essential healthcare services, support community initiatives, and expand our outreach efforts.
              </p>
              <button className="text-blue-700 hover:text-white hover:bg-blue-700 border-2 border-blue-700 px-6 py-2 rounded-full transition-colors duration-300">
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
