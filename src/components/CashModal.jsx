import Modal from "react-modal";

function CashModal({ isOpen, onRequestClose, onConfirm, selectedNumbers, amount }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-blue-400 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-20 font-sans"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <h2 className="text-2xl font-bold text-yellow-300 mb-4">Your Lottery Ticket!</h2>
      <p className="text-white mb-2">
        Numbers: {selectedNumbers.sort((a, b) => a - b).join(", ") || "None"}
      </p>
      <p className="text-white mb-6">Amount: ${amount}</p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-black text-yellow-300 rounded-md hover:bg-gray-800 hover:text-yellow-200 transition-colors"
        >
          Confirm
        </button>
        <button
          onClick={onRequestClose}
          className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}

export default CashModal;