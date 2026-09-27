import { ArrowRight, Star, Smartphone, MapPin } from "lucide-react";

export default function Hero({ onDownload }) {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3.5 py-1.5 text-xs font-semibold text-red-800">
            <Star size={14} className="fill-red-500 text-red-500" />
            <span>Os melhores restaurantes da cidade</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl leading-[1.15]">
            Bateu a fome?
            <br />A gente entrega rápido.
          </h1>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-xl">
            Peça seus pratos favoritos com facilidade. Do café da manhã ao
            jantar, o GourmetOn leva o melhor da gastronomia até a sua porta.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#cardapio"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-base font-medium text-white shadow-md hover:bg-red-500 transition"
            >
              Fazer um Pedido <ArrowRight size={18} />
            </a>
            <button
              onClick={onDownload}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-base font-medium text-stone-800 hover:bg-stone-100 transition cursor-pointer"
            >
              <Smartphone size={18} /> Baixar App
            </button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs font-medium text-stone-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-emerald-600" /> Rastreio em
              tempo real
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl bg-stone-200 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="Prato gastronômico de delivery"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
