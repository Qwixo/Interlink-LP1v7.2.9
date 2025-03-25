import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Laptop, Wifi } from 'lucide-react';

const StudyOptionsSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#064088] mb-4">
            Study Options – Choose the Best Fit for You
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you prefer the full U.S. campus experience or the flexibility of online learning, INTERLINK has a program for you.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Blue Background */}
            <div className="bg-[#064088] p-6 flex items-center">
              <MapPin className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">In-Person Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">On Campus at University of North Carolina Greensboro<br />Greensboro, North Carolina, USA</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">10 weeks per level (two 5-week terms)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                    <div className="text-sm text-gray-600 mt-1">Note: F-1 visa students must study full-time.</div>
                  </div>
                </div>
              </div>
              
              {/* Cultural Immersion */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Cultural Immersion:
                </h4>
                <p className="text-gray-700">
                  Live, study, and interact with students from the USA and around the world.
                </p>
              </div>
              
              {/* University Admission */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  University Admission:
                </h4>
                <p className="text-gray-700">
                  Admission without TOEFL/IELTS upon program completion.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Program Header with Dark Orange Background */}
            <div className="bg-[#dc5d33] p-6 flex items-center">
              <Wifi className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Online Program</h3>
            </div>
            
            <div className="p-8">
              {/* Program Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">10 weeks per level (two 5-week terms)</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Full-time Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$1,650 per term</span>
                    <div className="text-sm text-gray-600 mt-1">(2 classes per day)</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#dc5d33] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Part-time Tuition:</span>
                    <span className="ml-2 text-gray-700 font-bold">$825 per term</span>
                    <div className="text-sm text-gray-600 mt-1">(1 class per day)</div>
                  </div>
                </div>
              </div>
              
              {/* Curriculum */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#dc5d33]" />
                  Curriculum:
                </h4>
                <p className="text-gray-700">
                  Same interactive curriculum as the in-person program
                </p>
              </div>
              
              {/* Flexibility */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Flexibility:
                </h4>
                <p className="text-gray-700">
                  Start your English studies from home while applying for your visa<br />
                  <span className="text-sm text-gray-600 mt-1">(Note: Classes are live and scheduled – not asynchronous.)</span>
                </p>
                <p className="text-gray-700 mt-4 font-medium text-[#dc5d33]">
                  Start online while applying for your visa — save time and money.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional paragraph */}
        <div className="text-center mt-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you're abroad or facing delays with immigration, you can start your English studies online and join us in person when you're ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
