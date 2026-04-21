import { ArrowRight } from 'lucide-react';

import blog1 from "../image/blog/blog1.jpeg"
import blog2 from "../image/blog/blog2.jpeg"
import blog3 from "../image/blog/blog3.jpeg"
import blog4 from "../image/blog/blog4.jpeg"
import blog5 from "../image/blog/blog5.jpeg"
import blog6 from "../image/blog/blog6.jpeg"
import blog7 from "../image/blog/blog7.jpeg"
import blog8 from "../image/blog/blog8.jpeg"
import blog9 from "../image/blog/blog9.jpeg"

const blogContent = [

  {
    id: 1,
    title: "New Business Models of Architecture in the Future",
    sections: [
      {
        heading: "The Evolution of Construction & Design",
        content: "When we talk of construction and designing some decades back, the architectural approach has nothing much to do. The construction was purely on the basis of contracts. Early the business, construction, designing, plot layout and payments were all informal and without any formal agreement. People were not very professional and skilled."
      },
      {
        heading: "From Traditional to Professional Excellence",
        content: "Today the approach to Architecture, designing, interior work, and decor has changed. Construction and designing have become a gentlemen's business. With each passing year the work style, patterns and approach have changed. Various experiments in project-delivery models and construction management got introduced. Early the contractor involvement was not effective, but today's design assistance and building design are far more refined."
      },
      {
        heading: "Modern Architecture & Technology",
        content: "Today, designers and architects come with enthusiasm and zeal to give something new. The architecture profession today is far leaner and clear than before, using new technology to give refined looks. Modern designs are based on strategy and careful planning. The journey from planning to designing, executing, and finally delivery of the project is exciting and full of adventure."
      }
    ],
    image: blog3
  },

  {
    id: 2,
    title: "Sketch - First Step in Architecture",
    sections: [
      {
        heading: "The Power of Sketching",
        content: "Earlier architects only draw sketches on paper, but with changing approach and adding creativity to the work, sketches have evolved. The sketch develops the skills of observation, hand-eye coordination, thought process, and the use of the best references before the actual model of the building."
      },
      {
        heading: "From Paper to Digital",
        content: "An Architect's most important tool is the medium of conversion of thoughts and creativity to tangible parameters on paper. Before designing the building, sketching techniques tell about the layout, plot size, context, borders and features of the actual shape of the building structure. Sketching defines the viewpoint of the building that represents the actual image."
      },
      {
        heading: "Modern Software Integration",
        content: "With changing trends, many software tools are being used to give refreshing looks to buildings. The software helps designers to create in both 2D and 3D effectively. Early it took a lot of time, but now software has saved time. Sketching and Architecture go hand in hand - they are basically 2 sides of the same coin."
      }
    ],
    image: blog2
  },

  
  {
    id: 3,
    title: "Our Ancient Kitchens and Changing Taste of Designs in India",
    sections: [
      {
        heading: "Kitchen - A Sacred Space in Indian Culture",
        content: "With its diverse rich culture, India is also known for its food around the world. India's kitchen holds an immense traditional and religious significance in our life. We take our kitchen as a holy place and before entering the kitchen we take a proper bath. We enter our kitchen barefoot to maintain its purity. These rituals prove that kitchen is an auspicious place for us."
      },
      {
        heading: "Traditional to Modern: The Transformation",
        content: "Earlier the kitchens in India were constructed aloof from other areas of the household so that it can maintain its serenity and purity. But with passing time, there have been constant changes in the name of innovations and modern creativity. Our ancient kitchens were unique and different with different utensils and cooking concepts. While adopting new methodology, India is on a constant pace of development."
      },
      {
        heading: "Smart Kitchens - New Normal",
        content: "With such a busy lifestyle, it is important to maintain efficiency and change the dwelling concept. We spend maximum time in kitchen and understanding smart homes, a Smart kitchen is the new normal. Today's Kitchen should be comfortable and flexible with upgraded technology. Modular kitchens are highly effective where we can manage space and save time."
      }
    ],
    image: blog1
  }
];
const galleryData = [
  { id: 1, img: blog4},
  { id: 5, img: blog9},
  { id: 6, img: blog8 },
  { id: 2, img: blog7 },
  { id: 3, img: blog6 },
  { id: 4, img: blog5 },
];


const kitchenBenefits = [
  "Cost Effective Installation",
  "Space Management",
  "Easy Maintenance",
  "Eye Catching Looks",
  "Variation and Customization",
  "Remodeling and Flexibility"
];

export default function Blog() {
  return (
    <section className="bg-[#EBF3FB] w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d1b2a] mb-4">
            Architecture & Design <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-[#4a5568] text-base md:text-lg max-w-3xl mx-auto">
            Exploring the evolution of architectural practices, innovative design approaches, and the transformation of spaces that define modern living.
          </p>
        </div>

        {/* BLOG SECTIONS - ALTERNATING LAYOUT */}
        <div className="space-y-20">
          
          {blogContent.map((blog, idx) => (
            <div key={blog.id}>
              {/* ALTERNATING GRID */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${
                idx % 2 === 1 ? 'lg:grid-cols-2 lg:auto-cols-fr' : ''
              }`}>
                
                {/* ODD: Content Left, Image Right */}
                {idx % 2 === 0 ? (
                  <>
                    {/* LEFT - CONTENT */}
                    <div className="flex flex-col gap-6">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0d1b2a] leading-tight">
                        {blog.title}
                      </h2>

                      {blog.sections.map((section, sidx) => (
                        <div key={sidx} className="flex flex-col gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-[#1a3d6b]">
                            {section.heading}
                          </h3>
                          <p className="text-[#4a5568] leading-relaxed text-sm md:text-base">
                            {section.content}
                          </p>
                        </div>
                      ))}

                      {/* SPECIAL FOR KITCHEN SECTION */}
                      {blog.id === 3 && (
                        <div className="mt-6 pt-6 border-t-2 border-gray-300">
                          <h3 className="text-lg md:text-xl font-bold text-[#0d1b2a] mb-4">
                            Benefits of Modern Modular Kitchens
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {kitchenBenefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                <span className="text-[#4a5568] font-semibold text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RIGHT - IMAGE */}
                    <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* LEFT - IMAGE */}
                    <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d1b2a] leading-tight">
                        {blog.title}
                      </h2>

                      {blog.sections.map((section, sidx) => (
                        <div key={sidx} className="flex flex-col gap-2">
                          <h3 className="text-lg md:text-xl font-bold text-[#1a3d6b]">
                            {section.heading}
                          </h3>
                          <p className="text-[#4a5568] leading-relaxed text-sm md:text-base">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* DIVIDER */}
              {idx < blogContent.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12" />
              )}
            </div>
          ))}
        </div>

      
        {/* ===== INTERIOR DESIGN GALLERY SECTION ===== */}
       <div className="mt-24">
  {/* Heading */}
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0d1b2a] mb-3">
      Interior Design <span className="text-blue-600">Gallery</span>
    </h2>
    <p className="text-[#4a5568] text-base md:text-lg max-w-3xl">
      Explore our stunning interior design projects and transformations across residential and commercial spaces.
    </p>
  </div>

  {/* GRID 2 PER ROW */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {galleryData.map((item) => (
      <div
        key={item.id}
        className="relative w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Text */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-white font-bold text-xl">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</div>
          {/* BOTTOM CTA */}
       <div className="mt-20 bg-[#dbeafe] rounded-3xl p-8 md:p-12 text-center">
  <h3 className="text-2xl md:text-3xl font-black text-[#0d1b2a] mb-3">
    Ready to Transform Your Space?
  </h3>

  <p className="text-[#4a5568] text-base md:text-lg mb-6 max-w-2xl mx-auto">
    Let our architectural expertise create spaces that inspire, function beautifully, and stand the test of time.
  </p>

  <button className="inline-flex items-center gap-2 bg-[#0d1b2a] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#1a1a1a] transition-all text-sm md:text-base">
    Start Your Project
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
  </button>
</div>

      </div>
    </section>
  );
}