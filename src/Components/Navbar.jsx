import { CiMicrophoneOn } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { IoAlbumsOutline, IoCompassOutline, IoHomeOutline } from "react-icons/io5";
import { LuMusic } from "react-icons/lu";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import Player from "./Player.jsx";
import { Link } from "react-router-dom";

export default function App() {

    const NavbarData = {
        Menu: {
            label: "Menu",
            items: [
                {
                    title: "Home",
                    path: "/",
                    icon: <IoHomeOutline />,
                },
                {
                    title: "Discover",
                    path: "/Discover",
                    icon: <IoCompassOutline />,
                },
                {
                    title: "Browse",
                    path: "/Browse",
                    icon: <RiCheckboxMultipleBlankLine />,
                },
                {
                    title: "Podcasts",
                    path: "/Podcasts",
                    icon: <CiMicrophoneOn />,
                },
                {
                    title: "Radio",
                    path: "/Radio",
                    icon: <IoIosRadio />,
                },
            ],
        },

        Library: {
            label: "Library",
            items: [
                {
                    title: "Albums",
                    path: "/Albums",
                    icon: <IoAlbumsOutline />,
                },
                {
                    title: "Songs",
                    path: "/Songs",
                    icon: <LuMusic />,
                },
                {
                    title: "Artists",
                    path: "/Artists",
                    icon: <CiMicrophoneOn />,
                },
            ],
        },
    };

    return (
        <section className="fixed flex flex-col justify-between h-screen px-2">
            <div className="">

                <h1 className="flex gap-1 items-center text-4xl text-black-100 my-4"><FaApple />Music</h1>

                <div className="flex flex-col gap-2">
                    <li className="text-xs text-black-90 ">{NavbarData.Menu.label}</li>
                    <ul>
                        {NavbarData.Menu.items.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 cursor-pointer">
                                <Link to={item.path} className="flex items-center gap-2">
                                    {item.icon}
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <li className="text-xs text-black-90">{NavbarData.Library.label}</li>
                    {NavbarData.Library.items.map((item, e) => (
                        <ul key={e}>
                            <li className="flex items-center gap-2 cursor-pointer">{item.icon}{item.title}</li>
                        </ul>
                    ))}
                </div>
            </div>

        </section>
    )
}
