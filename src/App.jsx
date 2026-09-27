import { useState, useEffect } from "react";
import {
  Header,
  Hero,
  Benefits,
  Explorer,
  Features,
  Testimonials,
  Newsletter,
  Footer,
  Modal,
} from "./components/";

function App() {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes?limit=50");
        const data = await response.json();

        if (data && data.recipes) {
          const formatadas = data.recipes.map((item) => ({
            id: item.id,
            title: item.name,
            image: item.image,
            readyInMinutes:
              (item.prepTimeMinutes || 10) + (item.cookTimeMinutes || 15),
            price: ((item.id * 7) % 25) + 19.9,
            dishTypes: item.mealType || ["Especial"],
          }));
          setComidas(formatadas);
        }
      } catch (error) {
        console.error("Erro ao obter receitas da API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const download = () => setModal({ type: "download" });
  const openCart = () => setModal({ type: "cart" });

  const addToCart = (comida, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === comida.id);
      if (existing) {
        return prev.map((item) =>
          item.id === comida.id ? { ...item, qty: item.qty + quantity } : item,
        );
      }
      return [...prev, { ...comida, qty: quantity }];
    });
    setModal(null);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased font-sans">
      <Header
        onDownload={download}
        cartCount={cart.reduce((acc, item) => acc + item.qty, 0)}
        onOpenCart={openCart}
      />
      <main>
        <Hero onDownload={download} />
        <Benefits />
        <Explorer
          comidas={comidas}
          loading={loading}
          onMeal={(comida) => setModal({ type: "meal", comida })}
        />
        <Features />
        <Testimonials />
        <Newsletter onDownload={download} />
      </main>
      <Footer onInfo={(type) => setModal({ type })} />
      <Modal
        modal={modal}
        onClose={() => setModal(null)}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
