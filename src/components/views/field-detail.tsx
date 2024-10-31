import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Button} from "../ui/button";

import {useGetField} from "@/api/queries/use-fields";

export function FieldDetail() {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data: fieldData} = useGetField(id);

    useEffect(() => {
        if (!id) {
            navigate("/not-found");
        }
    }, []); // eslint-disable-line

    if (!fieldData) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex flex-col items-end">
            <div className="flex gap-10">
                <img alt={fieldData.name} className="rounded-lg shadow-md max-w-96" src={fieldData.photo} />
                <div className="flex flex-col gap-3">
                    <span className="text-3xl font-bold">{fieldData.name}</span>
                    <p className="text-gray-700">{fieldData.description}</p>
                    <span className="text-sm text-gray-700">{fieldData.direction}</span>
                </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-500/90" onClick={() => alert("Ir a reservar")}>
                Reservar
            </Button>
        </div>
    );
}
