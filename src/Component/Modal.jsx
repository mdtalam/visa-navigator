const Modal = ({ onClose, title, children }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-full h-[90vh] overflow-y-auto max-w-4xl rounded-lg p-6"> {/* Adjusted height and added scroll */}
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="text-gray-600 text-lg hover:text-red-600">
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  