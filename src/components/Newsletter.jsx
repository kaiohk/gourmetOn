import { useState } from "react";
import { Ticket, LoaderCircle, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  async function submit(e) {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("success");
      setEmail("");
    }, 1000);
  }

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-400">
            CUPOM DE PRIMEIRA COMPRA
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Ganhe 30% OFF no seu primeiro pedido
          </h2>
          <p className="mt-4 text-stone-400">
            Insira seu e-mail para receber seu cupom de desconto exclusivo e
            ofertas semanais.
          </p>
        </div>
        <form
          onSubmit={submit}
          className="bg-stone-800/80 p-8 rounded-2xl border border-stone-700"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl bg-stone-900 border border-stone-700 px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition"
            >
              {state === "loading" ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : (
                <>
                  Pegar Cupom <Ticket size={17} />
                </>
              )}
            </button>
          </div>
          {state === "success" && (
            <p className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <Check size={18} /> Cupom enviado para o seu e-mail!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
