"use client";

import { useCart } from "@/components/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const { addToCart } = useCart();

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "brigadeiros", name: "Brigadeiros" },
    { id: "trufas", name: "Trufas" },
    { id: "caixas", name: "Caixas de Presente" },
    { id: "sobremesas", name: "Sobremesas" },
  ];

  const products = [
    {
      id: 1,
      name: "Brigadeiro Gourmet de Pistache",
      category: "brigadeiros",
      description: "Brigadeiro cremoso com cobertura de pistache triturado.",
      price: 5.0,
      image:
        "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Brigadeiro de Nutella",
      category: "brigadeiros",
      description: "Irresistível brigadeiro recheado com Nutella.",
      price: 6.0,
      image:
        "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Trufa de Chocolate Belga",
      category: "trufas",
      description: "Trufa premium com chocolate belga 70% cacau.",
      price: 8.5,
      image:
        "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Caixa Premium 12 Unidades",
      category: "caixas",
      description: "Caixa elegante com 12 doces sortidos.",
      price: 60.0,
      image:
        "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      name: "Torta de Brigadeiro",
      category: "sobremesas",
      description: "Torta cremosa com camadas de brigadeiro artesanal.",
      price: 45.0,
      image:
        "https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#5C3A21",
            }}
          >
            Nossos Produtos
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Explore nossa seleção de doces artesanais feitos com ingredientes
            premium.
          </p>
        </motion.header>

        {/* Category Filter */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border-2 hover:border-[#B9E5EE]"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category.id ? "#B9E5EE" : undefined,
                borderColor:
                  selectedCategory === category.id ? "#B9E5EE" : "#E5E7EB",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.nav>

        {/* Products Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C3A21]/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#5C3A21",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-gray-600 mb-2"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {product.description}
                </p>
                <p
                  className="text-gray-800 font-semibold mb-4"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  R$ {product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full px-6 py-2 rounded-full bg-[#5C3A21] text-white font-medium transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}
