import { useState } from "react";
import { Utensils, Menu, X, Smartphone, ShoppingBag } from "lucide-react";

export default function Header({ onDownload, cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-stone-900"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm">
            <Utensils size={20} />
          </div>
          <span>
            Gourmet<span className="text-red-600">On</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-stone-600">
          <a href="#beneficios" className="transition hover:text-stone-900">
            Vantagens
          </a>
          <a href="#cardapio" className="transition hover:text-stone-900">
            Cardápio
          </a>
          <a href="#recursos" className="transition hover:text-stone-900">
            O App
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2 text-stone-700 hover:text-red-600 transition cursor-pointer"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex size-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={onDownload}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 transition cursor-pointer"
          >
            <Smartphone size={17} /> Baixar App
          </button>

          <button
            className="md:hidden text-stone-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-stone-200 bg-white px-6 py-6 md:hidden flex flex-col gap-4 text-stone-700">
          <a
            href="#beneficios"
            onClick={() => setMenuOpen(false)}
            className="py-1"
          >
            Vantagens
          </a>
          <a
            href="#cardapio"
            onClick={() => setMenuOpen(false)}
            className="py-1"
          >
            Cardápio
          </a>
          <a
            href="#recursos"
            onClick={() => setMenuOpen(false)}
            className="py-1"
          >
            O App
          </a>
          <button
            onClick={() => {
              setMenuOpen(false);
              onDownload();
            }}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white"
          >
            <Smartphone size={17} /> Baixar App
          </button>
        </div>
      )}
    </header>
  );
}
