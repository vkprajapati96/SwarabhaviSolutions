import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Card({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${item.id}`)}
      className="min-w-[280px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* View Button */}
        <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition">
          <span className="flex items-center gap-1 text-white text-sm font-semibold">
            View <HiArrowRight />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#0d1b2a] line-clamp-1">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {item.desc}
        </p>

        {/* Bottom line */}
        <div className="mt-4 w-12 h-[3px] bg-[#2176B8] rounded-full group-hover:w-20 transition-all"></div>
      </div>
    </div>
  );
}