function SelectionDisplay({ amount, selectedNumbers }) {
    return (
        <div className="flex flex-col justify-between w-1/4 p-4 bg-gradient-to-b from-orange-400 to-orange-200 rounded-lg border-4 border-blue-400 h-[80vh]">
            <div>
                <h2 className="text-black font-bold text-lg mb-2">Numbers Selected :

                </h2>
                {selectedNumbers.map((num, index) => (
                    <div key={num} className="text-black font-semibold">Mark {index + 1}:     {num}</div>
                ))}
            </div>
            <div className="text-black font-extrabold text-xl mt-4 text-right">
                Total: ${amount}.00
            </div>
        </div>
    )
}
export default SelectionDisplay
