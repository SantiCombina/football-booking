import {Outlet} from "react-router-dom";

export function LayoutBackOffice() {
    return (
        <div className="w-screen min-h-[100dvh] items-center justify-center flex flex-col bg-green-950 bg-[url('/hero.png')] shadow-[inset_0_100vh_0_rgba(0,0,0,0.7)] text-white">
            <div className="container flex flex-col items-center justify-center w-full">
                <Outlet />
            </div>
        </div>
    );
}
