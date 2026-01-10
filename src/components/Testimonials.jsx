import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager at TechBlog',
      content: 'ScribeWP has completely transformed our content creation process. We\'ve gone from publishing 2-3 posts per week to 10+ high-quality articles. The AI understands our brand voice perfectly!',
      rating: 5,
      image: 'Professional headshot of a content manager in a modern office'
    },
    {
      name: 'Michael Chen',
      role: 'Founder of MarketingPro',
      content: 'As an agency owner, ScribeWP has been a game-changer. The bulk post creation feature alone has saved us 20+ hours per week. Our clients love the consistent, quality content.',
      rating: 5,
      image: 'Professional headshot of a marketing agency founder'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Blogger',
      content: 'I was skeptical about AI writing tools, but ScribeWP proved me wrong. It doesn\'t replace creativity—it enhances it. I can now focus on strategy while the AI handles the heavy lifting.',
      rating: 5,
      image: 'Professional headshot of a freelance blogger working remotely'
    },
    {
      name: 'David Thompson',
      role: 'E-commerce Store Owner',
      content: 'The SEO optimization and analytics features are incredible. Our organic traffic has increased by 150% in just 3 months. Best investment we\'ve made for our content marketing.',
      rating: 5,
      image: 'Professional headshot of an e-commerce business owner'
    },
    {
      name: 'Lisa Anderson',
      role: 'Digital Marketing Director',
      content: 'ScribeWP seamlessly integrates with our existing WordPress workflow. The Gutenberg support is flawless, and the content quality is consistently impressive. Highly recommended!',
      rating: 5,
      image: 'Professional headshot of a marketing director in corporate setting'
    },
    {
      name: 'James Wilson',
      role: 'News Website Editor',
      content: 'The speed and accuracy of ScribeWP is outstanding. We can now cover trending topics in real-time with well-researched, engaging articles. It\'s like having a full writing team on demand.',
      rating: 5,
      image: 'Professional headshot of a news editor in editorial office'
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by Content Creators Worldwide
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their content creation process with ScribeWP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-purple-200 mb-4" />
                
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img alt={`${testimonial.name} profile picture`} className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;