import { useState } from "react";
import {
  Clock,
  Plus,
  Search,
  Utensils,
  ChevronDown,
  Loader2,
} from "lucide-react";

const CATEGORIAS = [
  "Todos",
  "Dinner",
  "Lunch",
  "Snack",
  "Dessert",
  "Beverage",
  "Breakfast",
];

export default function Explorer({ comidas, loading, onMeal }) {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [limiteExibicao, setLimiteExibicao] = useState(6);

  const comidasFiltradas = comidas.filter((comida) => {
    const bateuBusca = comida.title.toLowerCase().includes(busca.toLowerCase());

    if (categoriaAtiva === "Todos") return bateuBusca;

    const categoriaComida =
      comida.dishTypes && comida.dishTypes.length > 0
        ? comida.dishTypes.join(" ").toLowerCase()
        : "";

    const bateuCategoria =
      categoriaComida.includes(categoriaAtiva.toLowerCase()) ||
      comida.title.toLowerCase().includes(categoriaAtiva.toLowerCase());

    return bateuBusca && bateuCategoria;
  });

  const pratosExibidos = comidasFiltradas.slice(0, limiteExibicao);

  const carregarMais = () => {
    setLimiteExibicao((prev) => prev + 6);
  };

  return (
    <section
      id="cardapio"
      className="py-20 bg-stone-50 border-y border-stone-200/60"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">
              CARDÁPIO DIGITAL
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
              Destaques do Chef
            </h2>
          </div>
          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Procurar prato..."
              value={busca}
              onChange={(e) => {
                setBusca(e.target.value);
                setLimiteExibicao(6);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition shadow-sm"
            />
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoriaAtiva(cat);
                setLimiteExibicao(6);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                categoriaAtiva === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-8">
          {loading ? (
            <div className="py-20 text-center bg-white rounded-2xl border border-stone-200/80 p-8 flex flex-col items-center justify-center">
              <Loader2 className="animate-spin text-red-600 mb-3" size={36} />
              <h3 className="font-bold text-stone-800 text-lg">
                A carregar o cardápio da API...
              </h3>
              <p className="text-stone-500 text-sm mt-1">
                A obter as melhores receitas em tempo real.
              </p>
            </div>
          ) : comidasFiltradas.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-stone-200/80 p-8">
              <Utensils className="mx-auto text-stone-300 mb-3" size={40} />
              <h3 className="font-bold text-stone-800 text-lg">
                Nenhum prato encontrado
              </h3>
              <p className="text-stone-500 text-sm mt-1">
                Tente procurar por outro termo ou selecione a categoria "Todos".
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pratosExibidos.map((comida) => (
                  <article
                    key={comida.id}
                    onClick={() => onMeal(comida)}
                    className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition flex flex-col"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={comida.image}
                        alt={comida.title}
                      />
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-stone-800 flex items-center gap-1 shadow-sm">
                        <Clock size={12} className="text-red-600" />{" "}
                        {comida.readyInMinutes || 25} min
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                          {comida.dishTypes && comida.dishTypes.length > 0
                            ? comida.dishTypes[0]
                            : "Especial"}
                        </span>
                        <h3 className="mt-1 text-lg font-bold text-stone-900 line-clamp-1">
                          {comida.title}
                        </h3>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
                        <span className="text-lg font-extrabold text-emerald-600">
                          R${" "}
                          {comida.price
                            ? comida.price.toFixed(2).replace(".", ",")
                            : "29,90"}
                        </span>
                        <button className="flex items-center gap-1 rounded-lg bg-red-50 text-red-600 px-3 py-1.5 text-xs font-bold group-hover:bg-red-600 group-hover:text-white transition">
                          <Plus size={16} /> Pedir
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {limiteExibicao < comidasFiltradas.length && (
                <div className="mt-12 text-center">
                  <button
                    onClick={carregarMais}
                    className="inline-flex items-center gap-2 bg-white border border-stone-200 hover:border-red-500 text-stone-800 hover:text-red-600 font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition"
                  >
                    Ver mais pratos ({comidasFiltradas.length - limiteExibicao}{" "}
                    restantes)
                    <ChevronDown size={18} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
