"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site";

export default function Avatar() {
  const { name, avatarUrl } = siteConfig.profile;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
      className="relative"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-[3px] ring-[var(--accent)]/20 shadow-lg shadow-violet-500/10 dark:shadow-violet-500/5">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {initials}
            </span>
          </div>
        )}
      </div>
      {/* Online indicator */}
      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full border-[2.5px] border-white dark:border-[#111122] shadow-sm" />
    </motion.div>
  );
}
