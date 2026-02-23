import React, { useState } from "react";
import { LogOut, AlertCircle, X } from "lucide-react";

const Popup = () => {
  const [showModal, setShowModal] = useState(false);

  const logOutUser = () => {
    localStorage.removeItem("LoggedInUser");
    window.location.reload();
  };

  return (
    <>
      {/* Logout Button */}
      <button
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex gap-2 text-red-500 border-2 hover:text-white border-red-300 py-2 font-medium rounded-md hover:bg-red-600/90 px-4 transition-all hover:border-transparent hover:shadow-md active:scale-98"
      >
        <span className="hidden md:block">Log Out</span>
        <LogOut />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          {/* Modal Card */}
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition-all">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="text-red-600" size={32} />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Log Out?
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-8">
                Are you sure you want to log out of your account?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Confirm Logout */}
                <button
                  onClick={logOutUser}
                  className="flex-1 flex items-center justify-center gap-2 text-white bg-red-600 py-3 px-6 rounded-lg font-medium hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-600/20"
                >
                  <LogOut size={18} />
                  Log Out
                </button>

                {/* Cancel */}
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 active:scale-95 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
