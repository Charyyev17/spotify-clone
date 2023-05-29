import SearchHeader from "../components/SearchHeader";
import Icon from "../components/Icon";

import yuz_kon from "../assets/yuz-kon.jpg"
import top_50_tr from "../assets/top-50-tr.jpg"
import sdp_search from "../assets/sdp-search.jpg"
import adele from "../assets/adele.jpg"
import conor_price from "../assets/conor-price.jpg"
import top_gun from "../assets/top-gun.jpg"
import Footer from "../components/Footer";

export default function Search () {

    return (
        <div className="px-8">
            
            <SearchHeader/>

            <div className="flex flex-col">
                <div className="my-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-[20px] hover:underline transition-all">Recent searches</h3>
                        <span className="text-[13px] font-semibold opacity-70 hover:underline transition-all">Show all</span>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded-full" alt="" src={yuz_kon}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Yüzyüzeyken Konu...</p>
                                <p className="text-[13px] opacity-70">Artist</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-opacity-30 bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={top_50_tr}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Top 50 - Turkey</p>
                                <p className="text-[13px] opacity-70">By Spotify</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-opacity-30 bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={sdp_search}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">sdp interlude ext...</p>
                                <p className="text-[13px] opacity-70">Travis Scott</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded-full" alt="" src={adele}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Adele</p>
                                <p className="text-[13px] opacity-70">Artist</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded-full" alt="" src={conor_price}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Conor Price</p>
                                <p className="text-[13px] opacity-70">Artist</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-[185px] h-[263px] rounded bg-footer-bg hover:bg-footer-bg-hover transition-all">
                            <div className="absolute right-0 m-2.5 flex items-center justify-center bg-opacity-30 bg-[#090413] rounded-full w-7 h-7">
                                <Icon name="remove"/>
                            </div>
                            <div className="p-3.5 mt-1">
                                <div className="w-[153px] h-[153px]">
                                    <img className="w-full h-full rounded" alt="" src={top_gun}/>
                                </div>
                                <p className="text-[16px] font-semibold mt-4 mb-2">Top Gun: Maveric...</p>
                                <p className="text-[13px] opacity-70">2022 • Lady Gaga</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}