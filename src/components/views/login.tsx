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
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div>
            <Form {...form}>
                <form className="flex flex-col w-full gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ingrese su correo" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"secondary"}>
                        Ingresar
                    </Button>
                </form>
            </Form>
            <Button asChild>
                <Link to={"/fields"}>canchitas</Link>
            </Button>
        </div>
    );
}
