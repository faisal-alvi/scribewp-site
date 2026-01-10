import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">AI-Powered Writing Assistant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Amazing WordPress Content in Seconds with AI
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your WordPress writing workflow with cutting-edge AI technology. Generate high-quality blog posts, articles, and content that engages your audience in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-xl shadow-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105"
              >
                Get Started Free
              </Button>
              <Button 
                onClick={handleWatchDemo}
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-lg transition-all hover:border-purple-300"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">10,000+ active users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"></div>
              
              <img className="w-full rounded-lg shadow-lg" alt="Futuristic AI agent interface generating content, purple and blue gradient theme" loading="eager" src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5" />
              
              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img alt="User avatar 1" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
                  <img alt="User avatar 2" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
                  <img alt="User avatar 3" loading="lazy" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1597069170894-eb727a7a7b3c" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Loved by 10,000+ users</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;