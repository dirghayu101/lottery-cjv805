function ActionButtons({randomSelect, openModal, resetSelection}) {
    return (
        <div className="flex gap-4 mt-4">
            <button className="bg-yellow-300 px-6 py-3 text-black font-bold rounded-md shadow-inner border-2 border-black 
             hover:bg-yellow-400 hover:shadow-lg hover:scale-105 hover:text-white transition-all duration-200 ease-in-out hover:border-white"
            onClick={openModal}>
                CASH
            </button>
            <button className="bg-yellow-300 px-6 py-3 text-black font-bold rounded-md shadow-inner border-2 border-black 
             hover:bg-yellow-400 hover:shadow-lg hover:scale-105 hover:text-white transition-all duration-200 ease-in-out hover:border-white"
            onClick={resetSelection}>
                CLEAR
            </button>
            <button className="bg-yellow-300 px-6 py-3 text-black font-bold rounded-md shadow-inner border-2 border-black 
             hover:bg-yellow-400 hover:shadow-lg hover:scale-105 hover:text-white transition-all duration-200 ease-in-out hover:border-white"
            onClick={randomSelect}>
                RANDOM
            </button>
        </div>
    )
}
export default ActionButtons