import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out Smike Speech.",
      features: [
        "Access to standard voices",
        "10 minutes of generation per month",
        "Personal use license",
        "Standard support"
      ],
      cta: "Get Started",
      variant: "secondary" as const
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For creators who need more power.",
      features: [
        "Access to all premium voices",
        "Unlimited generation",
        "Commercial rights",
        "Priority support",
        "Higher bitrate audio"
      ],
      cta: "Upgrade to Pro",
      variant: "primary" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations.",
      features: [
        "Custom voice cloning",
        "API access",
        "SSO & Advanced security",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h1>
          <p className="text-slate-400 text-lg">Choose the plan that's right for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-slate-900 rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-indigo-500 shadow-2xl shadow-indigo-500/10' 
                  : 'border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 ml-2">{plan.period}</span>}
                </div>
                <p className="text-slate-400 mt-4 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};