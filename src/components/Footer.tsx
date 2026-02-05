import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import flexlogLogo from "@/assets/flexlog-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={flexlogLogo} alt="FLEXLOG" className="h-10 w-auto mb-4" />
            <p className="text-dark-foreground/50 text-sm leading-relaxed">
              Mudanças com segurança, agilidade e confiança. Sua mudança em boas mãos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-dark-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              {["Início", "Serviços", "Orçamento", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Início" ? "/" : item === "Orçamento" ? "/orcamento" : `/#${item.toLowerCase()}`}
                    className="text-sm text-dark-foreground/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-dark-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-dark-foreground/50">
              <li>Mudanças Residenciais</li>
              <li>Mudanças Comerciais</li>
              <li>Transporte de Cargas</li>
              <li>Embalagem Profissional</li>
              <li>Montagem e Desmontagem</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-dark-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-dark-foreground/50 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@flexlog.com.br"
                  className="flex items-center gap-2 text-sm text-dark-foreground/50 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contato@flexlog.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-dark-foreground/50">
                <MapPin className="h-4 w-4" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-muted mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-foreground/40">
            © {new Date().getFullYear()} FLEXLOG. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-dark-foreground/40">
            <span>Política de Privacidade</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
