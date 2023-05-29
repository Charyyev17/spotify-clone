import Dropdown from "./Dropdown";
import Icon from "./Icon";

export default function Header () {

    return (
        <div className="sticky top-0 z-30 flex items-center justify-between w-full py-4">
            
            <div className="flex gap-x-2">
                <div className="flex items-center justify-center bg-[#090413] rounded-full w-8 h-8">
                    <Icon name="back"/>
                </div>
                <div className="flex items-center justify-center bg-[#090413] opacity-70 rounded-full w-8 h-8">
                    <Icon name="go"/>
                </div>
            </div>


            <div className="flex gap-x-2 text-[13px]">
                <a href="" className="border border-gray-500 rounded-3xl font-semibold py-1.5 pb-1.5 px-3.5 hover:border-white transition ease-in-out hover:scale-105 duration-100"><span>Upgrade</span></a>
                
                <Dropdown/>
            </div>
        </div>
    )
}