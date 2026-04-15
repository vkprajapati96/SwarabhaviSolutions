'use client';

import { useState } from 'react';
import { Building2 } from 'lucide-react';

const plans = [
  {
    id: 'rose',
    name: 'SSP PREMIUM',
    price: 1900,
    color: 'from-blue-100 to-blue-50',
    borderColor: 'border-blue-300',
    accentColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    features: [
      'Ceramic wall dado in kitchen & bathroom (₹40/sqft)',
      'Steel: Prime gold, Kamdhenu or equivalent',
      'Cement: Birla, ACC, or equivalent',
      'Basic elevation & 2D architectural layout',
      'Granite kitchen counter'
    ]
  },
  {
    id: 'orchid',
    name: 'SPP SILVER',
    price: 2200,
    color: 'from-orange-100 to-orange-50',
    borderColor: 'border-orange-300',
    accentColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    features: [
      'Steel: Jindal + Rathi',
      'Cement: ACC',
      '3D elevation & electrical & plumbing drawings',
      'UPVC windows (3 track, 5mm glass)',
      'Italian tiles or marble flooring (₹180/sqft)'
    ]
  },
  {
    id: 'lily',
    name: 'SPP GOLD',
    price: 2800,
    color: 'from-yellow-100 to-yellow-50',
    borderColor: 'border-yellow-300',
    accentColor: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    features: [
      'Steel: Jindal / TATA / SAIL',
      'Cement: Ultratech / Ace',
      '3D elevations, furniture plan & plumbing drawings',
      'UPVC windows (Fenesta make)',
      'Premium flooring options'
    ]
  },
  {
    id: 'smarthome',
    name: 'Smart Home',
    price: 3200,
    color: 'from-purple-100 to-purple-50',
    borderColor: 'border-purple-300',
    accentColor: 'bg-purple-500',
    textColor: 'text-purple-600',
    features: [
      'Designer Paint',
      'IoT Integration',
      'Home Automation',
      'Smart Locks',
      'Complete tech integration'
    ]
  }
];

export default function CostEstimator() {
  const [plotSize, setPlotSize] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    if (!plotSize || !selectedPlan) {
      alert('Please enter plot size and select a plan');
      return;
    }

    const size = parseFloat(plotSize);
    const plan = plans.find(p => p.id === selectedPlan);
    const cost = size * plan.price;
    
    setTotalCost({
      plotSize: size,
      plan: plan,
      costPerSqft: plan.price,
      totalCost: cost
    });
    setShowResult(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 text-white p-4 rounded-2xl">
              <Building2 size={40} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Construction Cost Estimator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Design your perfect space with our comprehensive cost estimation tool
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Plot Size Input */}
          <div className="mb-12">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Plot Size (sq ft)
            </label>
            <input
              type="number"
              value={plotSize}
              onChange={(e) => setPlotSize(e.target.value)}
              placeholder="Enter plot size in square feet"
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg transition-colors"
            />
          </div>

          {/* Plan Selection */}
          <div className="mb-12">
            <label className="block text-lg font-semibold text-gray-800 mb-6">
              Select Construction Plan
            </label>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 p-6 rounded-2xl border-3 ${
                    selectedPlan === plan.id
                      ? `${plan.color} ${plan.borderColor} shadow-lg scale-105`
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${plan.textColor}`}>
                      {plan.name}
                    </h3>
                    <div className={`text-right`}>
                      <div className="text-2xl font-bold text-gray-900">
                        ₹{plan.price}
                      </div>
                      <div className="text-sm text-gray-600">/sq ft</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Selection Indicator */}
                  {selectedPlan === plan.id && (
                    <div className={`mt-4 pt-4 border-t-2 ${plan.borderColor}`}>
                      <div className={`inline-block px-4 py-2 rounded-lg ${plan.accentColor} text-white text-sm font-semibold`}>
                        ✓ Selected
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-3"
          >
            <Building2 size={24} />
            Calculate Total Cost
          </button>
        </div>

        {/* Result Section */}
        {showResult && totalCost && (
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Cost Breakdown
            </h2>

            <div className="space-y-4 mb-8">
              {/* Base Construction Cost */}
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <p className="text-gray-700">Base Construction Cost</p>
                <p className="text-lg font-semibold text-gray-900">
                  ₹{totalCost.totalCost.toLocaleString('en-IN')}
                </p>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-lg font-semibold text-gray-900">
                  ₹{totalCost.totalCost.toLocaleString('en-IN')}
                </p>
              </div>

              {/* GST 18% */}
              <div className="flex justify-between items-center py-3 border-b border-gray-300">
                <p className="text-gray-700">GST (18%)</p>
                <p className="text-lg font-semibold text-gray-900">
                  ₹{(totalCost.totalCost * 0.18).toLocaleString('en-IN')}
                </p>
              </div>

              {/* Total Cost */}
              <div className="flex justify-between items-center py-4 bg-blue-50 px-4 rounded-lg">
                <p className="text-lg font-bold text-gray-900">Total Cost</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{(totalCost.totalCost * 1.18).toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Summary Info */}
         
            {/* Reset Button */}
            <button
              onClick={() => {
                setPlotSize('');
                setSelectedPlan(null);
                setTotalCost(null);
                setShowResult(false);
              }}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Calculate Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}