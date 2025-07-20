'use client'
import { client } from "../../types/client.types";
import { useForm } from "react-hook-form";


const page = () => {
    const { register, formState: { errors } } = useForm<client>({
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
        }
    });

    return (
        <div className="flex items-center justify-center bg-gray-50 py-10 px-4">
            <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Subscribe in our service</h1>

                <form className="space-y-4">
                    <div>
                        <input
                            {...register("firstname", {
                                required: "Este campo es obligatorio",
                                minLength: { value: 3, message: "Mínimo 3 caracteres" },
                            })}
                            type="text"
                            placeholder="Firstname"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-red-500 text-sm">{errors.firstname?.message}</p>
                    </div>

                    <div>
                        <input
                            {...register("lastname", {
                                required: "Este campo es obligatorio",
                                minLength: { value: 3, message: "Mínimo 3 caracteres" },
                            })}
                            type="text"
                            placeholder="Lastname"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-red-500 text-sm">{errors.lastname?.message}</p>
                    </div>

                    <div>
                        <input
                            {...register("email", {
                                required: "Este campo es obligatorio",
                            })}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>

                    <div>
                        <input
                            {...register("phone", {
                                required: "Este campo es obligatorio",
                                minLength: { value: 4, message: "Mínimo 4 dígitos" },
                            })}
                            type="tel"
                            placeholder="Phone"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                    </div>
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Enroll Now!!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default page;