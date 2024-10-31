import {Link} from "react-router-dom";

import {LoginTabs} from "../login-tabs";
import {Button} from "../ui/button";

export function Login() {
    return (
        <div className="p-10 min-h-[460px] text-black bg-white rounded-lg">
            <LoginTabs />
            <Button asChild className="w-full mt-4" variant={"outline"}>
                <Link to={"/fields"}>canchitas - borrar botón</Link>
            </Button>
        </div>
    );
}
