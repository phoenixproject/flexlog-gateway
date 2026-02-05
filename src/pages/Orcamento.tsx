import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const serviceOptions = [
  "Mudança Residencial",
  "Mudança Comercial",
  "Transporte de Cargas",
  "Montagem e Desmontagem",
  "Embalagem Profissional",
  "Armazenamento",
];

const Orcamento = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    origin: "",
    destination: "",
    service: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    toast.success("Orçamento enviado com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", phone: "", email: "", origin: "", destination: "", service: "", notes: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao início
            </Link>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Solicitar <span className="text-gradient-orange">Orçamento</span>
            </h1>
            <p className="text-muted-foreground mb-10">
              Preencha o formulário abaixo e receba um orçamento personalizado sem compromisso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  maxLength={255}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Endereço de origem
                  </label>
                  <Input
                    placeholder="Rua, número, bairro, cidade"
                    value={formData.origin}
                    onChange={(e) => handleChange("origin", e.target.value)}
                    maxLength={200}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Endereço de destino
                  </label>
                  <Input
                    placeholder="Rua, número, bairro, cidade"
                    value={formData.destination}
                    onChange={(e) => handleChange("destination", e.target.value)}
                    maxLength={200}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de serviço
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Selecione um serviço</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Observações
                </label>
                <Textarea
                  placeholder="Descreva detalhes da sua mudança, lista de itens, etc."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  maxLength={1000}
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Enviar Orçamento
              </Button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Orcamento;
