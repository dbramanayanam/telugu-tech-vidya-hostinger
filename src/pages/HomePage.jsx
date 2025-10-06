import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

const HomePage = () => {
  const featuredCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>TeluguTechVidya - Master Technology Skills Online</title>
        <meta name="description" content="Learn DevOps, AI, AWS, Linux, Terraform and more with TeluguTechVidya - Your premier online technology learning platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="tech-pattern absolute inset-0 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Master <span className="gradient-text">Technology</span> Skills Online
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Join thousands of professionals advancing their careers with our expert-led courses in 
                DevOps, AI, AWS, Linux, and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                    Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <img 
                  className="w-full h-80 object-cover rounded-xl" 
                  alt="Students learning technology online"
                 src="https://images.unsplash.com/photo-1650278795309-26295c74cf2b" />
                <div className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: '10,000+', label: 'Active Students' },
              { icon: BookOpen, number: '50+', label: 'Expert Courses' },
              { icon: Award, number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-8 text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our most popular technology courses designed by industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3">
                View All Courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our community of tech professionals and take your career to the next level
            </p>
            <Link to="/courses">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
