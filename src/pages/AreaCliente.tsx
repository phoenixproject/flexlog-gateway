import { motion } from "framer-motion";
import { ArrowLeft, Lock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AreaCliente = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao início
            </Link>

            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Truck className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Área do <span className="text-gradient-orange">Cliente</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Acompanhe sua mudança em tempo real.
            </p>

            <div className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 text-left">
                    CPF ou E-mail
                  </label>
                  <Input placeholder="Digite seu CPF ou e-mail" maxLength={100} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 text-left">
                    Senha
                  </label>
                  <Input type="password" placeholder="Sua senha" maxLength={100} />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Acessar
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Área restrita para clientes da FLEXLOG. Entre em contato para obter suas credenciais.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AreaCliente;
