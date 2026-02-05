import { motion } from "framer-motion";
import { Home, Building2, Truck, Wrench, Package, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Mudanças Residenciais",
    desc: "Transporte seguro de todos os seus móveis e pertences pessoais com cuidado e organização.",
  },
  {
    icon: Building2,
    title: "Mudanças Comerciais",
    desc: "Mudanças empresariais com planejamento estratégico para minimizar o tempo de inatividade.",
  },
  {
    icon: Truck,
    title: "Transporte de Cargas",
    desc: "Transporte especializado para diferentes tipos de carga com segurança e pontualidade.",
  },
  {
    icon: Wrench,
    title: "Montagem e Desmontagem",
    desc: "Equipe especializada em montagem e desmontagem de móveis com ferramentas adequadas.",
  },
  {
    icon: Package,
    title: "Embalagem Profissional",
    desc: "Embalamos seus pertences com materiais de qualidade para garantir proteção total.",
  },
  {
    icon: Warehouse,
    title: "Armazenamento",
    desc: "Espaço seguro e climatizado para guardar seus bens pelo tempo que precisar.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos <span className="text-gradient-orange">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para tornar sua mudança uma experiência simples e segura.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-8 border border-border h-full hover:border-primary/40 hover:shadow-xl hover:shadow-orange/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-orange transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/orcamento" className="flex items-center gap-2">
              Solicitar Orçamento Gratuito
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
