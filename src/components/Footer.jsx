import { Utensils } from "lucide-react";

export default function Footer({ onInfo }) {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-base">
          <div className="flex size-7 items-center justify-center rounded-lg bg-red-600">
            <Utensils size={16} />
          </div>
          <span>
            Gourmet<span className="text-red-600">On</span>
          </span>
        </div>
        <div className="flex gap-4 font-medium">
          <button
            onClick={() => onInfo("entregador")}
            className="hover:text-white transition"
          >
            Seja Entregador
          </button>
          <button
            onClick={() => onInfo("restaurante")}
            className="hover:text-white transition"
          >
            Cadastre seu Restaurante
          </button>
        </div>
        <p>
          © {new Date().getFullYear()} GourmetOn Delivery. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
