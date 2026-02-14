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
      className="link-button block w-full rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 group"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25 + index * 0.06,
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 dark:from-violet-500/20 dark:to-fuchsia-500/20 flex items-center justify-center group-hover:from-violet-500/25 group-hover:to-fuchsia-500/25 transition-all duration-300">
          <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[var(--text-primary)] text-[13px] sm:text-[15px] truncate leading-tight">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] truncate mt-0.5 leading-tight">
              {link.description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors duration-300">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-40 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
