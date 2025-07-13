import Link from "next/link";

const Game = () => {

    // let oneStar = ""

    return (
        <div className="min-h-[100dvh] flex flex-col items-center relative">
            <img className="absolute sm:w-[251px] w-[200px] -z-1 top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2" src="window_1.svg" alt="" />
            <div className="flex sm:w-1/2 w-full items-center justify-between px-5 py-2">
                <div className="flex">
                    <img src="star.svg" alt="stars" />
                    <img src="star.svg" alt="stars" />
                </div>
                <div className="w-9 h-9 flex shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] items-center justify-center rounded-full bg-yellow-600 text-white font-semibold border-2 border-yellow-400">50</div>
            </div>

            <div className="sm:w-1/2 w-full flex items-start justify-between px-5">
                <div className="pt-3 border-2 flex bg-[#F1EEFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl">
                    <img src="burger_img.svg" alt="" />
                </div>
                <div className="flex gap-5">
                   <Link href="/market"><button className="p-2 border-2 rounded-xl cursor-pointer hover:bg-amber-400 bg-[#FFC701]"><img src="shop_icon.svg" alt="shop_icon" /></button></Link>
                    <button className="p-2 border-2 rounded-xl cursor-pointer hover:bg-[#baaaff] bg-[#C6B9FF]"><img src="setting_icon.svg" alt="setting_icon" /></button>
                </div>
            </div>

            <div className="w-full sm:w-1/2 absolute bottom-0">
                <div className="h-5 bg-gradient-to-b from-zinc-400 to-zinc-500"></div>
                <div className="grid grid-cols-5 gap-2 sm:mx-5 mx-2 p-1.5 bg-gradient-to-b from-zinc-400 to-zinc-500">
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[68px]" src="burger_top.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[49px]" src="onion.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[68px]" src="cheese.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[68px] rotate-90" src="cabbage.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:h-[48px]" src="ketchup_yellow.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[84px]" src="burger_bottom.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[50px]" src="tomato.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:w-[45px]" src="patties.svg" alt="" /></span>
                    <span className="bg-zinc-600 border-5 hover:border-zinc-700 cursor-pointer border-zinc-500 to-neutral-500 flex items-center justify-center h-16 p-2"><img className="sm:h-[48px]" src="ketchup_red.svg" alt="" /></span>
                    <span className="bg-green-600 border-5 hover:bg-green-700 cursor-pointer border-green-800 to-neutral-500 flex items-center justify-center h-16 p-2 font-semibold text-white">READY</span>
                </div>
            </div>
        </div>
    )
};

export default Game;