import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Database, Server, Monitor, Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>About Us - TeluguTechVidya</title>
        <meta name="description" content="Learn about TeluguTechVidya's mission to provide world-class technology education and our three-tier architecture approach" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">About TeluguTechVidya</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Empowering the next generation of tech professionals with cutting-edge education
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-2xl p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                At TeluguTechVidya, we believe that quality technology education should be accessible to everyone. 
                Our platform bridges the gap between traditional learning and industry demands by providing 
                practical, hands-on courses taught by industry experts.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                We specialize in cutting-edge technologies including DevOps, Cloud Computing, AI, and Infrastructure 
                management, ensuring our students are always ahead of the curve in the rapidly evolving tech landscape.
              </p>
            </div>
            <div className="relative">
              <img 
                className="w-full h-80 object-cover rounded-xl" 
                alt="Team of diverse tech professionals collaborating"
               src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
            </div>
          </div>
        </motion.div>

        {/* Three-Tier Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">How Our Platform Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Tier */}
            <div className="glass-effect rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Tier</h3>
              <p className="text-white/70 leading-relaxed">
                User-friendly interface providing seamless access to courses, interactive learning materials, 
                and progress tracking across all devices.
              </p>
            </div>

            {/* Application Tier */}
            <div className="glass-effect rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Tier</h3>
              <p className="text-white/70 leading-relaxed">
                Robust backend processing course content, managing user interactions, handling assessments, 
                and delivering personalized learning experiences.
              </p>
            </div>

            {/* Database Tier */}
            <div className="glass-effect rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Database Tier</h3>
              <p className="text-white/70 leading-relaxed">
                Secure storage of course materials, user profiles, progress data, and analytics, 
                ensuring data integrity and optimal performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-white/70">
                Building a supportive learning community where students and instructors collaborate and grow together.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70">
                Maintaining the highest standards in course content, instruction quality, and student support.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-8 text-center">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-white/70">
                Continuously evolving our platform and curriculum to stay ahead of industry trends and technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-white/70">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white/70">Expert Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white/70">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-white/70">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
