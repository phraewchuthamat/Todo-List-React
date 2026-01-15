export const RetroHeart = ({ className = '' }) => {
    return (
        <div
            className={`inline-block filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] ${className}`}
        >
            <img
                src="../../public//image/heart-pixel.png"
                alt="Pixel Heart"
                className="w-12 h-12 animate-heartbeat object-contain"
                draggable="false"
            />
        </div>
    )
}

export default RetroHeart
