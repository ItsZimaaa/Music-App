import PlayRandom from '../Components/PlayRandom'
import Player from '../Components/Player'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import song from '../data/Data'

export default function Home() {
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


                <div className='flex flex-col gap-4 mt-10'>
                    {/* {
                        song.map((item) => (
                            <div key={item.id} className='grid grid-cols-4 items-center justify-between gap-2 bg-black-100/20 px-4 py-2 rounded-3xl backdrop-blur-3xl hover:bg-green-100 transition-colors'>
                                <div className='flex items-center gap-1'>
                                    <img className='w-10 rounded-3xl' src="https://yt3.googleusercontent.com/Rd5KtJON6a9EqGv3gcPVhzBvIuNICq0vTVVTLOrGjghvw9UxQAX15uV7IS7TLon5RDciO4muWA=s900-c-k-c0x00ffffff-no-rj" />
                                    <h1>{item.title}</h1>
                                </div>
                                <p>{item.artist}</p>
                                <audio src={item.audio}></audio>
                            </div>
                        ))
                    } */}
                    <table>
                        <thead>
                            <th>Image</th>
                            <th>Trek</th>
                            <th>Artist</th>
                        </thead>
                        {
                            song.map((item) => (
                                <tbody key={item.id}>
                                    <tb>image</tb>
                                    <tb>{item.title}</tb>
                                    <tb>{item.artist}</tb>
                                </tbody>
                            ))
                        }
                    </table>
                </div>

            </div>
        </section>
    )
}
