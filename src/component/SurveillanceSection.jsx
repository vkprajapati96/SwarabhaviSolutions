'use client';

import { Shield, Droplets, Hammer, Eye } from 'lucide-react';

export default function SurveillanceSection() {
  const services = [
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Comprehensive surveillance solutions for houses, commercial complexes, hospitals, schools, and industries.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Droplets,
      title: 'Water Supply',
      description: 'Ghar-Ghar Jal Mission: Delivering clean tap water to every household across the nation.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Hammer,
      title: 'Construction',
      description: 'Quality construction services with modern equipment and reliable materials for your projects.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Eye,
      title: 'Space Planning',
      description: '12+ years of experience in designing aesthetic residential and commercial spaces.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="bg-[#EBF3FB] w-full min-h-screen px-6 md:px-16 py-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            SURVEILLANCE
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions for residential, commercial, industrial, and public spaces. Trusted by sectors nationwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className={`inline-block p-4 rounded-lg bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
          
          {/* Jal Jeevan Mission */}
          <div className="pb-12 border-b-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Jal Jeevan Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Executing clean water initiatives across the nation. We construct water tanks and provide household tap connections, bringing PM Modi's vision of clean drinking water to every citizen by 2024.
            </p>
          </div>

          {/* Space Planning & Design */}
          <div className="pb-12 border-b-2 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Space Planning & Interior Design
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              12+ years designing aesthetic residential and commercial spaces. We provide complete space planning, interior design, furniture placement, 3D services, and architectural consultation aligned with industry standards. Client-centric approach with timely delivery and unwavering commitment to quality.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Us
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Expert Team</h4>
                <p className="text-gray-700 leading-relaxed">
                  24x7 field support with highly skilled professionals delivering premium and vigorous quality work on every project.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Best Quality & Rates</h4>
                <p className="text-gray-700 leading-relaxed">
                  Industry-leading competitive pricing with modern equipment and highly reliable construction materials for your projects.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Trusted Partner</h4>
                <p className="text-gray-700 leading-relaxed">
                  Valued for timely delivery, professionalism, and strong commitment to quality and excellence in every endeavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}