import { Check } from "lucide-react";

export default function Features() {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80"
            alt="Entregador"
            className="rounded-2xl h-64 w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Comida deliciosa"
            className="rounded-2xl h-64 w-full object-cover mt-8"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600">
            NO APP GOURMETON
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-stone-900">
            Tudo na palma da sua mão
          </h2>
          <p className="mt-4 text-stone-600">
            Um aplicativo feito para facilitar a sua vida, desde a escolha do
            prato até o momento em que a campainha toca.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Filtros avançados por dieta e preferências",
              "Agendamento de pedidos para horários específicos",
              "Avaliações reais de outros clientes",
              "Suporte rápido no chat 24/7",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-stone-700 text-sm font-medium"
              >
                <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                  <Check size={13} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
