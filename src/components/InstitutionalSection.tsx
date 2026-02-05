import { motion } from "framer-motion";
import { Truck, Globe, Star } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Missão",
    text: "Oferecer soluções em mudanças e transportes com segurança, agilidade e responsabilidade, garantindo tranquilidade aos nossos clientes em cada etapa do processo, do carregamento à entrega final.",
  },
  {
    icon: Globe,
    title: "Visão",
    text: "Ser reconhecida como uma transportadora referência em mudanças residenciais e comerciais, destacando-se pela confiança, qualidade no atendimento e compromisso com prazos, expandindo nossa atuação de forma sólida e sustentável.",
  },
  {
    icon: Star,
    title: "Valores",
    text: "Compromisso com o cliente • Responsabilidade e segurança • Transparência • Pontualidade • Profissionalismo • Confiança — relações construídas com seriedade e respeito.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const InstitutionalSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quem é a <span className="text-gradient-orange">FLEXLOG</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma empresa comprometida em oferecer a melhor experiência em mudanças e transportes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-card rounded-xl p-8 border border-border h-full hover:border-primary/40 transition-all duration-300 hover:shadow-orange/10 hover:shadow-xl">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalSection;
