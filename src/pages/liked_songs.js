import Footer from "../components/Footer";
import Header from "../components/Header";
import Icon from "../components/Icon";

import me_myself from "../assets/me-myself.jpg"
import natek from "../assets/natek.jpg"
import dandelions from "../assets/dandelions.jpg"

export default function CreatePlaylist () {

    return (
        <div className="bg-[#121212]">

            <div className="w-[1295px] h-[340px] px-8 bg-[linear-gradient(180deg,#523ba0,#291e51)]">
                <Header/>

                <div className="flex gap-x-6 mt-5">
                    <div className="flex items-center justify-center w-[232px] h-[232px] bg-[linear-gradient(150deg,#4014b8,#7c9287)] shadow-[0px_22px_85px_4px_rgba(0,0,0,0.56)]">
                        <Icon name="heart" className="w-[75px] h-[75px] opacity-100"/>
                    </div>

                    <div className="flex flex-col font-bold justify-end">
                        <p className="text-[13px]">Playlist</p>
                        <h1 className="text-[88px] font-bold">Liked Songs</h1>
                        <a href="" className="text-[13px]">nathan • 77 songs</a>
                    </div>
                </div>
            </div>

            <div className="px-8 py-6 bg-[linear-gradient(180deg,#211840,#121212)]">
                <div className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#1fdf64] transition ease-in-out hover:scale-105 hover:bg-[#1fdf64] shadow-[0px_15px_35px_2px_rgba(0,0,0,0.56)]">
                    <Icon className="w-[28px] h-[28px]" name="pause"/>
                </div>
            </div>

            <div className="px-8">

                <div className="">
                    <table className="w-full text-[14px] text-[#b3b3b3] text-left">
                        <thead className="text-[13px] border-b border-zinc-700">
                            <tr>
                                <th scope="col" className="pl-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="pr-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Album
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date Added
                                </th>
                                <th scope="col" className="py-3">

                                </th>
                                <th scope="col" className="flex justify-end pr-8 py-3">
                                    <Icon name="duration"/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="pt-5 pb-3.5 pl-6">
                                    <span className="text-[15px]">1</span>
                                </td>
                                <th scope="row" className="flex pr-6 pt-5 pb-3.5 font-medium whitespace-nowrap">
                                    <img alt="" className="w-10 h-10" src={me_myself}/>
                                    <div className="flex flex-col justify-center pl-3">
                                        <a className="text-white text-[15px]">Me, Myself & I</a>
                                        <span className="text-[#b3b3b3]"><a href="">G-Eazy</a>, <a href="">Bebe Rexha</a></span>
                                    </div>
                                </th>
                                <td className="px-6 pt-5 pb-3.5">
                                    <a href="">When It's Dark Out</a>
                                </td>
                                <td className="px-6 pt-5 pb-3.5">
                                    <span>1 hour ago</span>
                                </td>
                                <td className="pt-5 pb-3.5">
                                    <Icon className="fill-green-500" name="heart"/>
                                </td>
                                <td className="pr-8 pt-5 pb-3.5 text-right">
                                    <span>4:11</span>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="pl-6 pb-3.5">
                                    <span className="text-[15px]">2</span>
                                </td>
                                <th scope="row" className="flex pr-6 pb-3.5 font-medium whitespace-nowrap">
                                    <img alt="" className="w-10 h-10" src={natek}/>
                                    <div className="flex flex-col justify-center pl-3">
                                        <a className="text-white text-[15px]">Let Me Introduce Myself</a>
                                        <span className="text-[#b3b3b3]"><a href="">Natek</a></span>
                                    </div>
                                </th>
                                <td className="px-6 pb-3.5">
                                    <a href="">Keep The Flowers</a>
                                </td>
                                <td className="px-6 pb-3.5">
                                    <span>13 hours ago</span>
                                </td>
                                <td className="pb-3.5">
                                    <Icon className="fill-green-500" name="heart"/>
                                </td>
                                <td className="pr-8 pb-3.5 text-right">
                                    <span>2:10</span>
                                </td>
                            </tr>
                            
                            <tr className="">
                                <td className="pl-6 pb-3.5">
                                    <span className="text-[15px]">3</span>
                                </td>
                                <th scope="row" className="flex pr-6 pb-3.5 font-medium whitespace-nowrap">
                                    <img alt="" className="w-10 h-10" src={dandelions}/>
                                    <div className="flex flex-col justify-center pl-3">
                                        <a className="text-white text-[15px]">Dandelions</a>
                                        <span className="text-[#b3b3b3]"><a href="">Ruth B.</a></span>
                                    </div>
                                </th>
                                <td className="px-6 pb-3.5">
                                    <a href="">Safe Haven</a>
                                </td>
                                <td className="px-6 pb-3.5">
                                    <span>5 days ago</span>
                                </td>
                                <td className="pb-3.5">
                                    <Icon className="fill-green-500" name="heart"/>
                                </td>
                                <td className="pr-8 pb-3.5 text-right">
                                    <span>3:53</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Footer/>
            </div>

        </div>
    )
}