import React, { useEffect } from "react";
import Home from "@/Layouts/Home";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Tilt from "react-parallax-tilt";


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Home>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />
            {
                <div className="bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
                    <div className="h-65-r w-65-r bg-gradient-to-r from-blue-400 to-green-500 rounded-full absolute -right-40 -top-56 transform rotate-160 animate-pulse"></div>
                    <div className="h-65-r w-65-r bg-gradient-to-r from-red-400 via-red-500 to-yellow-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
                    <Tilt>
                        <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
                            <form
                                onSubmit={submit}
                                className="h-full flex flex-col justify-evenly items-center"
                            >
                                <div className="font-poppins text-white text-2xl tracking-wider">
                                    Login
                                </div>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input-text"
                                    value={data.email}
                                    autoComplete="current-email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input-text"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <input
                                    type="Submit"
                                    className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-opacity-80"
                                />
                                <Link href={route("register")}>
                                    <div className="font-poppins text-white text-2 tracking-wider cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-opacity-80">
                                        Register
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </Tilt>
                </div>
            }
        </Home>
    );
}
