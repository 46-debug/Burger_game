"use client"
import Link from "next/link"
import { useState } from "react"

const Market = () => {

    const [total, setTotal] = useState(0);

    return (
        <div className="market bg-center flex flex-col items-center min-h-[100dvh]">
            <div className="cart w-full flex items-center justify-center border-b-2 text-white text-4xl font-semibold h-20 shadow-[0px_4px_3.299999952316284px_0px_rgba(0,0,0,0.25)]">
                <h2 className="cart_text">MARKET</h2>
                <Link href="/game" className="w-9 h-9 absolute left-5 bg-white cursor-pointer flex items-center justify-center border-2 border-black rounded-xl">
                    <img className="rotate-180 w-6" src="aero.svg" alt="" />
                </Link>
            </div>

            <div className="sm:w-1/2 flex flex-col items-center w-full gap-10 sm:h-[] h-[530px] overflow-y-scroll">
                <div className="px-5 py-2 flex items-center flex-col gap-2">
                    <h3 className="text-start w-full font-semibold text-[#805252] text-2xl">Ingredients</h3>
                    <div className="grid grid-cols-4 gap-5">
                        <button onClick={()=>setTotal(total + 3)} className="bg-gradient-to-r from-amber-300 to-violet-300 relative border-3 hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[68px]" src="burger_top.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[49px]" src="onion.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[68px]" src="cheese.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[68px] rotate-90" src="cabbage.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:h-[48px]" src="ketchup_yellow.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">5</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[84px]" src="burger_bottom.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[50px]" src="tomato.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">4</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[45px]" src="patties.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">4</button></button>
                        <button className="bg-gradient-to-r from-amber-300 to-violet-300 border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:h-[48px]" src="ketchup_red.svg" alt="" /><button className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">5</button></button>
                    </div>
                </div>

                <div className="px-5 py-2 flex items-center flex-col gap-2">
                    <h3 className="text-start w-full font-semibold text-[#805252] text-2xl">Interiors</h3>
                    <div className="grid grid-cols-4 gap-5">
                        <span className="bg-[url(/wall_1.jpg)] bg-center bg-cover relative border-3 hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</span></span>
                        <span className="bg-[url(/wall_2.jpg)] bg-center bg-cover border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</span></span>
                        <span className="bg-[url(/wall_3.jpg)] bg-center bg-cover border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</span></span>
                        <span className="bg-[url(/wall_4.jpg)] bg-center bg-cover border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</span></span>
                        <span className="bg-white border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:h-[48px]" src="window_1.svg" alt="" /><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">5</span></span>
                        <span className="bg-white border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[84px]" src="window_2.svg" alt="" /><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">3</span></span>
                        <span className="bg-white border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[50px]" src="window_3.svg" alt="" /><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">4</span></span>
                        <span className="bg-white border-3 relative hover:border-neutral-600 rounded-[10px] cursor-pointer border-neutral-500 flex items-center justify-center h-20 w-20 p-2"><img className="sm:w-[45px]" src="window_4.svg" alt="" /><span className="tag absolute bg-amber-500 text-xl w-7 flex items-center justify-center text-black font-semibold border-l border-t border-amber-600 right-0 bottom-0">4</span></span>
                    </div>
                </div>
            </div>

            <div className="absolute flex w-full items-center justify-center h-40 cart border-t-2 text-white bottom-0 shadow-[0px_-4px_3.299999952316284px_0px_rgba(0,0,0,0.25)]">
                <span className="flex flex-col absolute top-15">
                    <h3 className="text-2xl font-semibold text-black">Total: {total}</h3>
                    <button className="text-4xl cursor-pointer hover:text-green-700 text-green-500">pay</button>
                </span>
                <img src="bag.svg" alt="" />
            </div>
        </div>
    )
}

export default Market