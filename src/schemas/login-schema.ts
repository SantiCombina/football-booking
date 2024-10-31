import {z} from "zod";

export const LoginValues = z.object({
    name: z.string().min(1, "El nombre es requerido"),
    email: z.string().min(1, "El email es requerido").email({message: "El email no es válido"}),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type LoginValues = z.infer<typeof LoginValues>;
