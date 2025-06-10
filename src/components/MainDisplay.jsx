import LottoBalls from "./LottoBalls";
import NumberGrid from "./NumberGrid";
import ActionButtons from "./ActionButtons";
import AmountButtons from "./AmountButtons";
import SelectionDisplay from "./SelectionDisplay";
import { useState } from "react";
import Modal from "react-modal";
import CashModal from "./CashModal";

Modal.setAppElement("#root");

const MainDisplay = () => {

  const [amount, setAmount] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to update the amount based on button clicks
  const updateAmount = (inc) => {  
    if(selectedNumbers.length < 5 ) {
      return alert("Please select 5 numbers before updating the amount.");
    }
    setAmount((prev) => prev + inc);
  }

  // Function to reset the selection
  const resetSelection = () => {
    setSelectedNumbers([]);
    setAmount(0);
  }

   // Function to open the modal
  const openModal = () => {
    if (selectedNumbers.length < 5 || amount === 0) {
      alert("Please select 5 numbers and an amount before proceeding.");
      return;
    }
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to confirm action in modal
  const confirmSelection = () => {
    // Example: Log or process the selection
    console.log("Confirmed:", { selectedNumbers, amount });
    closeModal();
    resetSelection();
  };

  // Function to randomly select 5 unique numbers from 1 to 20
  const randomSelect = () => {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setSelectedNumbers(randomNumbers);
  }

  // Function to update selected numbers
  const updateSelectedNumbers = (number) => {
    if(selectedNumbers.length >= 5 && !selectedNumbers.includes(number)) {
      alert("You can only select up to 5 numbers.");
      return; 
    }
    setSelectedNumbers((prev) => {
      if (prev.includes(number)) {
        return prev.filter((n) => n !== number);
      } else {
        return [...prev, number];
      }
    });
  }

  return (
    <>  
    <div className="flex w-full min-h-[90vh] bg-yellow-300 p-4 gap-4 font-sans">
      {/* Left Column */}
      <div className="flex flex-col items-center h-full justify-between  w-1/4 gap-6">
        {/* Lotto balls */}
        <div>
            <LottoBalls/>
        </div>
        {/* Amount buttons */}
        <div>
        <AmountButtons 
          updateAmount={updateAmount}
        />
        </div>
      </div>

      {/* Middle Column */}
      <div className="w-2/4 bg-blue-400 p-4 h-fit rounded-xl shadow-inner flex flex-col items-center gap-4 ">
        {/* Grid of numbers */}
       <NumberGrid 
        selectedNumbers={selectedNumbers} 
        updateSelectedNumbers={updateSelectedNumbers}
       />

        {/* Action buttons */}
          <ActionButtons
            randomSelect={randomSelect}
            resetSelection={resetSelection}
            openModal={openModal}
          />
      </div>

      {/* Right Column */}
      <SelectionDisplay
        amount={amount}
        selectedNumbers={selectedNumbers}
      />
    </div>
     <CashModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={confirmSelection}
        selectedNumbers={selectedNumbers}
        amount={amount}
      />
    </>
  );
};

export default MainDisplay;
