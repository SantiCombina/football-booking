import {Link} from "react-router-dom";

import {Button} from "../ui/button";

export function Fields() {
    return (
        <div className="flex flex-col">
            <span>catálogo de canchitas</span>
            <Button asChild>
                <Link to={"/field-detail"}>ir a vista de detalle</Link>
            </Button>
        </div>
    );
}
