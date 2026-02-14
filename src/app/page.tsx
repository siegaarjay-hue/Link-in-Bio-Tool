"use client";

import { motion } from "framer-motion";
import siteConfig from "@/config/site";
import Avatar from "@/components/Avatar";
import LinkCard from "@/components/LinkCard";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const { profile, links } = siteConfig;

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 dark:from-[#0f0a1a] dark:via-[#1a0e2e] dark:to-[#150a20] animated-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-400/20 dark:bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-400/20 dark:bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <ThemeToggle />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <motion.div
          className="glass-card rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <Avatar />

            <motion.h1
              className="mt-5 text-2xl sm:text-3xl font-bold text-[var(--text-primary)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="mt-1 text-sm font-medium text-violet-600 dark:text-violet-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              {profile.username}
            </motion.p>

            <motion.p
              className="mt-3 text-sm text-[var(--text-secondary)] max-w-xs leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {profile.bio}
            </motion.p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <LinkCard key={link.title} link={link} index={index} />
            ))}
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Footer */}
          <motion.p
            className="text-center text-xs text-[var(--text-secondary)] mt-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            Made with ❤️ using Link-in-Bio Tool
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
