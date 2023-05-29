import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

export default function Sidebar () {

    return (
        <div className="w-[278px] h-[705px] flex flex-col bg-black text-white text-[13px] pt-[24px] px-6">
            
            <Link to="/">
                <div className="w-[131px] h-[40px] mb-[18px]">
                    <Icon name="logo"/>
                </div>
            </Link>
            

            <div className="flex flex-col gap-y-4 font-semibold mt-5 mb-12">

                <NavLink to="/" className="focus:opacity-100">
                    <div className="flex gap-x-4 items-center opacity-70 hover:opacity-100 transition-all">
                        <Icon name="home"/>
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/search" className="focus:opacity-100">
                    <div className="flex gap-x-4 items-center opacity-70 hover:opacity-100 transition-all">
                        <Icon name="search"/>
                        <p>Search</p>
                    </div>
                </NavLink>
                <NavLink to="/library" className="focus:opacity-100">
                    <div className="flex gap-x-4 items-center opacity-70 hover:opacity-100 transition-all">
                        <Icon name="library"/>
                        <p>Your Library</p>
                    </div>
                </NavLink>
            </div>
            <div className="flex flex-col gap-y-4 font-semibold mb-4">
                <NavLink to="/create_playlist">
                    <div className="flex gap-x-4 items-center opacity-70 hover:opacity-100 transition-all">
                        <div className="w-6 h-6 p-1 bg-white rounded-sm flex items-center justify-center"><Icon name="create"/></div>
                        <p>Create Playlist</p>
                    </div>
                </NavLink>
                <NavLink to="/liked_songs" className="focus:opacity-100">
                    <div className="flex gap-x-4 items-center mb-1 opacity-70 hover:opacity-100 transition-all">
                        <div className="w-6 h-6 p-1.5 bg-[linear-gradient(135deg,#450af5,#c4efd9)] rounded-sm flex items-center justify-center">
                            <Icon name="heart"/>
                        </div>
                        <p>Liked Songs</p>
                    </div>
                </NavLink>
                <hr className="border-1 border-zinc-800"/>
            </div>

            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col font-medium gap-y-3">
                    <p className="opacity-70 hover:opacity-100 transition-all">Dramatic Violin</p>
                    <p className="opacity-70 hover:opacity-100 transition-all">The Last Of Us (HBO) Sound...</p>
                </div>
                <div className="flex gap-x-4 items-center font-semibold py-3 opacity-70 hover:opacity-100 transition-all">
                    <Icon name="download"/>
                    <p>Install App</p>
                </div>
            </div>
        </div>
    )
}