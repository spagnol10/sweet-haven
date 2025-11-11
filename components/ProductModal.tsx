"use client";
import { X } from "lucide-react";
import Image from "next/image";

export default function ProductModal({ product, onClose }: any) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-xl mb-4 w-full object-cover"
        />
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#5C3A21" }}>
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description ||
            "Doces feitos artesanalmente com ingredientes de qualidade, perfeitos para qualquer ocasião!"}
        </p>
        <button
          className="px-6 py-3 bg-[#5C3A21] text-white rounded-full hover:scale-105 transition-all"
          onClick={() =>
            window.open(
              "https://wa.me/5545999999999?text=Olá!%20Quero%20encomendar%20o%20produto:%20" +
                product.name,
              "_blank"
            )
          }
        >
          Fazer Pedido 🍬
        </button>
      </div>
    </div>
  );
}
