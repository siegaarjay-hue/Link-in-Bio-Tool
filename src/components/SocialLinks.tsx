"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site";

export default function SocialLinks() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.4 }}
    >
      {siteConfig.socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6 + index * 0.04,
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            aria-label={social.name}
          >
            <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
