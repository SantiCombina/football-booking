import {Link} from "react-router-dom";

const fields = [
    {
        id: 1,
        name: "Epec",
        description: "Una cancha moderna con césped sintético y excelente iluminación.",
        direction: "Av. Los Pinos 123",
        image: "/public/canchita.png",
    },
    {
        id: 2,
        name: "Sport",
        description: "Cancha techada ideal para jugar en cualquier clima.",
        direction: "Calle Falsa 456",
        image: "/public/canchita.png",
    },
    {
        id: 3,
        name: "San Isidro",
        description: "Espacio amplio con vestuarios y estacionamiento.",
        direction: "Calle Verdadera 789",
        image: "/public/canchita.png",
    },
    {
        id: 4,
        name: "La Bombonera",
        description: "Cancha con gradas para espectadores y ambiente familiar.",
        direction: "Av. Siempre Viva 742",
        image: "/public/canchita.png",
    },
    {
        id: 5,
        name: "El Modomental",
        description: "Campo de juego profesional con medidas reglamentarias.",
        direction: "Calle Principal 101",
        image: "/public/canchita.png",
    },
    {
        id: 6,
        name: "Wembley",
        description: "Cancha con césped natural y excelente mantenimiento.",
        direction: "Calle Secundaria 202",
        image: "/public/canchita.png",
    },
    {
        id: 7,
        name: "Maracaná",
        description: "Espacio deportivo con cafetería y zona de descanso.",
        direction: "Av. Deportiva 303",
        image: "/public/canchita.png",
    },
];

export function Fields() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="pb-8 text-4xl font-extrabold">Canchas disponibles</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {fields.map((field, index) => (
                    <Link
                        key={index}
                        className="p-4 space-y-2 transition-all duration-200 rounded-lg hover:shadow-lg"
                        to={`/field-detail`}
                    >
                        <span className="text-xl font-bold">{field.name}</span>
                        <img alt={field.name} className="rounded-lg shadow-md " src={field.image} />
                        <p className="text-sm">{field.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
