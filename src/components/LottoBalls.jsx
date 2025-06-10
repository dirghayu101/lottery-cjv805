function LottoBalls() {
  return (
    <div className="relative w-40 h-24">
        <img
            src="/lotto_ball.webp"
            alt="Lotto ball 6"
            className="absolute w-24 h-auto left-0 top-0 rotate-[-10deg] z-10"
        />
        <img
            src="/lotto_ball_2.webp"
            alt="Lotto ball 45"
            className="absolute w-24 h-auto left-14 top-1 rotate-[20deg] z-0"
        />
    </div>
  )
}
export default LottoBalls