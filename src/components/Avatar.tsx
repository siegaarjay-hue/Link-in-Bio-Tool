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
      <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/30 dark:ring-white/10 shadow-xl">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{initials}</span>
          </div>
        )}
      </div>
      {/* Online indicator */}
      <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white dark:border-slate-900 shadow-sm" />
    </motion.div>
  );
}
