import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Star, Lock, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { courses } from '@/data/courses';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleEnrollClick = () => {
    toast({
      title: "🚧 Enrollment Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>{course.title} - TeluguTechVidya</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/courses" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-2xl p-8 mb-8">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {course.category}
                  </span>
                  <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
                  <p className="text-xl text-white/80 leading-relaxed">{course.description}</p>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white/70">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white/70">{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white/70">{course.rating}/5</span>
                  </div>
                </div>

                {/* Demo Video */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Course Preview</h2>
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70">Demo video preview</p>
                        <p className="text-white/50 text-sm mt-2">Click to watch course introduction</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="glass-effect rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Course Content</h2>
                <div className="space-y-4">
                  {course.chapters.map((chapter, index) => (
                    <div key={index} className="border border-white/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-white font-medium">{chapter.title}</h3>
                            <p className="text-white/60 text-sm">{chapter.duration}</p>
                          </div>
                        </div>
                        <Lock className="w-5 h-5 text-white/40" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-200 text-sm">
                    🔒 Course content is locked. Enroll to access all chapters and materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-8 sticky top-24">
                <div className="mb-6">
                  <img 
                    className="w-full h-48 object-cover rounded-xl mb-4" 
                    alt={`${course.title} course thumbnail`}
                   src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{course.price}</div>
                    <div className="text-white/60 line-through text-lg">{course.originalPrice}</div>
                  </div>
                </div>

                <Button 
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-semibold mb-4"
                >
                  Enroll Now
                </Button>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Level:</span>
                    <span className="text-white">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Language:</span>
                    <span className="text-white">Telugu & English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Certificate:</span>
                    <span className="text-white">Yes</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <h3 className="text-white font-semibold mb-3">This course includes:</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Lifetime access</li>
                    <li>• Mobile and TV access</li>
                    <li>• Certificate of completion</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
