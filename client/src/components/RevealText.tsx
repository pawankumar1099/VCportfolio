import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealText({ text, className = "", delay = 0 }: RevealTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
