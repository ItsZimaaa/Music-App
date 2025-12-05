import React from "react";
import { FaBackward, FaForward, FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

export default function Player() {
    return (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-[#1a1a1a] text-white px-6 flex items-center justify-between z-50">

            {/* Left Section: Song Info */}
            <div className="flex items-center gap-3">
                <img
                    src="https://via.placeholder.com/50"
                    alt="cover"
                    className="w-12 h-12 rounded"
                />
                <div className="leading-tight">
                    <h1 className="text-sm font-semibold">Song Title</h1>
                    <p className="text-xs text-gray-400">Artist Name</p>
                </div>
            </div>

            {/* Center Section: Controls */}
            <div className="flex flex-col items-center gap-1">
                {/* Controls */}
                <div className="flex items-center gap-6 text-xl">
                    <button><FaBackward /></button>
                    <button className="text-3xl"><FaPlay /></button>
                    <button><FaForward /></button>
                </div>

                {/* Progress Bar */}
                <div className="w-[300px] h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[40%]"></div>
                </div>
            </div>

            {/* Volume Section */}
            <div className="flex items-center gap-3 w-32">
                <FaVolumeUp />
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[60%]"></div>
                </div>
            </div>

        </div>
    );
}
