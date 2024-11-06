import {Link} from "react-router-dom";

import {useGetFields} from "@/api/queries/use-fields";

export function Fields() {
    const {data: fieldsData, isLoading} = useGetFields();

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="pb-8 text-4xl font-extrabold">Canchas disponibles</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {fieldsData?.map((field, index) => (
                    <Link
                        key={index}
                        className="p-4 space-y-2 transition-all duration-200 rounded-lg hover:shadow-lg"
                        to={`/field-detail/${field.id}`}
                    >
                        <span className="text-xl font-bold">{field.name}</span>
                        {field.photo === "" ? (
                            <img
                                alt={field.name}
                                className="rounded-lg shadow-md max-w-72"
                                src="/no-image.webp"
                                width={288}
                            />
                        ) : (
                            <img
                                alt={field.name}
                                className="rounded-lg shadow-md max-w-72"
                                src={field.photo}
                                width={288}
                            />
                        )}
                        <p className="text-sm">{field.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
