import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";

export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${item.id}`)}
      className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={item.images?.[0] || item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-[#0d1b2a]">
          {item.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <HiLocationMarker className="text-[#2176B8]" />
          {item.location}
        </div>

        {/* CTA */}
        <p className="mt-4 text-sm text-[#2176B8] font-medium group-hover:underline">
          Click to view more →
        </p>
      </div>
    </div>
  );
}