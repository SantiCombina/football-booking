import {Link} from "react-router-dom";

import {Button} from "../ui/button";

export function Home() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-2">
                <div>
                    <h1 className="font-bold text-yellow-300 text-7xl">FULBITO</h1>
                    <p className="">Reservá tu canchita rápido y fácil</p>
                </div>
                <Button asChild className="w-fit" variant={"secondary"}>
                    <Link to={"/login"}>Buscá tu canchita</Link>
                </Button>
            </div>
            <div>
                <span>acá va un logo</span>
            </div>
        </div>
    );
}
