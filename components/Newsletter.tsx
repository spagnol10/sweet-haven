"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-[#FFF7F3] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <h2
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "#5C3A21" }}
        >
          Receba Novidades e Promoções 🍬
        </h2>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Inscreva-se para receber as doçuras da Sweet Haven direto no seu e-mail.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            className="px-6 py-3 rounded-full border border-gray-300 w-full sm:w-auto flex-grow focus:outline-none focus:border-[#B9E5EE]"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#B9E5EE] text-[#5C3A21] font-semibold rounded-full hover:scale-105 transition-all"
          >
            Inscrever-se
          </button>
        </form>
      </motion.div>
    </section>
  );
}
