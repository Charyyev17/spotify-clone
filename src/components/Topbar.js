import Header from "./Header";
import liked_songs from "../assets/liked-songs.png"
import last_of_us from "../assets/last-of-us.jpg"
import release_radar from "../assets/release-radar.jpg"
import discover_weekly from "../assets/discover-weekly.jpg"
import sdp from "../assets/sdp.jpg"
import daily_mix_5 from "../assets/daily-mix-5.jpg"

export default function Topbar () {

    return (
        <div className="bg-gradient-to-b from-[#1d0f44] to-[#121212] w-full h-[332px] px-8">
           
            <Header/>
            
            <div className="flex flex-col mt-5 gap-y-4">
                <h3 className="font-bold text-[28px]">Good afternoon</h3>

                <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={liked_songs} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>Liked Songs</p>
                        </div>
                    </div>

                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={last_of_us} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>The Last Of Us (HBO)</p>
                            <p>Soundtrack</p>
                        </div>
                    </div>

                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={release_radar} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>Release Radar</p>
                        </div>
                    </div>

                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={discover_weekly} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>Discover Weekly</p>
                        </div>
                    </div>

                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={sdp} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>sdp interlude (Extended)</p>
                        </div>
                    </div>

                    <div className="w-[394px] h-[80px] flex items-center bg-topbar-grid-bg rounded overflow-hidden hover:bg-topbar-grid-bg-hover transition-all">
                        <div className="w-20 h-20">
                            <img className="w-full h-full" src={daily_mix_5} alt="Liked Songs"/>
                        </div>

                        <div className="px-4 font-bold text-[15px]">
                            <p>Daily Mix 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}