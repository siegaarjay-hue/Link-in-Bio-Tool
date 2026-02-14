"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site";

export default function SocialLinks() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      {siteConfig.socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-11 h-11 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-violet-500 dark:hover:text-violet-400"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7 + index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            aria-label={social.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
