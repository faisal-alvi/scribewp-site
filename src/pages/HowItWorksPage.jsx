import React from 'react';
import { motion } from 'framer-motion';
import { Download, Settings, Sparkles, Rocket, Key, Sliders, FileText, CheckCircle } from 'lucide-react';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const HowItWorksPage = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to use ScribeWP",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install the Plugin",
        "text": "Download ScribeWP from the WordPress repository and activate it on your site."
      },
      {
        "@type": "HowToStep",
        "name": "Connect API",
        "text": "Enter your secure API key to enable AI generation features."
      },
      {
        "@type": "HowToStep",
        "name": "Configure Settings",
        "text": "Customize writing style, tone, and language preferences."
      },
      {
        "@type": "HowToStep",
        "name": "Generate Content",
        "text": "Use the bulk generator or sidebar assistant to create posts."
      }
    ]
  };

  const detailedSteps = [
    {
      id: 1,
      title: "Install & Activate",
      description: "Getting started is as simple as installing any standard WordPress plugin. Navigate to your Plugins menu, search for 'ScribeWP', and click Install. Once activated, a new 'ScribeWP' menu item will appear in your dashboard sidebar.",
      icon: Download,
      color: "purple",
      features: ["One-click installation", "Lightweight footprint", "Immediate activation"]
    },
    {
      id: 2,
      title: "Secure Setup",
      description: "We prioritize security. Connect your AI service provider (like OpenAI) using your own API key. Your keys are encrypted in your database and never shared with us. This ensures you have full control over your usage limits and costs.",
      icon: Key,
      color: "blue",
      features: ["AES-256 Encryption", "Direct API Connection", "Usage Monitoring"]
    },
    {
      id: 3,
      title: "Tailor Your Voice",
      description: "AI shouldn't sound robotic. Configure your brand voice settings to match your unique style. Select from predefined tones like 'Professional', 'Witty', or 'Casual', or train it with custom instructions to mimic your specific writing flair.",
      icon: Sliders,
      color: "pink",
      features: ["Tone Selection", "Language Settings", "Custom Prompts"]
    },
    {
      id: 4,
      title: "Generate & Polish",
      description: "The magic happens here. Use the Bulk Generator to create hundreds of post drafts from keywords, or use the Gutenberg Sidebar Assistant to help you write paragraph-by-paragraph. The AI suggests headings, outlines, and full content blocks.",
      icon: FileText,
      color: "orange",
      features: ["Bulk Generation", "Gutenberg Integration", "SEO Optimization"]
    }
  ];

  return (
    <>
      <SEO 
        title="How It Works - ScribeWP User Guide"
        description="A detailed step-by-step guide on how to install, configure, and use ScribeWP to automate your WordPress content creation."
        canonical="/how-it-works"
        jsonLd={jsonLd}
      />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Master ScribeWP in Minutes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Powerful technology doesn't have to be complicated. We've designed ScribeWP to fit seamlessly into your existing WordPress workflow.
            </p>
          </motion.div>

          <div className="space-y-24">
            {detailedSteps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Content Side */}
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-${step.color}-100`}>
                    <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.id}. {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-4">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-5 h-5 text-${step.color}-600`} />
                        <span className="font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                     <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 opacity-50 z-0"></div>
                     <div className="relative z-10 bg-white rounded-xl overflow-hidden">
                        {/* Placeholder for specific step illustration - using img-replace */}
                        {index === 0 && (
                             <img alt="WordPress Plugin Installation Screen showing ScribeWP" className="w-full h-auto" src="https://images.unsplash.com/photo-1560472354-0088b5dc9d8d" />
                        )}
                        {index === 1 && (
                             <img alt="API Configuration Panel securely masking keys" className="w-full h-auto" src="https://images.unsplash.com/photo-1661229978118-fc02b873bdaf" />
                        )}
                        {index === 2 && (
                             <img alt="AI Tone and Style settings dashboard" className="w-full h-auto" src="https://images.unsplash.com/photo-1696653337265-ba497e1ed3f9" />
                        )}
                        {index === 3 && (
                             <img alt="Content Generation in progress inside Gutenberg editor" className="w-full h-auto" src="https://images.unsplash.com/photo-1677696795198-5ac0e21060ed" />
                        )}
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold mb-8">Ready to transform your workflow?</h3>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-xl shadow-purple-500/30 transition-all hover:scale-105"
            >
              Start Generating Content Now
            </Button>
          </div>
        </div>
      </div>
      <FinalCTA />
    </>
  );
};

export default HowItWorksPage;