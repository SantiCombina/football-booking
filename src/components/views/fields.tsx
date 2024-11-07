import { Link } from "react-router-dom";
import { useGetFields } from "@/api/queries/use-fields";

export function Fields() {
    const { data: fieldsData, isLoading } = useGetFields();

    if (isLoading) {
        return <div className="text-center text-xl text-gray-600">Cargando...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-8">
            <h2 className="pb-8 text-4xl font-extrabold text-gray-800 text-center">Canchas disponibles</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
                {fieldsData?.map((field, index) => (
                    <Link
                        key={index}
                        className="flex flex-col items-center space-y-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 w-full max-w-xs mx-auto"
                        to={`/field-detail/${field.id}`}
                    >
                        <div className="flex flex-col items-center text-center">
                            <span className="text-xl font-semibold text-gray-900">{field.name}</span>
                            {field.photo === "" ? (
                                <img
                                    alt={field.name}
                                    className="rounded-lg shadow-md max-w-full h-64 object-cover flex-shrink-0"
                                    src="/no-image.webp"
                                />
                            ) : (
                                <img
                                    alt={field.name}
                                    className="rounded-lg shadow-md max-w-full h-64 object-cover flex-shrink-0"
                                    src={`/images/${field.photo}`}
                                />
                            )}
                            <p className="text-sm text-gray-600 mt-2">{field.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
