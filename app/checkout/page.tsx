"use client";
import { useCart } from "@/components/CartContext";
import { useState } from "react";

export default function CheckoutPix() {
  const { cart, clearCart } = useCart();
  const [qr, setQr] = useState<string | null>(null);

  const handlePixPayment = async () => {
    const res = await fetch("/api/pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });
    const data = await res.json();
    setQr(data.qr_code_base64);
  };

  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-8" style={{ color: "#5C3A21" }}>
        Pagamento via Pix 💸
      </h1>

      {!qr ? (
        <button
          onClick={handlePixPayment}
          className="bg-[#5C3A21] text-white px-8 py-4 rounded-full hover:scale-105 transition-all"
        >
          Gerar QR Code Pix
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={`data:image/png;base64,${qr}`}
            alt="QR Code Pix"
            className="w-64 h-64"
          />
          <p className="mt-4 text-gray-700">
            Escaneie com o app do seu banco para concluir o pagamento.
          </p>
        </div>
      )}
    </div>
  );
}
