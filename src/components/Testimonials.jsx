import { Star } from "lucide-react";

const reviews = [
  {
    name: "Lucas Mendes",
    role: "Cliente Plus",
    content:
      "A comida chega sempre quentinha e o rastreio funciona perfeitamente. Melhor app de delivery atual!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Fernanda Costa",
    role: "Cliente Ouro",
    content:
      "Adoro os cupons diários. Consigo pedir em restaurantes excelentes pagando muito mais barato.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Thiago Silva",
    role: "Cliente Novo",
    content:
      "Interface muito limpa, não trava e o pagamento via Pix aprova na hora. Recomendo muito.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 bg-stone-50 border-t border-stone-200/60"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-red-600">
            AVALIAÇÕES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Quem pede, aprova!
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm italic">"{r.content}"</p>
              </div>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-stone-100">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{r.name}</h4>
                  <p className="text-xs text-stone-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
