"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";

type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  tag: string;
  image: string;
  sizes?: string[];
  colors?: string[];
};

type CartItem = {
  cartId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
};

const MERCHANDISE: Product[] = [
  {
    id: "camiseta-cf",
    name: "Camiseta Círculo de Fuego",
    type: "Prenda Oficial",
    price: 55000,
    tag: "Ulfur",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511801/Gemini_Generated_Image_ljnj9ljnj9ljnj9l_lygsom.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
  },
  {
    id: "gorra-ulfur",
    name: "Gorra Camionera Bordada",
    type: "Accesorios",
    price: 35000,
    tag: "Stock Limitado",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511812/Gorra_nehevr.jpg",
    colors: ["Negro"],
  },
  {
    id: "pocillo-rencor",
    name: "Pocillo Cerámico Rencor",
    type: "Accesorios",
    price: 25000,
    tag: "Negro Mate",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511806/Pocillo_qj9g1b.jpg",
  },
  {
    id: "picks-pack",
    name: "Pack de Picks / Uñas x5",
    type: "Insumos",
    price: 15000,
    tag: "Grosor 1 mm",
    image: "https://res.cloudinary.com/dfkd8tzhs/image/upload/q_auto/f_auto/v1780511817/Pick_bww0sh.jpg",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
};

export default function StorePage() {
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem("ulfur_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("ulfur_cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const addToCart = (product: Product, size?: string, color?: string) => {
    const cartId = `${product.id}-${size || "ns"}-${color || "nc"}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);
      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartId,
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          size,
          color,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const checkout = () => {
    if (cart.length === 0) return;

    let message = "Buen día, quiero comprar la siguiente mercancía de ULFUR:\n\n";
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
      const details = [];
      if (item.size) details.push(`Talla: ${item.size}`);
      if (item.color) details.push(`Color: ${item.color}`);
      const detailsStr = details.length > 0 ? ` (${details.join(", ")})` : "";

      message += `- ${item.quantity}x ${item.name}${detailsStr}\n`;
    });

    message += `\nTotal: ${formatPrice(total)}\n\nQuedo a la espera de las instrucciones para el pago.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/573163048406?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setCart([]);
    setIsCartOpen(false);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-void pt-16 md:pt-24 relative">
      <section className="grain relative mx-auto max-w-7xl px-6 pt-4 pb-32 md:pb-40">
        <div className="relative z-10 flex justify-between items-end mb-16">
          <ScrollReveal>
            <p className="section-subheading mb-2">Merchandise</p>
            <h1 className="section-heading">Mercancía Oficial</h1>
          </ScrollReveal>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex h-12 w-12 items-center justify-center border border-silver/10 bg-black/50 text-silver/60 hover:text-white hover:border-silver/40 transition-colors"
          >
            <ShoppingBag size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-800 text-[10px] font-bold text-white">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>

        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MERCHANDISE.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              delay={i * 0.1}
              onAddToCart={addToCart}
              onImageClick={setPreviewImage}
            />
          ))}
        </div>
      </section>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-void border-l border-silver/10 h-full flex flex-col shadow-2xl">
            <div className="flex items-center justify-between border-b border-silver/10 p-6">
              <h2 className="text-xl text-silver/80 uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
                Arsenal
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-silver/40 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 grain">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-silver/30 space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p className="uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-barlow-condensed)" }}>El carrito está vacío</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 border border-silver/10 bg-black/40 p-4">
                    <div className="flex-1">
                      <h4 className="text-silver/80 uppercase tracking-wide text-sm font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                        {item.name}
                      </h4>
                      <div className="text-silver/40 text-xs mt-1 uppercase tracking-wider space-x-2">
                        {item.size && <span>Talla: {item.size}</span>}
                        {item.color && <span>Color: {item.color}</span>}
                      </div>
                      <div className="text-red-700/80 font-bold mt-2 text-sm tracking-widest">
                        {formatPrice(item.price)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button onClick={() => removeFromCart(item.cartId)} className="text-silver/30 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>

                      <div className="flex items-center border border-silver/10 bg-black mt-4">
                        <button onClick={() => updateQuantity(item.cartId, -1)} className="p-1.5 text-silver/50 hover:text-white">
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm text-silver/80 font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, 1)} className="p-1.5 text-silver/50 hover:text-white">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-silver/10 bg-black p-6 pb-28">
              <div className="flex justify-between items-center mb-6">
                <span className="text-silver/50 uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Total</span>
                <span className="text-xl text-silver/90 font-bold tracking-widest">{formatPrice(cartTotal)}</span>
              </div>

              <button
                onClick={checkout}
                disabled={cart.length === 0}
                className="w-full bg-red-900/80 hover:bg-red-800 text-white uppercase tracking-widest font-bold py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}

      {previewImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setPreviewImage(null)} />
          <div className="relative max-w-3xl w-full max-h-[80vh] flex items-center justify-center">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute -top-12 right-0 text-silver/60 hover:text-white transition-colors bg-black/50 p-2 border border-silver/10 rounded-none"
            >
              <X size={24} />
            </button>
            <img
              src={previewImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[80vh] object-contain border border-silver/10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  delay,
  onAddToCart,
  onImageClick
}: {
  product: Product;
  delay: number;
  onAddToCart: (p: Product, s?: string, c?: string) => void;
  onImageClick: (url: string) => void;
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  const handleAdd = () => {
    onAddToCart(product, product.sizes ? selectedSize : undefined, product.colors ? selectedColor : undefined);
  };

  return (
    <ScrollReveal delay={delay}>
      <div className="border border-silver/10 bg-zinc-950/20 p-6 h-full flex flex-col justify-between transition-all duration-300 hover:border-red-600/30 group">
        <div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] uppercase tracking-widest text-silver/30 font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              {product.type}
            </span>
            <span className="text-[9px] border border-silver/10 px-2 py-0.5 text-silver/40 uppercase tracking-wider">
              {product.tag}
            </span>
          </div>

          <div
            onClick={() => onImageClick(product.image)}
            className="aspect-square w-full border border-silver/5 bg-black/40 flex items-center justify-center mb-6 relative overflow-hidden cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 py-1 bg-black/80 border-t border-silver/5 text-center">
              <span className="text-[9px] tracking-widest uppercase text-silver/20 font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                VER DETALLE
              </span>
            </div>
          </div>

          <h3 className="text-silver/80 text-base font-medium uppercase tracking-wide group-hover:text-silver transition-colors" style={{ fontFamily: "var(--font-cinzel)" }}>
            {product.name}
          </h3>

          <div className="mt-4 flex flex-col gap-2">
            {product.sizes && (
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-black/50 border border-silver/10 text-silver/60 text-xs p-2 outline-none focus:border-red-900 uppercase tracking-wider"
              >
                {product.sizes.map(size => <option key={size} value={size}>Talla {size}</option>)}
              </select>
            )}

            {product.colors && (
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="bg-black/50 border border-silver/10 text-silver/60 text-xs p-2 outline-none focus:border-red-900 uppercase tracking-wider"
              >
                {product.colors.map(color => <option key={color} value={color}>{color}</option>)}
              </select>
            )}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-silver/5 flex flex-col gap-3">
          <span className="text-silver/80 font-bold text-xl tracking-widest" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="w-full bg-red-900/80 hover:bg-red-700 text-white text-[11px] uppercase tracking-widest font-bold py-2.5 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}