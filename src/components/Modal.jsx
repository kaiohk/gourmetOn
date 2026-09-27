import { useState, useEffect } from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

export default function Modal({
  modal,
  onClose,
  cart = [],
  addToCart,
  removeFromCart,
}) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (modal?.type === "meal") {
      setQty(1);
    }
  }, [modal]);

  if (!modal) return null;

  const comida = modal.comida || {};
  const precoUnitario = typeof comida.price === "number" ? comida.price : 29.9;

  const subtotal = cart.reduce((acc, item) => {
    const itemPreco = typeof item.price === "number" ? item.price : 0;
    return acc + itemPreco * (item.qty || 1);
  }, 0);
  const taxaEntrega = cart.length > 0 ? 5.9 : 0;
  const total = subtotal + taxaEntrega;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative z-10 bg-white text-stone-800 max-h-[85vh] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="sticky top-0 z-10 bg-white border-b border-stone-100 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900">
            {modal.type === "meal"
              ? "Detalhes do Pedido"
              : modal.type === "cart"
                ? "Sua Sacola"
                : "Aviso"}
          </h2>
          <button
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {modal.type === "meal" && (
            <div>
              {comida.image && (
                <img
                  src={comida.image}
                  alt={comida.title || "Foto do prato"}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
              )}
              <h3 className="text-2xl font-extrabold text-stone-900">
                {comida.title || "Prato Especial"}
              </h3>
              <p className="text-sm text-stone-500 mt-1">
                Tempo estimado: {comida.readyInMinutes || 25} min
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-emerald-600">
                  R$ {precoUnitario.toFixed(2).replace(".", ",")}
                </span>
                <div className="flex items-center gap-3 bg-stone-100 rounded-lg p-1">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-1.5 rounded-md bg-white text-stone-700 shadow-sm hover:bg-stone-50 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold text-sm w-4 text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-1.5 rounded-md bg-white text-stone-700 shadow-sm hover:bg-stone-50 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => addToCart(comida, qty)}
                className="mt-6 w-full py-3.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition flex justify-center items-center gap-2 cursor-pointer shadow-md shadow-red-600/20"
              >
                <ShoppingBag size={18} /> Adicionar - R${" "}
                {(precoUnitario * qty).toFixed(2).replace(".", ",")}
              </button>
            </div>
          )}
          {modal.type === "cart" && (
            <div>
              {cart.length === 0 ? (
                <p className="text-center py-10 font-bold text-stone-500">
                  Sua sacola está vazia.
                </p>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => {
                      const itemPreco =
                        typeof item.price === "number" ? item.price : 0;
                      return (
                        <div
                          key={item.id}
                          className="flex gap-4 items-center border-b border-stone-100 pb-4"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="size-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold text-sm text-stone-900">
                              {item.title}
                            </h4>
                            <span className="text-xs text-stone-500">
                              {item.qty}x de R${" "}
                              {itemPreco.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-sm mb-1 text-emerald-600">
                              R${" "}
                              {(itemPreco * (item.qty || 1))
                                .toFixed(2)
                                .replace(".", ",")}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-100">
                    <div className="flex justify-between font-extrabold text-lg text-stone-900 mt-2">
                      <span>Total (c/ Entrega)</span>
                      <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      alert("Pedido Finalizado com Sucesso!");
                      onClose();
                    }}
                    className="mt-6 w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition text-white font-bold cursor-pointer shadow-md"
                  >
                    Finalizar Pedido
                  </button>
                </>
              )}
            </div>
          )}
          {!["meal", "cart"].includes(modal.type) && (
            <div className="py-4 text-center">
              <h3 className="font-bold text-xl text-stone-900">
                Recurso Ilustrativo
              </h3>
              <p className="text-stone-500 text-sm mt-2">
                Esta funcionalidade faz parte do protótipo do Cardápio Digital.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-stone-800 transition"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
