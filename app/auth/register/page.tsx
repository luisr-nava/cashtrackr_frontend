import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CashTrackr - Crear una cuenta",
  description:
    "Crea una cuenta para poder acceder a todas las funcionalidades de la aplicación",
};

export default function RegisterPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Crea una Cuenta</h1>
      <p className="text-3xl font-bold">
        y controla tus <span className="text-amber-500">fianzas</span>
      </p>
      <RegisterForm />
      <nav className="mt-10 flex flex-col space-y-4">
        <Link href="/auth/login" className="text-center text-gray-500">
          ¿Ya tienes cuenta? Iniciar Sesión
        </Link>
        <Link href="/auth/forgot-password" className="text-center text-gray-500">
          ¿Olvidaste tu contraseña? Reestablecer
        </Link>
      </nav>
    </>
  );
}

