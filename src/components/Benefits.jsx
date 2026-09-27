import { Clock, ShieldCheck, Bike, TicketPercent } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Entrega Expressa",
    description: "Comida quente na sua porta em minutos, sem enrolação.",
  },
  {
    icon: TicketPercent,
    title: "Cupons Diários",
    description: "Ofertas exclusivas e frete grátis nos melhores restaurantes.",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento Seguro",
    description: "Pague pelo app via Pix, cartão de crédito ou vale-refeição.",
  },
  {
    icon: Bike,
    title: "Acompanhe tudo",
    description:
      "Saiba exatamente onde está o entregador com o mapa em tempo real.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600">
            Por que pedir com a gente?
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Sua melhor experiência em delivery
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/80 p-8 hover:border-red-200 hover:shadow-lg transition"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-stone-900">{b.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
