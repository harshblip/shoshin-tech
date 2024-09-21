import { AlignJustify, Bell, ChevronDown, Mail, Search } from "lucide-react";

export default function Navbar(props) {
    const { openSideNav } = props
    return (
        <div className="flex justify-between p-4 mt-10">
            <div className="flex">
                <div className="sm:bg-white sm:p-2 sm:border border-gray-300 sm:border-r-0 rounded-md rounded-r-none flex space-x-2 ml-4">
                    <AlignJustify
                        className="w-5 text-gray-400 sm:hidden"
                        onClick={openSideNav}
                    />
                    <Search
                        className="w-4 text-gray-400 sm:-ml-4"
                    />
                </div>
                <input
                    placeholder="Search"
                    className="w-44 p-2 text-gray-400 font-poppins rounded-md text-sm border border-gray-300 border-l-0 outline-none rounded-l-none hidden sm:flex"
                />
            </div>
            <div className="flex items-center space-x-4">
                <Bell
                    className="w-5 text-gray-400"
                />
                <Mail
                    className="w-5 text-gray-400"
                />
                <div className="flex space-x-2 ml-2">
                    <img
                        src='/p1.jpg'
                        className="w-6 h-6 rounded-full"
                        alt="profile-image"
                    />
                    <button className="font-poppins text-gray-600"> Admirra John </button>
                    <ChevronDown
                        className="w-5 text-gray-400"
                    />
                </div>
            </div>
        </div>
    )
}