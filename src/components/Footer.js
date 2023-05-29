import Icon from "./Icon";

export default function Footer () {

    return (
        <div className="flex flex-col w-full h-[421px] mt-20 pt-2 pb-10">
            <div className="flex justify-between">
                <div className="flex gap-x-[115px]">
                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-bold text-[14px]">Company</h3>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">About</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Jobs</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">For the Record</a>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-bold text-[14px]">Communities</h3>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">For Artists</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Developers</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Advertising</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Investors</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Vendors</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Spotify for Work</a>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <h3 className="font-bold text-[14px]">Useful Links</h3>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Support</a>
                        <a href="" className="font-medium text-[14px] opacity-70 hover:opacity-100 hover:underline">Free Mobile App</a>
                    </div>
                </div>

                <div className="flex gap-x-4"> 
                    <button className="flex items-center justify-center rounded-full w-10 h-10 bg-footer-social">
                        <Icon name="instagram"/>
                    </button>
                    <button className="flex items-center justify-center rounded-full w-10 h-10 bg-footer-social">
                        <Icon name="twitter"/>
                    </button>
                    <button className="flex items-center justify-center rounded-full w-10 h-10 bg-footer-social">
                        <Icon name="facebook"/>
                    </button>
                </div>
            </div>

            <hr className="my-10 border-1 border-zinc-800"/>

            <div className="flex justify-between">
                <div className="flex gap-x-4">
                    <a href="" className="text-[13px] opacity-70 hover:opacity-100">Legal</a>
                    <a href="" className="text-[13px] opacity-70 hover:opacity-100">Privacy Center</a>
                    <a href="" className="text-[13px] opacity-70 hover:opacity-100">Privacy Policy</a>
                    <a href="" className="text-[13px] opacity-70 hover:opacity-100">Cookies</a>
                    <a href="" className="text-[13px] opacity-70 hover:opacity-100">About Ads</a>
                </div>

                <div>
                    <p className="text-[13px] opacity-70">© 2023 Spotify AB</p>
                </div>
            </div>
        </div>
    )
}