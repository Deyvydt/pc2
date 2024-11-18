import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../api";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data.email, data.password);
      console.log("Inicio de sesión exitoso");
      
      
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
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
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
