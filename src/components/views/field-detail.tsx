import {Button} from "../ui/button";

export function FieldDetail() {
    const field = {
        id: 1,
        name: "Epec",
        description: "Una cancha moderna con césped sintético y excelente iluminación.",
        direction: "Av. Los Pinos 123",
        image: "/public/canchita.png",
    };

    return (
        <div className="flex flex-col items-end">
            <div className="flex gap-10">
                <img alt={field.name} className="rounded-lg shadow-md max-w-96" src={field.image} />
                <div className="flex flex-col gap-3">
                    <span className="text-3xl font-bold">{field.name}</span>
                    <p className="text-gray-700">{field.description}</p>
                    <span className="text-sm text-gray-700">{field.direction}</span>
                </div>
            </div>
            <Button className="bg-green-500 hover:bg-green-500/90" onClick={() => alert("Ir a reservar")}>
                Reservar
            </Button>
        </div>
    );
}
