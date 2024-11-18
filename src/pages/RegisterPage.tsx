import React from "react";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../api";

interface RegisterFormInputs {
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await registerUser(data);
      console.log("Registro exitoso");
      
      
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Correo Electrónico</label>
          <input
            type="email"
            {...register("email", { required: "El correo es requerido" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es requerida",
            })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
