
function NumberGrid({selectedNumbers, updateSelectedNumbers} ) {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="grid grid-cols-5 gap-3">
      {numbers.map((number) => {
        const isSelected = selectedNumbers.includes(number);
        return (
          <button
            key={number}
            onClick={() => updateSelectedNumbers(number)}
            className={`w-14 h-14 flex items-center justify-center rounded-md text-yellow-300 text-2xl font-bold  shadow-md transition-transform duration-200 hover:bg-gray-800 hover:text-yellow-200 hover:scale-105 ${isSelected ? "border-4 border-red-500" : "border-2 border-gray-300"}`}
          >
            {number}
          </button>
        );
      })}
    </div>
    )
}
export default NumberGrid
