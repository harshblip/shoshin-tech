import { Boxes, CalendarRange, Component, Headset, Settings, UserPlus, UsersRoundIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Sidebar({ open, onClose }) {

    const [check, setCheck] = useState([]);

    useEffect(() => {
        setCheck(Array(7).fill(false));
    }, [])

    function clicked(i) {
        setCheck(Array(7).fill(false));
        setCheck(prevCheck => ({
            ...prevCheck,
            [i]: prevCheck[i] === false ? true : false
        }))
    }

    return (
        <div className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all md:!z-50 lg:!z-50 xl:!z-0 ${open ? "translate-x-0" : "-translate-x-96"
            }`}>
            <span
                className="absolute top-4 right-4 block cursor-pointer xl:hidden text-gray-600"
                onClick={onClose}
            >
                <X />
            </span>
            <div className={`mx-[56px] mt-[50px] flex items-center`}>
                <img
                    src='/logo.png'
                    alt='logo-image'
                />
                <div className="mt-1 ml-2 font-poppins text-[26px] font-bold text-sky-700 ">
                    Vasitum
                </div>
            </div>
            <div class="mt-[44px] mb-7 h-px bg-gray-300 " />
            <div className="mx-[32px]">
                <p className="text-xs text-gray-400"> MAIN MENU </p>
                <ul className="mb-auto flex flex-col pt-4 font-poppins text-gray-400 space-y-2">
                    <button
                        className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[0] ? `bg-[#f25c54] text-white` : ``} `}
                        onClick={() => clicked(0)}
                    >
                        <div className="flex items-center space-x-4 p-2 ">
                            <Component
                                className="w-5"
                            />
                            <p className="text-xs font-semibold "> Dashboard </p>
                        </div>
                    </button>
                    <button
                        className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[1] ? `bg-[#f25c54] text-white` : ``} `}
                        onClick={() => clicked(1)}
                    >
                        <div className="flex items-center space-x-4 p-2">
                            <UserPlus
                                className="w-5"
                            />
                            <p className="text-xs font-semibold "> Recruitment </p>
                        </div>
                    </button>
                    <button
                        className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[2] ? `bg-[#f25c54] text-white` : ``} `}
                        onClick={() => clicked(2)}
                    >
                        <div className="flex items-center space-x-4 p-2">
                            <CalendarRange
                                className="w-5"
                            />
                            <p className="text-xs font-semibold "> Schedule </p>
                        </div>
                    </button>
                    <button
                        className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[3] ? `bg-[#f25c54] text-white` : ``} `}
                        onClick={() => clicked(3)}
                    >
                        <div className="flex items-center space-x-4 p-2">
                            <UsersRoundIcon
                                className="w-5"
                            />
                            <p className="text-xs font-semibold "> Employee </p>
                        </div>
                    </button>
                    <button
                        className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[4] ? `bg-[#f25c54] text-white` : ``} `}
                        onClick={() => clicked(4)}
                    >
                        <div className="flex items-center space-x-4 p-2">
                            <Boxes
                                className="w-5"
                            />
                            <p className="text-xs font-semibold "> Department </p>
                        </div>
                    </button>
                </ul>
                <div className="mt-4">
                    <p className="text-xs text-gray-400"> OTHER </p>
                    <ul className="mb-auto flex flex-col pt-4 font-poppins text-gray-400 space-y-2">
                        <button
                            className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[5] ? `bg-[#f25c54] text-white` : ``} `}
                            onClick={() => clicked(5)}
                        >
                            <div className="flex items-center space-x-4 p-2 ">
                                <Headset
                                    className="w-5"
                                />
                                <p className="text-xs font-semibold "> Support </p>
                            </div>
                        </button>
                        <button
                            className={`hover:text-white font-semibold hover:bg-[#f25c54] transition-all rounded-md ${check[6] ? `bg-[#f25c54] text-white` : ``} `}
                            onClick={() => clicked(6)}
                        >
                            <div className="flex items-center space-x-4 p-2">
                                <Settings
                                    className="w-5"
                                />
                                <p className="text-xs font-semibold "> Settings </p>
                            </div>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}