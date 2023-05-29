import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full h-full flex font-poppins">
        <Sidebar />
        <div className="w-full h-[705px] bg-[#121212] text-white overflow-auto scrollbar-hide scroll-smooth">
            <Outlet/>
        </div>
        <Player/>
    </div>
  );
}

