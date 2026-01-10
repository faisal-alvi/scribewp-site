import React from 'react';
import { motion } from 'framer-motion';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';
import { Users, Target, Heart, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ScribeWP",
    "description": "Learn about the mission, team, and founder Faisal Alvi behind ScribeWP."
  };

  return (
    <>
      <SEO 
        title="About Us - ScribeWP"
        description="Meet the team behind ScribeWP. Founded by Faisal Alvi, we are on a mission to democratize content creation for WordPress users worldwide."
        canonical="/about"
        jsonLd={jsonLd}
      />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Empowering Creators with AI
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that everyone has a story to tell. ScribeWP removes the technical and creative barriers to content creation, allowing you to focus on your message while we handle the heavy lifting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To help 1 million WordPress users create better content faster by 2026 through ethical and powerful AI tools.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-600">A diverse team of developers, writers, and AI researchers passionate about the future of the web and open source.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">We prioritize user privacy, content quality, and seamless WordPress integration above all else.</p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Founder</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="shrink-0">
                     <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-100 shadow-lg">
                        <img alt="Faisal Alvi Portrait" className="w-full h-full object-cover" src="https://faisalalvi.com/assets/imgs/me-amsterdam.jpg" />
                     </div>
                  </div>
                  <div className="text-center md:text-left">
                     <h3 className="text-3xl font-bold text-gray-900 mb-2">Faisal Alvi</h3>
                     <p className="text-purple-600 font-medium mb-4">Founder & Creator</p>
                     <p className="text-gray-600 mb-6 leading-relaxed">
                        Faisal is a passionate software engineer and entrepreneur dedicated to building tools that simplify the complex. With years of experience in the WordPress ecosystem, he recognized the need for a seamless AI integration that feels native to the platform. ScribeWP is the realization of that vision.
                     </p>
                     <a 
                        href="https://www.linkedin.com/in/alvifaisal/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white bg-[#0077b5] hover:bg-[#006396] px-5 py-2.5 rounded-lg transition-colors font-medium shadow-md"
                     >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                     </a>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Built for WordPress, by WordPress Experts</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ScribeWP began as a simple internal tool for our agency. We needed a way to help our clients generate initial drafts without staring at a blank screen.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, it has grown into a comprehensive suite of writing tools used by thousands. We are committed to the WordPress ecosystem and ensuring our AI tools enhance, rather than replace, human creativity.
                </p>
              </div>
              <div className="relative">
                 <img className="rounded-2xl shadow-xl w-full" alt="Team collaborating in a modern office" loading="lazy" src="https://images.unsplash.com/photo-1594732832278-abd644401426" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FinalCTA />
    </>
  );
};

export default AboutPage;