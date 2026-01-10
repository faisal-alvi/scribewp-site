import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { fetchFreemiusConfig } from '@/lib/freemius';
import { openFreemiusModal } from '@/lib/fsClient';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      period: 'per year',
      description: 'Perfect for trying out ScribeWP',
      features: [
        '10 AI-generated posts per month',
        'Basic Gutenberg integration',
        'Standard content quality',
        'Community support',
        'Basic analytics'
      ],
      cta: 'Get Started Free',
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      icon: Crown,
      // show original yearly price crossed out and make it free
      originalPrice: '$35.99',
      price: 'Free',
      period: 'per year',
      description: 'For serious content creators',
      features: [
        'Unlimited AI-generated posts',
        'Advanced Gutenberg features',
        'Premium content quality',
        'Priority email support',
        'Advanced analytics & insights',
        'Bulk post creation',
        'SEO optimization tools',
        'Custom writing styles'
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-purple-600 to-blue-600'
    }
  ];

  const [loadingPlan, setLoadingPlan] = useState(null);

  const handleSelectPlan = async (planName) => {
    if (planName !== 'Professional') {
      toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" });
      return;
    }

    try {
      setLoadingPlan(planName);
      const cfg = await fetchFreemiusConfig();
      const public_key = (cfg && cfg.public_key) ? cfg.public_key : null;

      // Add coupon to URL so it's visible as /?coupon=ScribeWPProfessionalFree
      try {
        const u = new URL(window.location.href);
        u.searchParams.set('coupon', 'ScribeWPProfessionalFree');
        window.history.replaceState({}, '', u.toString());
      } catch (err) {
        // ignore URL errors
      }

      // Use public product id and plan ids returned by the server; fail if not provided.
      const product_id = cfg && cfg.product_id ? cfg.product_id : null;
      const plan_id = cfg && cfg.plans && cfg.plans.professional ? cfg.plans.professional : null;
      if (!product_id || !plan_id) {
        toast({ title: 'Public plan configuration not available. Please configure public plan ids on the server.' });
        return;
      }

      await openFreemiusModal({
        product_id,
        plan_id,
        public_key,
        image: window.location.origin + '/logo-100x100.png',
        name: 'ScribeWP Professional',
        licenses: 1,
        coupon: 'ScribeWPProfessionalFree',
      });
    } catch (err) {
      console.error('Failed to open Freemius modal:', err);
      toast({ title: 'Failed to open checkout. See console for details.' });
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.popular ? 'border-purple-200 scale-105' : 'border-gray-100'} h-full flex flex-col`}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    {plan.originalPrice ? (
                      <>
                        <span className="text-sm text-gray-500 line-through mt-2">{plan.originalPrice}</span>
                        <span className={`text-5xl font-bold ${plan.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>{plan.price}</span>
                      </>
                    ) : (
                      <span className={`text-5xl font-bold ${plan.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>{plan.price}</span>
                    )}
                    {plan.period !== 'Forever' && (
                      <span className="text-gray-600">/{plan.period.split(' ')[1]}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
                  {plan.price === 'Free' && plan.originalPrice && (
                    <p className="text-sm text-indigo-600 mt-2">Free now — limited-time sale (regular {plan.originalPrice}).</p>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.name === 'Starter' ? (
                  <a
                    href="#"
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        setLoadingPlan(plan.name);
                        const cfg = await fetchFreemiusConfig();
                        const public_key = (cfg && cfg.public_key) ? cfg.public_key : null;
                        const product_id = cfg && cfg.product_id ? cfg.product_id : null;
                        const plan_id = cfg && cfg.plans && cfg.plans.starter ? cfg.plans.starter : null;
                        if (!product_id || !plan_id) {
                          toast({ title: 'Public starter plan configuration not available. Please configure public plan ids on the server.' });
                          return;
                        }

                        // Open Freemius modal for starter plan using public ids
                        await openFreemiusModal({
                          product_id,
                          plan_id,
                          public_key,
                          image: window.location.origin + '/logo-100x100.png',
                          name: 'ScribeWP Starter',
                          licenses: 1,
                        });
                      } catch (err) {
                        console.error('Starter modal error:', err);
                        toast({ title: 'Failed to open starter checkout. See console.' });
                      } finally {
                        setLoadingPlan(null);
                      }
                    }}
                    className={`w-full inline-block text-center py-6 text-lg rounded-lg transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {loadingPlan === plan.name ? 'Loading…' : plan.cta}
                  </a>
                ) : (
                  <Button 
                    onClick={() => handleSelectPlan(plan.name)}
                    disabled={loadingPlan === plan.name}
                  className={`w-full py-6 text-lg rounded-lg transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  >
                    {loadingPlan === plan.name ? 'Loading…' : plan.cta}
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans are ready for Freemius integration • Cancel anytime • No hidden fees
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;