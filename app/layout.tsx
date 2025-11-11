import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Newsletter from "@/components/Newsletter";
import { CartProvider } from "@/components/CartContext";

export const metadata = {
  title: "Sweet Haven - Doces Artesanais",
  description: "Doces que transformam momentos em doçura 🍬",
  openGraph: {
    title: "Sweet Haven - Doces Artesanais",
    description: "Doces artesanais feitos com carinho por Manu Techio.",
    url: "https://sweethaven.vercel.app",
    siteName: "Sweet Haven Confeitaria",
    images: [
      {
        url: "https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Sweet Haven Confeitaria",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          {/* <Newsletter /> */}
          <FloatingWhatsApp />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
