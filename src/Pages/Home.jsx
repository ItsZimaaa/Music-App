import PlayRandom from '../Components/PlayRandom'
// import Player from '../Components/Player'
import { IoIosArrowBack, IoIosArrowForward, IoMdPlay } from 'react-icons/io'
import song from '../data/Data'
import { useEffect, useRef, useState } from 'react';
import Button from '../Components/Button';

export default function Home() {
    const audioRef = useRef(null);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        if (audioRef.current && currentSong) {
            audioRef.current.src = currentSong.audio;
            audioRef.current.play();
        }
    }, [currentSong]);

    return (
        <section className=''>
            <div className='px-10 pt-10 flex flex-col gap-2'>
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

                <PlayRandom />


                <div className="flex flex-col gap-4 mt-10">
                    <audio ref={audioRef} />

                    {song.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-3 items-center justify-between gap-2 bg-black-100/20 px-4 py-2 rounded-3xl backdrop-blur-3xl hover:bg-black/80 hover:text-white transition-colors"
                        >
                            <div className="flex items-center gap-1">
                                <h1>{item.title}</h1>
                            </div>

                            <p>{item.artist}</p>

                            {/* <button onClick={() => setCurrentSong(item)}> Play </button> */}
                            <div className='flex justify-end items-center'>
                                <Button>
                                    <IoMdPlay onClick={() => setCurrentSong(item)} />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    )
}
