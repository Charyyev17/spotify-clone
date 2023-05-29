import Dropdown from "./Dropdown";
import Icon from "./Icon";

export default function LibraryHeader () {

    return (
        <div className="sticky top-0 z-30 flex items-center justify-between w-full py-4 bg-[#121212]">
            
            <div className="flex gap-x-4 items-center">
                <div className="flex items-center justify-center bg-[#090413] rounded-full w-8 h-8">
                    <Icon name="back"/>
                </div>
                <div className="flex items-center justify-center bg-[#090413] opacity-70 rounded-full w-8 h-8">
                    <Icon name="go"/>
                </div>

                <div className="flex items-center gap-x-8 text-[13px] font-bold">
                    <button className="py-3 px-4 rounded items-center bg-[#333]">Playlists</button>
                    <button>Podcasts</button>
                    <button>Artists</button>
                    <button>Albums</button>
                </div>
            </div>

            <Dropdown/>
        </div>
    )
}