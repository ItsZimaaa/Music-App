import PlayRandom from '../Components/PlayRandom'
// import Player from '../Components/Player'
import { IoIosArrowBack, IoIosArrowForward, IoMdPause, IoMdPlay } from 'react-icons/io'
import song from '../data/Data'
import Button from '../Components/Button';
import { FaRegHeart } from 'react-icons/fa';
import Player from '../Components/Player';

export default function Home() {

    return (
        <section className='w-full h-screen'>
            <div className='flex flex-col gap-2'>
                <section className='flex flex-col'>
                    <div className='flex items-center gap-4 text-2xl'>
                        <span className='bg-black-100/30 text-white rounded-3xl p-1 hover:bg-green-100 hover:text-black-100'>
                            <IoIosArrowBack />
                        </span>
                        <span className='bg-black-100/30 text-white rounded-3xl p-1 hover:bg-green-100 hover:text-black-100'>
                            <IoIosArrowForward />
                        </span>
                    </div>

                    <div>
                        <p className='text-xl text-black-90'>What's hot</p>
                        <h1 className='text-5xl text-black-100'>Trending</h1>
                    </div>
                </section>
                <PlayRandom />

                <section className="flex flex-col gap-2 mt-2 text-sm h-[300px] overflow-y-auto p-2 relative">

                    <div className="grid grid-cols-3 px-4 py-1 text-black-100 font-bold md:text-2xl text-lg sticky z-10 top-0 bg-white/70 backdrop-blur-md w-full">
                        {/* <div className="absolute inset-0 bg-black-100/50" /> */}
                        <div className='flex items-center gap-6'>
                            <span>#</span>
                            <span>Title</span>
                        </div>
                        <span>Artist</span>
                        <span className="text-right">Actions</span>
                    </div>


                    <div>
                        {song.map((item, index) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-3 items-center md:text-sm text-[14px] px-4 py-0.5 rounded-3xl backdrop-blur-xl hover:bg-black/80 hover:text-white transition-colors">
                                <div className="flex items-center gap-6">
                                    <span className="text-black-90">{index + 1}</span>
                                    <span className="font-medium">{item.title}</span>
                                </div>

                                <span className="text-black-90">{item.artist}</span>

                                <div className="flex justify-end items-center gap-2">
                                    <Button>
                                        <IoMdPause />
                                    </Button>
                                    <Button>
                                        <IoMdPlay />
                                    </Button>
                                    <Button>
                                        <FaRegHeart />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div>
                    <Player />
                </div>
            </div >
        </section >
    )
}
