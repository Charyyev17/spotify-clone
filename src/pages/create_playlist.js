import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Icon from "../components/Icon";

export default function CreatePlaylist () {

    const [search, setSearch] = useState('')

    return (
        <div className="bg-[#121212]">

            <div className="w-[1295px] h-[340px] px-8 bg-[linear-gradient(180deg,#565656,#2b2b2b)]">
                <Header/>

                <div className="flex gap-x-6 mt-5">
                    <div className="flex items-center justify-center w-[232px] h-[232px] bg-[#282828] shadow-[0px_22px_85px_4px_rgba(0,0,0,0.56)]">
                        <Icon name="music" className="w-[64px] h-[64px] opacity-40"/>
                    </div>

                    <div className="flex flex-col font-bold justify-end">
                        <p className="text-[13px]">Playlist</p>
                        <h1 className="text-[88px] font-bold">My Playlist #1</h1>
                        <a href="" className="text-[13px]">nathan</a>
                    </div>
                </div>
            </div>

            <div className="px-8 py-6 bg-[linear-gradient(180deg,#222222,#121212)]">
                <Icon name="options" className="opacity-70 hover:opacity-100"/>
            </div>

            <div className="px-8">
                <hr className="mt-7 border-1 border-zinc-700"/>

                <p className="py-6 text-[20px] font-bold">Let's find something for your playlist</p>

                <div className="flex w-[360px] h-[40px] rounded bg-[#ffffff1a] items-center justify-between py-1.5 px-3 overflow-hidden">
                    <Icon name="search" className="w-[20px] h-[20px] text-[#ffffffb3]"/>
                    
                    <input value={search} onChange={e => setSearch(e.target.value)} className="w-[364px] h-[40px] py-1.5 px-1.5 bg-transparent text-[13px] font-medium text-[#ffffffb3] placeholder:text-[#ffffffb3] outline-none" placeholder="Search for songs or episodes"/>
                    
                    {search === '' ? false : true && (
                        <span onClick={() => setSearch('')} className="text-[#ffffffb3]">
                            <Icon name="remove" className="text-[#ffffffb3]"/>
                        </span>
                    )}
                </div>

                <Footer/>
            </div>

        </div>
    )
}