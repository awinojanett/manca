
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1584515933487-779824d29309',
      title: 'Healthcare Worker with Patient',
      category: 'Healthcare',
    },
    {
      url: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e',
      title: 'Mother and Child',
      category: 'Maternal Care',
    },
    {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      title: 'Medical Team',
      category: 'Team',
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
      title: 'Community Outreach',
      category: 'Community',
    },
    {
      url: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed',
      title: 'Child Healthcare',
      category: 'Pediatrics',
    },
    {
      url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d',
      title: 'Medical Education',
      category: 'Education',
    },
    {
      url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8',
      title: 'Maternal Care',
      category: 'Maternal Health',
    },
    {
      url: 'https://images.unsplash.com/photo-1542884748-2b87b36c6b90',
      title: 'Healthcare Innovation',
      category: 'Technology',
    },
  ];

  return (
    <div className="pt-16">
      {/* Gallery Hero */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Moments captured from our journey of making healthcare accessible
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.url}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`${image.url}?auto=format&fit=crop&q=80`}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;