import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5C3A21] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#B9E5EE",
              }}
            >
              Sweet Haven
            </h3>
            <p
              className="text-sm text-white/80"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Doces artesanais que transformam momentos em doçura
            </p>
          </div>

          <div className="text-center">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-sm text-white/80 hover:text-[#B9E5EE] transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Início
              </a>
              <a
                href="/produtos"
                className="text-sm text-white/80 hover:text-[#B9E5EE] transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Produtos
              </a>
              <a
                href="/contato"
                className="text-sm text-white/80 hover:text-[#B9E5EE] transition-colors"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                Contato
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Siga-nos
            </h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com/sweethavenmt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#B9E5EE] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#5C3A21]" />
              </a>
              <a
                href="mailto:contato@sweethaven.com"
                className="w-10 h-10 rounded-full bg-[#B9E5EE] flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#5C3A21]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p
            className="text-sm text-white/70"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            © {new Date().getFullYear()} Sweet Haven Confeitaria. Criado por
            Manu Techio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
