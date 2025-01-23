import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            width={150}
            height={100}
            src={"/assets/logo-header.png"}
            alt="sdfdfs"
          />
        </Link>

        <Button asChild>
          <Link href="#contato">Matricule-se</Link>
        </Button>
      </div>
    </header>
  );
}
