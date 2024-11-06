import {Link} from "react-router-dom";

import {Button} from "../ui/button";

export function Home() {
    return (
        <div className="flex items-center w-full justify-evenly">
            <div className="flex flex-col gap-2">
                <div>
                    <h1 className="-ml-1 font-bold text-transparent text-8xl bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text">
                        FÚTBOLYA
                    </h1>
                    <p className="text-lg">Reservá tu canchita rápido y fácil</p>
                </div>
                <Button asChild className="w-fit" variant={"secondary"}>
                    <Link to={"/login"}>Buscá tu canchita</Link>
                </Button>
            </div>
            <img alt="ball" className="shadow-lg max-w-64" src="./favicon.png" width={256} />
        </div>
    );
}
