import { motion } from "framer-motion";
import { Heart, Shield, Clock, Users, CheckCircle, DollarSign } from "lucide-react";

const expectations = [
  {
    icon: Heart,
    title: "Tranquilidade",
    text: "Cada detalhe da sua mudança é planejado para que você tenha zero preocupações durante todo o processo.",
  },
  {
    icon: Shield,
    title: "Confiança",
    text: "Equipamentos de qualidade e equipe treinada garantem a segurança dos seus bens do início ao fim.",
  },
  {
    icon: CheckCircle,
    title: "Segurança",
    text: "Embalagem profissional, manuseio cuidadoso e veículos adequados para cada tipo de carga.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    text: "Respeito total ao tempo do cliente. Cumprimos prazos e horários com rigor.",
  },
  {
    icon: Users,
    title: "Atendimento Humano",
    text: "Uma equipe que entende que cada mudança é única e merece atenção personalizada.",
  },
  {
    icon: DollarSign,
    title: "Custo-benefício Justo",
    text: "Preços transparentes e justos. Sem surpresas, sem taxas ocultas.",
  },
];

const ExpectationsSection = () => {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-foreground mb-4">
            Muito mais que uma mudança.
            <br />
            <span className="text-gradient-orange">Uma experiência tranquila.</span>
          </h2>
          <p className="text-dark-foreground/60 max-w-2xl mx-auto">
            Ao contratar a FLEXLOG, queremos que o cliente tenha a certeza de que fez a escolha certa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-dark-muted/50 rounded-xl p-6 border border-dark-muted hover:border-primary/40 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-orange-gradient flex items-center justify-center mb-4 shadow-orange">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-bold text-dark-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-foreground/60 text-sm leading-relaxed">
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

export default ExpectationsSection;
