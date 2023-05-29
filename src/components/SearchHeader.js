import classNames from "classnames";
import Icon from "./Icon";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function SearchHeader () {

    const [search, setSearch] = useState('')

    return (
        <div className="sticky top-0 z-30 flex items-center justify-between w-full py-3 bg-[#121212]">
            
            <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center bg-[#090413] rounded-full w-8 h-8">
                    <Icon name="back"/>
                </div>
                <div className="flex items-center justify-center bg-[#090413] opacity-70 rounded-full w-8 h-8">
                    <Icon name="go"/>
                </div>

                <div className="flex w-[364px] h-[40px] rounded-3xl bg-white items-center justify-between py-1.5 px-3 overflow-hidden">
                    <Icon name="search" className="text-black"/>
                    
                    <input value={search} onChange={e => setSearch(e.target.value)} className="w-[364px] h-[40px] py-1.5 px-3 text-[13px] font-semibold text-black outline-none" placeholder="What do you want to listen to?"/>
                    
                    {search === '' ? false : true && (
                        <span onClick={() => setSearch('')} className={classNames({
                            "text-black": true
                        })}>
                            <Icon name="remove"/>
                        </span>
                    )}
                </div>
            </div>

            <Dropdown/>
        </div>
    )
}