import Footer from "../components/Footer";
import LibraryHeader from "../components/LibraryHeader";
import classNames from "classnames";

import last_of_us from "../assets/last-of-us.jpg"
import Icon from "../components/Icon";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Library () {

    const [showPlayBtn, setShowPlayBtn] = useState(true)

    return (
        <div className="px-8">

            <LibraryHeader/>

            <div className="flex flex-col my-6 gap-y-6">
                <h3 className="text-[20px] font-bold">Playlists</h3>

                <div className="flex gap-x-6">
                    <div className="relative w-[395px] h-[275px] p-5 bg-[linear-gradient(150deg,#470ef5,#8d8de5)] rounded">
                        <NavLink to="/liked_songs">
                            <div className="mt-12 mb-8 text-[15px] font-medium">
                                <span>Kate Bush <span className="opacity-70">Running Up That Hill (A Deal With God)</span></span>
                            {' • '}
                                <span>Ruth B. <span span className="opacity-70">Dandelions</span></span>
                                {' • '}
                                <span>Young The Giant <span span className="opacity-70">Mind Over Matter (Reprise)</span></span>
                                {' • '}
                                <span>BLOK3 <span span className="opacity-70">BAYBAY</span></span>
                                {' • '}
                            </div>

                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-bold text-[28px]">Liked Songs</h3>
                                <p className="font-bold text-[14px]">77 liked songs</p>
                            </div>
                        </NavLink>

                        <div className="absolute right-0 bottom-0 m-5 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1ed760] transition ease-in-out hover:scale-105 hover:bg-[#1fdf64] shadow-[0px_15px_35px_2px_rgba(0,0,0,0.56)]">
                            <Icon className="w-[20px] h-[20px]" name="pause"/>
                        </div>
                    </div>

                    <div onMouseEnter={() => setShowPlayBtn(false)} onMouseLeave={() => setShowPlayBtn(true)} className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                        <div>
                            <div className="relative w-[153px] h-[153px]">
                                <img className="w-full h-full rounded" alt="" src={last_of_us}/>
                                <div className={classNames({
                                    "absolute right-0 bottom-0 m-2 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1ed760] transition ease-in-out hover:scale-105 hover:bg-[#1fdf64] shadow-[0px_15px_35px_2px_rgba(0,0,0,0.56)]": true,
                                    "opacity-0 transition ease-out translate-y-4 hover:translate-y-0 duration-300": showPlayBtn
                                })}>
                                    <Icon className="w-[20px] h-[20px]" name="play"/>
                                </div>
                            </div>
                            <p className="text-[16px] font-semibold mt-4 mb-2">The Last Of Us</p>
                            <p className="text-[13px] opacity-70">the last of us series out</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}