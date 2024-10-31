import {useQuery, useQueryClient} from "react-query";
import {useNavigate} from "react-router-dom";

export const useGetFields = () => {
    const queryClient = useQueryClient();

    return useQuery<Fields[]>({
        queryKey: "fields",
        staleTime: Infinity,
        async queryFn() {
            const response = await fetch("http://localhost:3000/api/v1/fields");
            const data = await response.json();

            return data;
        },
        onSuccess(data) {
            queryClient.setQueryData("fields", data);
        },
        onError(error) {
            console.error(error);
        },
    });
};

export const useGetField = (id?: string) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useQuery<Fields>(
        ["field", id],
        async () => {
            const response = await fetch(`http://localhost:3000/api/v1/field/${id}`);

            if (!response.ok) {
                throw new Error("Error al obtener los datos de la cancha");
            }

            return response.json();
        },
        {
            retry: 1,
            enabled: Boolean(id),
            staleTime: Infinity,
            onSuccess(data) {
                queryClient.setQueryData(["field", id], data);
            },
            onError(error) {
                console.error("Error al obtener la cancha:", error);
                navigate("/not-found");
            },
        },
    );
};
