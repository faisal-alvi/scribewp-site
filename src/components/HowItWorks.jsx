import React from 'react';
import { motion } from 'framer-motion';
import { Download, Settings, Sparkles, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: 'Install Plugin',
      description: 'Download and install ScribeWP from the WordPress plugin directory or upload it directly to your site.',
      number: '01'
    },
    {
      icon: Settings,
      title: 'Configure Settings',
      description: 'Set up your preferences, choose your writing style, and connect your API keys in minutes.',
      number: '02'
    },
    {
      icon: Sparkles,
      title: 'Generate Content',
      description: 'Enter your topic or keywords, and let AI create engaging, SEO-optimized content instantly.',
      number: '03'
    },
    {
      icon: Rocket,
      title: 'Publish & Grow',
      description: 'Review, edit if needed, and publish your content. Watch your traffic and engagement soar.',
      number: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with ScribeWP in just four simple steps and start creating amazing content today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;