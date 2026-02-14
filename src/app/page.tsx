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
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-fuchsia-50 dark:from-[#0a0a12] dark:via-[#0f0e1a] dark:to-[#12091e] animated-gradient relative overflow-hidden">
      {/* Background decorative orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb-float absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-300/15 dark:bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="orb-float-delayed absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-fuchsia-300/15 dark:bg-fuchsia-600/8 rounded-full blur-[100px]" />
        <div className="orb-float-slow absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-200/10 dark:bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <ThemeToggle />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-[440px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center mb-7 sm:mb-8">
            <Avatar />

            <motion.h1
              className="mt-5 text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="mt-1 text-sm font-medium text-[var(--accent)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {profile.username}
            </motion.p>

            <motion.p
              className="mt-3 text-sm text-[var(--text-secondary)] max-w-[300px] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              {profile.bio}
            </motion.p>
          </div>

          {/* Divider */}
          <div className="section-divider mb-5 sm:mb-6" />

          {/* Links Section */}
          <div className="space-y-2.5 sm:space-y-3">
            {links.map((link, index) => (
              <LinkCard key={link.title} link={link} index={index} />
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider mt-6 mb-4 sm:mt-7 sm:mb-5" />

          {/* Social Links */}
          <SocialLinks />

          {/* Footer */}
          <motion.p
            className="text-center text-[11px] sm:text-xs text-[var(--text-tertiary)] mt-7 sm:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            Made with ❤️ using Link-in-Bio Tool
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
