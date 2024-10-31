import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "./ui/form";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {LoginValues} from "@/schemas/login-schema";

export function LoginTabs() {
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
        <Tabs className="w-[400px]" defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Ingresar</TabsTrigger>
                <TabsTrigger value="signup">Registrarse</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <Form {...form}>
                    <form className="flex flex-col w-full" onSubmit={form.handleSubmit(onSubmit)}>
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
            </TabsContent>
            <TabsContent value="signup">
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
                            Registrarse
                        </Button>
                    </form>
                </Form>
            </TabsContent>
        </Tabs>
    );
}
