import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Box, Zap, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Generate high-quality blog posts, articles, and content with advanced AI that understands context and tone.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Box,
      title: 'Gutenberg Support',
      description: 'Seamlessly integrated with WordPress Gutenberg editor for a smooth, native writing experience.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Bulk Post Creation',
      description: 'Create multiple posts at once with AI assistance, saving hours of content creation time.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Content Analytics',
      description: 'Track performance metrics, engagement rates, and optimize your content strategy with detailed insights.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Content Creators
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your WordPress content with AI-powered efficiency.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:scale-105">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;