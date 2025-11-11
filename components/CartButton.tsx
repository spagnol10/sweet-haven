"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartButton() {
  const { cart } = useCart();

  return (
    <Link
      href="/cart"
      className="fixed bottom-6 right-6 bg-[#5C3A21] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <ShoppingBag className="w-6 h-6" />
      {cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#B9E5EE] text-[#5C3A21] rounded-full text-xs px-2 py-1">
          {cart.length}
        </span>
      )}
    </Link>
  );
}
