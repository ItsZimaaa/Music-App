import React from 'react'
import { IoHeartOutline, IoShuffleOutline } from 'react-icons/io5'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { VscDebugRestart } from 'react-icons/vsc'
import { MdOutlineFileDownload } from 'react-icons/md'
import { IoMdPlay } from 'react-icons/io'
import Input from './Input'

export default function Player() {
    return (
        <div
            className="
                w-full h-20 bg-black-80 backdrop-blur-xl rounded-3xl grid grid-cols-3 items-center px-6 transition-all duration-300">

            <div className='flex items-center gap-4 text-black-100'>

                <button className='hover:text-green-100 active:scale-90 transition-all duration-200'>
                    <IoHeartOutline size={22} />
                </button>

                <button className='hover:text-green-100 active:scale-90 transition-all duration-200'>
                    <MdOutlineFileDownload size={22} />
                </button>

            </div>

            <div className='flex items-center justify-center gap-6 text-black-100'>

                <button className='hover:text-green-100 hover:scale-110 active:scale-90 transition-all duration-200'>
                    <TbPlayerTrackPrevFilled size={26} />
                </button>

                <button
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-black-100 text-white shadow-lg hover:bg-green-100 hover:text-black-100 hover:scale-125 active:scale-95 transition-all duration-300 ease-out'>
                    <IoMdPlay size={24} />
                </button>

                <button className='hover:text-green-100 hover:scale-110 active:scale-90 transition-all duration-200'>
                    <TbPlayerTrackNextFilled size={26} />
                </button>

            </div>

            <div className='flex items-center justify-end gap-5 text-black-100'>

                <button className='hover:text-green-100 hover:scale-110 active:scale-90 transition-all duration-200'>
                    <IoShuffleOutline size={22} />
                </button>

                <button className='hover:text-green-100 hover:scale-110 active:scale-90 transition-all duration-200'>
                    <VscDebugRestart size={22} />
                </button>

                <div className='w-32 opacity-90 hover:opacity-100 transition-all duration-200'>
                    <Input />
                </div>
            </div>
        </div>
    )
}
