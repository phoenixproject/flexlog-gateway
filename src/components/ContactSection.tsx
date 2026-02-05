import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@flexlog.com.br",
    href: "mailto:contato@flexlog.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "São Paulo, SP - Brasil",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 8h - 18h | Sáb: 8h - 13h",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-foreground mb-4">
            Fale <span className="text-gradient-orange">Conosco</span>
          </h2>
          <p className="text-dark-foreground/60 max-w-2xl mx-auto">
            Estamos prontos para ajudar você. Entre em contato para tirar dúvidas ou solicitar um orçamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-dark-muted/50 border border-dark-muted hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-dark-foreground/50 mb-1">{item.label}</p>
                  <p className="text-dark-foreground font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Falar agora no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-dark-muted h-[400px] bg-dark-muted/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976836815386!2d-46.65615818502207!3d-23.56509188468095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização FLEXLOG"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
