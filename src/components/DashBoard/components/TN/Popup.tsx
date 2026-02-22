import React, { useState } from "react";
import { LogOut } from "lucide-react";

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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-gray-100 w-[350px] rounded-md flex flex-col items-center justify-center gap-6 h-60 p-6">

            <p className="text-2xl font-bold text-gray-900">
              Are you sure?
            </p>

            <div className="flex gap-4">
              {/* Confirm Logout */}
              <button
                onClick={logOutUser}
                className="flex gap-2 text-white bg-red-500 py-2 px-4 rounded-md hover:bg-red-600"
              >
                Log Out <LogOut size={18} />
              </button>

              {/* Cancel */}
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 border rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Popup;