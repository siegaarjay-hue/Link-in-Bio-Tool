"use client";

import { motion } from "framer-motion";
import { LinkItem } from "@/config/site";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button block w-full rounded-2xl px-5 py-4 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/30 dark:to-fuchsia-500/30 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
          <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--text-primary)] text-sm sm:text-base truncate">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-xs text-[var(--text-secondary)] truncate mt-0.5">
              {link.description}
            </p>
          )}
        </div>
        <motion.div
          className="flex-shrink-0 text-[var(--text-secondary)]"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <svg
            className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}
