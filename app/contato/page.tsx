"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  MessageCircleDashed as MessageCircle,
  Send,
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser"; // ✅ importe o EmailJS

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success(
            "Mensagem enviada com sucesso! Entraremos em contato em breve."
          );
          setFormData({ name: "", message: "" });
        },
        (error) => {
          console.error(error);
          toast.error("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "@sweethavenmt",
      link: "https://instagram.com/sweethavenmt",
      color: "#B9E5EE",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Fale conosco agora",
      link: "https://wa.me/5511999999999",
      color: "#B9E5EE",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-mail",
      description: "contato@sweethaven.com",
      link: "mailto:contato@sweethaven.com",
      color: "#B9E5EE",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-[#B9E5EE]/10 to-white">
      <Toaster position="top-center" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#5C3A21",
            }}
          >
            Entre em Contato
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Estamos prontos para criar doces especiais para você. Escolha a
            melhor forma de nos contatar!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: method.color }}
              >
                <div style={{ color: "#5C3A21" }}>{method.icon}</div>
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#5C3A21",
                }}
              >
                {method.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#5C3A21",
            }}
          >
            Envie uma Mensagem
          </h2>
          <p
            className="text-center text-gray-600 mb-8"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Preencha o formulário abaixo e retornaremos o mais breve possível
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "#5C3A21",
                }}
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#B9E5EE] focus:outline-none transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: "#5C3A21",
                }}
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#B9E5EE] focus:outline-none transition-colors resize-none"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
                placeholder="Conte-nos sobre seu pedido..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{
                backgroundColor: "#B9E5EE",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-[#5C3A21] text-white p-12 rounded-3xl"
        >
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Horário de Atendimento
          </h3>
          <p
            className="text-lg mb-2"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Segunda a Sexta: 9h às 18h
          </p>
          <p
            className="text-lg mb-6"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Sábado: 9h às 14h
          </p>
          <p
            className="text-sm text-white/80"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Encomendas com antecedência mínima de 48 horas
          </p>
        </motion.div>
      </div>
    </div>
  );
}
