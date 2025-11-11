"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "#5C3A21" }}>
        Seu Carrinho
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio 😢</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
              >
                <span>{p.name}</span>
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="text-red-500 hover:underline"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-right">
            <p className="text-xl font-semibold">Total: R$ {total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-[#5C3A21] text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
            >
              Finalizar Compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
