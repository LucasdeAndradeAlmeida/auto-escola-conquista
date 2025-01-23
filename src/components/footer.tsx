import Link from "next/link";
import { Car } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Autoescola Conquista</span>
            </Link>
            <p className="text-sm text-gray-500">
              Há mais de 20 anos formando condutores seguros e conscientes.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Primeira%20Habilitação!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Primeira Habilitação
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Reciclagem!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Reciclagem
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20Aulas%20Particulares!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Aulas Particulares
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Av. Principal, 1000 - Centro</li>
              <li>(99) 99999-9999</li>
              <li>contato@autoescolaconquista.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Autoescola Conquista. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
