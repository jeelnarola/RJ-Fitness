import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../Store/DirectapiCall";

export default  function SendLinkCard({ data, onSend }) {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const openModal = () => modalRef.current.showModal();
  const closeModal = () => modalRef.current.close();

  const handleSend = async() => {
    const value = inputRef.current.value.trim();
    console.log(value);
    
    if (!value) {
      alert("Please enter an email or mobile number");
      return;
    }
    // onSend && onSend(value);
    const data= {
      email: value,
      link:'http://localhost:5173/add-trainer'
    }
    const postRes = await postAPI("/send/link", data);
    console.log("Link sent response:", postRes);
    closeModal();
  };

  const handleButtonClick = () => {
    if (data.action === "modal") openModal();
    else if (data.action === "route") navigate(data.route);
  };

  return (
    <div className="card bg-white w-96 shadow-sm rounded-2xl border border-gray-200 hover:shadow-md transition-all p-0">
      <div className="card-body">

        {/* Header */}
        <div className="flex justify-between items-start mb-4">

          {/* Icon + Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600 text-2xl flex items-center justify-center">
              {data.icon}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {data.title}
              </h2>
              <p className="text-sm text-gray-500 -mt-1">
                {data.smallDesc}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleButtonClick}
            className="btn btn-primary btn-sm px-4 shadow-sm"
          >
            {data.btnTitel}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {data.desc || data.message}
        </p>
      </div>

      {/* Modal */}
      {data.action === "modal" && (
        <dialog ref={modalRef} className="modal">
          <div className="modal-box rounded-2xl relative">

            {/* Close */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="font-bold text-lg text-indigo-600 mb-2">
              {data.title}
            </h3>

            {/* Message */}
            <p className="py-2 text-gray-700">{data.message}</p>

            {/* Input */}
            <div className="mt-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter email or mobile number"
                className="input input-bordered w-full mb-3"
              />

              <button
                className="btn btn-primary w-full"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>

          {/* Backdrop Close */}
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
