"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana Souza",
    text: "Os melhores brigadeiros que já comi! Perfeitos para presentes ❤️",
  },
  {
    name: "Lucas Pereira",
    text: "Entrega rápida e o sabor é incrível! Recomendo demais!",
  },
  {
    name: "Carla Mendes",
    text: "Fez toda a diferença na minha festa. Atendimento impecável!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#B9E5EE]/20 to-white py-24">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif", color: "#5C3A21" }}
        >
          O que dizem nossos clientes 💬
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-gray-600 italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-[#5C3A21]">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
