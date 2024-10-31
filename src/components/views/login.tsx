import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import {Button} from "../ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {Input} from "../ui/input";

import {LoginValues} from "@/schemas/login-schema";

export function Login() {
    const form = useForm<LoginValues>({
        resolver: zodResolver(LoginValues),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="p-10 text-black bg-white rounded-lg">
            <Form {...form}>
                <form className="flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ingrese su nombre" {...field} />
                                </FormControl>
                                <div className="h-[20px]">
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
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
                        control={form.control}
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
            <Button asChild className="w-full mt-4" variant={"outline"}>
                <Link to={"/fields"}>canchitas - borrar este</Link>
            </Button>
        </div>
    );
}
