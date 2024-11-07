import {useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

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
                {fieldData.photo === "" ? (
                    <img
                        alt={fieldData.name}
                        className="rounded-lg shadow-md max-w-96"
                        src="/no-image.webp"
                        width={384}
                    />
                ) : (
                    <img
                        alt={fieldData.name}
                        className="rounded-lg shadow-md max-w-96"
                        src={`/images/${fieldData.photo}`}
                        width={384}
                    />
                )}
                <div className="flex flex-col gap-3">
                    <span className="text-3xl font-bold">{fieldData.name}</span>
                    <p className="text-gray-700">{fieldData.description}</p>
                    <span className="text-sm text-gray-700">{fieldData.direction}</span>
                </div>
            </div>
            <Button asChild className="bg-green-500 hover:bg-green-500/90">
                <Link to={`/reservation/${id}`}>Reservar</Link>
            </Button>
        </div>
    );
}