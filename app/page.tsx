"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Brigadeiros Gourmet",
      image:
        "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      name: "Trufas Artesanais",
      image:
        "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      name: "Caixas Personalizadas",
      image:
        "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      name: "Sobremesas Premium",
      image:
        "https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ana Paula",
      text: "Os brigadeiros são simplesmente perfeitos! Encomendei para meu casamento e todos adoraram.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Silva",
      text: "Qualidade excepcional e atendimento impecável. Recomendo muito!",
      rating: 5,
    },
    {
      id: 3,
      name: "Mariana Costa",
      text: "As caixas personalizadas são lindas e os doces deliciosos. Perfeito para presentes!",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#B9E5EE]/20 to-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -50,
                }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#5C3A21",
                  }}
                >
                  Sweet Haven
                </h1>
                <p
                  className="text-2xl md:text-3xl mb-6 text-[#5C3A21]/80"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Doces que transformam momentos em doçura
                </p>
                <p
                  className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Bem-vindo à Sweet Haven Confeitaria, onde cada doce é feito
                  com carinho e dedicação por Manu Techio. Criamos brigadeiros,
                  trufas e sobremesas artesanais que encantam o paladar e
                  aquecem o coração.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{
                    backgroundColor: "#B9E5EE",
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  Encomendar Agora
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : 50,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Doces artesanais Sweet Haven"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C3A21]/30 to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#B9E5EE] rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#E8D5C4] rounded-full blur-3xl opacity-50"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#5C3A21",
                }}
              >
                Nossos Produtos
              </h2>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Cada doce é uma obra de arte feita com ingredientes selecionados
                e muito amor
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C3A21]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p
                        className="text-white text-xl font-semibold p-6"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {product.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#5C3A21",
                  color: "white",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Ver Todos os Produtos
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-[#B9E5EE]/10 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#5C3A21",
                }}
              >
                O Que Dizem Nossos Clientes
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#B9E5EE] text-[#B9E5EE]"
                      />
                    ))}
                  </div>
                  <p
                    className="text-gray-700 mb-4"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    "{t.text}"
                  </p>
                  <p
                    className="font-semibold"
                    style={{
                      fontFamily: "'Quicksand', sans-serif",
                      color: "#5C3A21",
                    }}
                  >
                    {t.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5C3A21] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Pronto para adoçar seu dia?
              </h2>
              <p
                className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Entre em contato e faça sua encomenda personalizada
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "#B9E5EE",
                  color: "#5C3A21",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Fale Conosco
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
