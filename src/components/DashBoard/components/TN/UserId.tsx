import React from "react";
import { ChevronsRight ,User  ,Calendar , MapPin} from "lucide-react";

const UserId = () => {
  return (
    <>
      <div className="bg-white mb-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer">
        {/* Hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover:from-blue-50/30 group-hover:via-purple-50/30 group-hover:to-pink-50/30 transition-all duration-500 pointer-events-none" />

        <div className="relative flex justify-between items-center p-6">
          {/* Left Section - Avatar and Info */}
          <div className="flex items-center gap-6">
            {/* User Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gray-400" />
                <p className="text-sm text-gray-500 font-medium">Name</p>
              </div>
              <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Hitesh Suthar
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600">Sawali</span>
                </div>

                {/* Joined Date */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Joined July 1, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Arrow Button */}
          <div className="flex-shrink-0">
            <div className="h-14 w-14 rounded-full bg-gray-50 group-hover:bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <ChevronsRight
                size={28}
                className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
      </div>
    </>
  );
};

export default UserId;
