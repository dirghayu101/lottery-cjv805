function AmountButtons({ updateAmount }) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {['$1', '$5', '$10', '$20'].map(amount => (
                <button
                    key={amount}
                    className="w-20 h-20 rounded-full bg-gradient-to-b from-blue-400 to-blue-700 text-white text-xl font-bold  border-4 border-white shadow-md hover:from-blue-500 hover:to-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out"
                    onClick={() => updateAmount(parseInt(amount.slice(1)))}
                >
                    {amount}
                </button>
            ))}
        </div>
    )
}
export default AmountButtons