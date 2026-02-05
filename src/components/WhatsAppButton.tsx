import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </motion.a>
  );
};

export default WhatsAppButton;
