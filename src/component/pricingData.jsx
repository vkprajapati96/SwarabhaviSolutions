'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const pricingData = [
  {
    id: 'rose',
    name: 'SPP PREMIUM',
    price: '2150',
    color: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    sections: {
      'Designs & Drawings': [
        'Designs & Drawings',
        'Architectural Layout 2D',
        'Basic Elevation Structural Design',
        'Elevation 3D'
      ],
      'Structure': [
        'Steel - Prime gold, Kamdhenu or equivalent',
        'Cement - Birla, ACC, or equivalent',
        'Aggregate - 20 mm, 10 mm, 40mm',
        'Brick - 7.5 N/cm²',
        'Block - AAC Block, 300m, 200mm',
        'RCC, Design mix 20, 25, m',
        'PCC - 7.5 grade/False Ceiling',
        'Ceiling height - 11 FT',
        'Water proofing - Footings',
        'Staircase/Balcony - MS Railing',
        'Anti termite treatment'
      ],
      'Kitchen': [
        'Ceramic wall dado, upto Rs. 40 per sqft',
        'Main sink faucet upto Rs 1500',
        'Any other faucet or Accessories upto Rs.10000 - ISI marked',
        'Kitchen Sink - S.S. Worth Rs 4000',
        'Modular Kitchen',
        'Chimney',
        'Water Proofing - Sink Area'
      ],
      'Bathroom': [
        'Ceramic tiles upto 7" height Rs-65/Sqft',
        'Sanitary ware up to 30,000, mark ISI',
        'CPVC pipe fitting Supreme/Astral + Geyser (15 Ltr)',
        'Bathroom doors - Aluminum frame with Acrylic',
        'Water Proofing - Sunken Waterproofing',
        'Overhead water tank 2000 Ltr'
      ],
      'Door & Windows': [
        'Aluminum windows with glass shutter and mesh shutter (3 Track & I mash) of Jindal Profile',
        'Main Doors: Flush doors with Veneer. (32mm)',
        'Doors frame (Sal and Marandi Red)',
        'Internal Doors: Flush doors with laminates'
      ],
      'Painting': [
        'Internal painting - Wall PDP/Primer/Chaak Mitti',
        'Paint Emulsion (Asian/Berger)',
        'Door Frame - Deco. Paint',
        'Texture Paint as decided',
        'External painting - JK putty/Sakarni putty',
        'Waterproof Primer',
        'Weather Shield paint - Asian/Berger'
      ],
      'Flooring': [
        'Living & Dinning Flooring - Tiles up to Rs 60 per sqft',
        'Rooms & Kitchen flooring - Tiles of Rs.50 per sqft',
        'Balcony, open area flooring - Antiskid tiles of Rs. 40 per sqft',
        'Stair case flooring - Granite of value Rs.150 per sqft',
        'Parking tiles - Antiskid tiles or checked tiles',
        'Roof flooring - Morocco tiles upto Rs.125 per sqft'
      ],
      'Electrical': [
        'Wire - fire proof wire by Finolex',
        'Switches & sockets - Legards or equivalent',
        'Lights',
        'Fans',
        'Earthing',
        'Chandeliers'
      ],
      'Smart Home': [
        'Wi-Fi',
        'Heat Pump'
      ]
    }
  },

  {
    id: 'orchid',
    name: 'SPP SILVER',
    price: '2450',
    color: 'from-orange-50/20 to-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    sections: {
      'Designs & Drawings': [
        'Designs & Drawings',
        'Architectural layout - 2D. Basic elevation',
        'Structural Design 3D elevation',
        'All Services Drawings - Electrical, Plumbing, AC, HVAC or VPV'
      ],
      'Structure': [
        'Steel - Jindal + Rathi',
        'Cement - ACC',
        'Aggregates - 20, 10, 40 mm',
        'Bricks - 7.5 N/cm², AAC Blocks',
        'RCC Design Mix - All approved by Architect',
        'Ceiling height 11 feet (FFL TO FFL)',
        'False Ceiling',
        'Staircase/Balcony - MS Railing/Glass Railing'
      ],
      'Kitchen': [
        'Ceramic wall dado upto Rs. 80 sqft',
        'Main Sink faucet - upto Rs- 4000/-',
        'Any of the faucet or Accessories ISI Mark',
        'Kitchen counter of Granite finish',
        'Modular Kitchen',
        'Chimney',
        'Fridge - 236 Ltr (Double Door)',
        'Water Proofing - Sink LW/URP'
      ],
      'Bathroom': [
        'Ceramic wall dado 7" height upto Rs. 60 per sqft',
        'Sanitaryware & cpvc fitting up to Rs. 45000 per sqft of Jaguar make',
        'CPVC pipe - Apl Apollo, or similar',
        'Doors - waterproof flush doors',
        'Heat grill',
        'Overhead water tank 2000 Ltr',
        'Sunken Waterproofing - Agent (LW/URP)'
      ],
      'Door & Windows': [
        'UPVC windows (3 Track, 5mm glass thickness)',
        'Internal doors flush doors and main door (32mm) with Veneer',
        'Door frame - Marandi or Sal',
        'Wardrobe Wooden / SS',
        'TV wall Paneling'
      ],
      'Painting': [
        'Internal painting - Wall POP, Primer, Chaak Primer',
        'Royal Emulsion for Ceiling',
        'Velvet touch for walls',
        'Door frame - Deco. Paint',
        'Texture Paint as decided',
        'External - JK putty, Deluxe weather shield paint'
      ],
      'Flooring': [
        'Living & Dinning flooring - Tiles or granite or marble up to Rs 150 per sqft',
        'Rooms, Kitchen, Living Area, Balcony & Open Area - Rs.100 per sqft',
        'Anti-skid tiles of value Rs.80 per sqft',
        'Staircase Flooring Granite upto Rs 150 per sqft',
        'Parking - Anti-Skid tiles / Kota Stone / Paver Block',
        'Balcony - Morocco tiles',
        'Roof - Morocco tiles'
      ],
      'Electrical': [
        'Fire proof wire Finolex',
        'Switches - Legrard',
        'Sockets - Legrard ups wiring',
        'Lights',
        'Fans',
        'Chandeliers',
        'Earthing'
      ],
      'Smart Home': [
        'Wi-Fi CAT-6',
        'CCTV Camera',
        'Main Gate lock - Smart Lock',
        'Centralized RO fitting',
        'Heat pump',
        'Softener'
      ]
    }
  },

  {
    id: 'lily',
    name: 'SPP GOLD',
    price: '3150',
    color: 'from-yellow-50/20 to-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-600',
    sections: {
      'Designs & Drawings': [
        'Architectural layout 3D',
        'Elevation Structural Design',
        '3D Elevations',
        'All Services Drawings - Electrical, Plumbing, Furniture, Centralized AC',
        'Interior Drawings'
      ],
      'Structure': [
        'Steel - Jindal / TATA / SAIL',
        'Cement - Ultratech / Ace',
        'Aggregate - 20, 10, 40 mm',
        'Block / Brick',
        'RCC - Design Mix - 7.5 m20, m25',
        'Ceiling Height = 11 feet',
        'Staircase, Balcony, Roof - Railing, Elevation',
        'SS malt finish',
        'False Ceiling',
        'TV wall paneling',
        'Wall moulding design',
        'Footing - Waterproofing'
      ],
      'Kitchen': [
        'Main Sink Faucet - upto 10000/-',
        'Kitchen top granite finish',
        'Modular Kitchen',
        'SS Kitchen',
        'Chimney',
        'Fridge',
        'Wall tiles ceramic upto Rs 100 per sqft',
        'Dado tiles upto Rs 125 per sqft',
        'Sink area - Waterproofing'
      ],
      'Bathroom': [
        'Nitoproof 600 PF Epoxy',
        'Sanitary wear & CPVC Fittings up to Rs 80000/-',
        'CPVC fitting - Astral/Supreme',
        'Doors - waterproof flush doors',
        'Mirror, soap dish, Towel Rail',
        'Geyser 20 LTS',
        'Sunken Waterproofing - Agent (Pidilite/URP)',
        'Heat grill',
        'Glass partition (Water guard)',
        'Ventilation fan 3"',
        'Overhead water tank SS'
      ],
      'Door & Windows': [
        'UPVC windows with (3 Track)',
        'Fix window - glass 10mm laminated toughened glass',
        'Main doors - Nagpur seasoned teak',
        'Internal doors - flush doors with veneer',
        'Frame Sal or Marandi 4x3)',
        'Door frame - teak wood'
      ],
      'Painting': [
        'Internal - Wall POP, Primer, Chaak Primer',
        'Royal Emulsion for Ceiling',
        'Velvet touch for walls (Deluxe/Berger)',
        'External - JK putty, Primer waterproofing',
        'Weather shield paint',
        'Texture paint as decided'
      ],
      'Flooring': [
        'Italian marble for rooms and living area',
        'Kitchen - Ceramic tiles for wall, dado',
        'Kitchen floor - Italian tiles',
        'Fair area - Moroccan tiles',
        'Balcony and Parking - Antiskid tiles',
        'Roof flooring - Moroccan tiles',
        'Garden area and Parking - Paver block, Kota stone'
      ],
      'Electrical': [
        'Wires (FRLS)',
        'Switches & sockets - COMA, Schneider, Havells',
        'UPS wiring, car charging point',
        'Conduit - AKG',
        'Lights, Fans, Chandeliers, Earthing'
      ],
      'Smart Home': [
        'Wi-Fi CAT-6',
        'CCTV Camera',
        'Main Gate lock - Smart Lock',
        'Smart switches paired with Alexa',
        'Smart locks (Bluetooth, Wi-Fi)',
        'Centralized RO fitting',
        'Softener',
        'Heat pump',
        'SS overhead water tank'
      ]
    }
  }
];

export default function PricingCards() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (cardId, section) => {
    const key = `${cardId}-${section}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer transparent and competitive pricing tailored to your project's needs. Get the best value for your investment without compromising on quality or service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map(plan => (
            <div
              key={plan.id}
              className={`bg-gradient-to-br ${plan.color} rounded-3xl border-2 ${plan.borderColor} overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Card Header */}
              <div className="p-8 border-b-2 border-white/50">
                <h2 className={`text-4xl font-bold ${plan.textColor} mb-2`}>
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">₹ {plan.price}</span>
                  <span className="text-gray-700">/sq.ft</span>
                </div>
              </div>

              {/* Card Body - Accordion Sections */}
              <div className="p-6 space-y-3 max-h-[600px] overflow-y-auto">
                {Object.entries(plan.sections).map(([section, items]) => {
                  const isExpanded = expandedSections[`${plan.id}-${section}`];
                  return (
                    <div key={section} className="border-2 border-white/40 rounded-lg overflow-hidden bg-white/30 backdrop-blur-sm">
                      <button
                        onClick={() => toggleSection(plan.id, section)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/20 transition-colors"
                      >
                        <span className="font-semibold text-gray-800">{section}</span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-700 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="px-4 py-3 border-t border-white/40 bg-white/20 space-y-2">
                          {items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-gray-700 mt-1">•</span>
                              <span className="text-sm text-gray-800 leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
                        </div>
          ))}
        </div>


      </div>
    </div>
  );
}