import { FaUsers, FaHandshake, FaChalkboardTeacher, FaChartBar, FaHospital, FaBalanceScale, FaLaptopMedical, FaShieldAlt, FaHandHoldingHeart, FaSearch } from "react-icons/fa";

const strategies = [
  { icon: <FaUsers />, title: "Community-Centered Approach", description: "Engaging community members and leaders to ensure programs align with local needs and culture." },
  { icon: <FaHandshake />, title: "Strengthening Healthcare Partnerships", description: "Collaborating with health authorities, NGOs, and healthcare providers to maximize impact." },
  { icon: <FaChalkboardTeacher />, title: "Capacity Building and Training", description: "Providing healthcare workers with skills in preventive care, emergency response, and health education." },
  { icon: <FaChartBar />, title: "Evidence-Based Programming", description: "Using research and data to design and refine interventions for maximum effectiveness." },
  { icon: <FaHospital />, title: "Integrated Health Services", description: "Taking a holistic approach by integrating maternal, neonatal, and child healthcare services." },
  { icon: <FaBalanceScale />, title: "Advocacy for Health Policy Improvements", description: "Working with policymakers to influence reforms and secure resources for healthcare." },
  { icon: <FaLaptopMedical />, title: "Innovative Use of Technology", description: "Leveraging telehealth, digital health records, and mobile apps to improve healthcare delivery." },
  { icon: <FaShieldAlt />, title: "Focus on Preventive Care and Education", description: "Prioritizing health education on nutrition, hygiene, and disease prevention." },
  { icon: <FaHandHoldingHeart />, title: "Resource Mobilization and Sustainability", description: "Securing funding through grants, donations, and partnerships to sustain programs." },
  { icon: <FaSearch />, title: "Monitoring, Evaluation, and Learning (MEL)", description: "Continuously assessing program outcomes and refining strategies for better impact." }
];

export default function Strategies() {
  return (
    <section className="py-10 px-5 max-w-6xl mx-auto bg-cover bg-center" style={{ backgroundImage: "url('/images/006.jpeg')" }}>
      <h2 className="text-3xl font-bold text-center mb-6">Our Strategies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-white bg-opacity-80 rounded-lg shadow-md">
            <span className="text-blue-500 text-3xl">{strategy.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{strategy.title}</h3>
              <p className="text-gray-700">{strategy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
