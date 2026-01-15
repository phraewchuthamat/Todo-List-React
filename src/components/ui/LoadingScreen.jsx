import { RetroHeart } from '../RetroHeart'
export const LoadingScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center h-64 gap-6 animate-in fade-in duration-500">
            <div className="relative ml-4">
                <RetroHeart className="w-24 h-24 animate-heartbeat" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full blur-sm animate-pulse" />
            </div>

            <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2">
                <h2 className="text-xl font-bold tracking-widest animate-pulse">
                    LOADING DATA...
                </h2>
            </div>
        </div>
    )
}
