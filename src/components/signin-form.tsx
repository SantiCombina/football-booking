import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {SigninValues, SigninSchema} from "../schemas/login-schema";

import {Button} from "./ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "./ui/form";
import {Input} from "./ui/input";

import {useSignin} from "@/api/mutations/use-signin";

export function SignInForm() {
    const signinForm = useForm<SigninValues>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {mutate} = useSignin();

    const onSubmit = (data: SigninValues) => {
        mutate(data, {
            onSuccess: () => {
                alert("Inicio de sesión exitoso");
                // Redirigir a la página principal u otra vista si es necesario
            },
            onError: (error: any) => {
                alert(`Error: ${error.message}`);
            },
        });
    };

    return (
        <Form {...signinForm}>
            <form className="flex flex-col w-full" onSubmit={signinForm.handleSubmit(onSubmit)}>
                <FormField
                    control={signinForm.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese su correo" type="email" {...field} />
                            </FormControl>
                            <div className="h-[20px]">
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <FormField
                    control={signinForm.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese su contraseña" type="password" {...field} />
                            </FormControl>
                            <div className="h-[20px]">
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />
                <Button className="mt-2" type="submit">
                    Ingresar
                </Button>
            </form>
        </Form>
    );
}
