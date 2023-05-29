import footer_image from "../assets/footer-image.jpg"
import Icon from "./Icon"

export default function Player () {

    return (
        <div className="fixed z-20 bottom-0 border-t border-zinc-800 w-full h-[90px] px-4 py-4 bg-footer-bg text-white">
            <div className="grid grid-cols-3 items-center">
                
                <div className="flex items-center justify-start gap-x-2.5">
                    <div className="w-[56px] h-[56px] rounded">
                        <img alt="" className="w-full h-full" src={footer_image}/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[13px] font-semibold hover:underline transition-all"><a href="">{"Grown Man"}</a></span>
                        <span className="text-[10px] opacity-70 hover:opacity-100 hover:underline transition-all"><a href="">{"Marshmello"}, {"Polo G"}, {"Southside"}</a></span>
                    </div>
                    <div className="flex pl-3 gap-x-4">
                        <Icon className="fill-green-500" name="heart"/>
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="screen-in-screen"/>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-x-6">
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="shuffle"/>
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="previous"/>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition ease-in-out hover:scale-110 duration-100">
                            <Icon name="pause-player"/>
                        </div>
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="next"/>
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="repeat"/>
                    </div>
                    <div className="flex items-center mt-2 gap-x-2">
                        <span className="text-[11px] opacity-70">0:53</span>
                        <div className="flex w-[505px] h-1 bg-gray-200 rounded-full overflow-hidden dark:bg-zinc-600">
                            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-white hover:bg-green-500" role="progressbar" style={{width: "50%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span className="text-[11px] opacity-70">1:46</span>
                    </div>
                </div>

                <div className="flex justify-end gap-x-4">
                    <Icon className="opacity-70 hover:opacity-100 transition-all" name="lyrics"/>
                    <Icon className="opacity-70 hover:opacity-100 transition-all" name="queue"/>
                    <Icon className="opacity-70 hover:opacity-100 transition-all" name="connect"/>
                    <div className="flex items-center gap-x-2.5">
                        <Icon className="opacity-70 hover:opacity-100 transition-all" name="volume"/>
                        <div className="flex w-[93px] h-[3px] bg-gray-200 rounded-full overflow-hidden dark:bg-zinc-600">
                            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-white hover:bg-green-500" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}