import Topbar from "../components/Topbar";
import doja from "../assets/doja.jpg"
import lights from "../assets/lights.jpg"
import billions_club from "../assets/billions-club.jpg"
import belly_dancer from "../assets/belly-dancer.jpg"
import bad_memories from "../assets/bad-memories.jpg"
import psycho from "../assets/psycho.jpg"

export default function Home () {

    return (
        <div className="w-full h-[705px] bg-[#121212] text-white overflow-auto scrollbar-hide scroll-smooth">
            
            <Topbar />
            
            <div className="flex flex-col px-8">
                
                <div className="my-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-[20px] hover:underline transition-all">Discover Pick For You</h3>
                        <span className="text-[13px] font-semibold opacity-70 hover:underline transition-all">Show all</span>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={doja}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Doja</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={lights}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Lights</p>
                                <p className="text-[13px] opacity-70">Ellie Goulding</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={billions_club}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">BILLIONS CLUB</p>
                                <p className="text-[13px] opacity-70">Post Maloney</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={belly_dancer}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Belly Dancer</p>
                                <p className="text-[13px] opacity-70">Imanbek & Byor</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={bad_memories}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Bad Memories</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={psycho}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">PSYCHO</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-[20px] hover:underline transition-all">Discover Pick For You</h3>
                        <span className="text-[13px] font-semibold opacity-70 hover:underline transition-all">Show all</span>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={doja}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Doja</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={lights}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Lights</p>
                                <p className="text-[13px] opacity-70">Ellie Goulding</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={billions_club}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">BILLIONS CLUB</p>
                                <p className="text-[13px] opacity-70">Post Maloney</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={belly_dancer}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Belly Dancer</p>
                                <p className="text-[13px] opacity-70">Imanbek & Byor</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={bad_memories}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Bad Memories</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-[185px] h-[275px] p-3 rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div>
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={psycho}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">PSYCHO</p>
                                <p className="text-[13px] opacity-70">Central Cee</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}