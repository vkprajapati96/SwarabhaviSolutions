import { useParams } from "react-router-dom";
import { data } from "../data";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = data.find((item) => item.id === parseInt(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="p-6 md:p-12 bg-[#EBF3FB] min-h-screen">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">
        {project.title}
      </h1>

      {/* Location + Capacity */}
      <p className="text-gray-600 mt-2">
        {project.location} | {project.capacity}
      </p>

      {/* Images */}
      {project.images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="project"
              className="w-full h-64 md:h-88 object-cover rounded-xl"
            />
          ))}
        </div>
      )}

      {/* FULL DESCRIPTION (Sona Residency + others) */}
      {project.fullDesc && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Project Details</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {project.fullDesc}
          </p>
        </div>
      )}

      {/* ABOUT SECTION */}
      {project.about && (
        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">About</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {project.about}
            </p>
          </div>

          {project.aboutImg && (
            <img
              src={project.aboutImg}
              className="rounded-xl w-full h-76 object-cover"
              alt="about"
            />
          )}
        </div>
      )}

      {/* AMENITIES */}
      {project.amenities?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Amenities</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.amenities.map((item, i) => (
              <div key={i} className="bg-white p-3 rounded-lg shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NEARBY IMAGES */}
      {project.nearImages?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Nearby Locations</h2>

          <div className="flex gap-4 overflow-x-auto">
            {project.nearImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-40 w-60 object-cover rounded-xl flex-shrink-0"
                alt="nearby"
              />
            ))}
          </div>
        </div>
      )}

      {/* PAYMENT */}
      {project.payment && (
        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Payment Plan</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {project.payment}
            </p>
          </div>

          {project.paymentImg && (
            <img
              src={project.paymentImg}
              className="rounded-xl w-full h-[500px] object-cover"
              alt="payment"
            />
          )}
        </div>
      )}

      {/* FALLBACK */}
      {!project.fullDesc && !project.about && (
        <p className="mt-6 text-gray-700 whitespace-pre-line">
          No details available for this project.
        </p>
      )}

    </div>
  );
}