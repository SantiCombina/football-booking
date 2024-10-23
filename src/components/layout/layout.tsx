import {Outlet} from "react-router-dom";

export function Layout() {
    return (
        <div className="w-screen min-h-[100dvh] items-center justify-center flex flex-col bg-green-950 text-white">
            <div className="container flex flex-col items-center justify-center w-full">
                <Outlet />
            </div>
        </div>
    );
}
