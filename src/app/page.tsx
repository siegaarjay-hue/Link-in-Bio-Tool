"use client";

import siteConfig from "@/config/site";
import Avatar from "@/components/Avatar";
import LinkCard from "@/components/LinkCard";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const { profile, links } = siteConfig;

  return (
    <main className="min-h-screen bg-[var(--bg)] relative">
      <ThemeToggle />

      <div className="flex flex-col items-center min-h-screen px-5 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[480px]">
          {/* Card */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-[var(--card-shadow)] p-6 sm:p-8 md:p-10 animate-fade-in">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <Avatar />

              <h1 className="mt-5 text-[22px] sm:text-2xl font-semibold text-[var(--text-primary)] tracking-[-0.02em] leading-tight animate-fade-in-delay-1">
                {profile.name}
              </h1>

              <p className="mt-1.5 text-sm font-medium text-[var(--accent)] tracking-[-0.01em] animate-fade-in-delay-2">
                {profile.username}
              </p>

              <p className="mt-3 text-[14px] text-[var(--text-secondary)] max-w-[320px] leading-[1.6] animate-fade-in-delay-3">
                {profile.bio}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--divider)] mb-6" />

            {/* Links Section */}
            <div className="space-y-2.5">
              {links.map((link, index) => (
                <LinkCard key={link.title} link={link} index={index} />
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-[var(--divider)] mt-6 mb-5" />

            {/* Social Links */}
            <SocialLinks />

            {/* Footer */}
            <p className="text-center text-[11px] text-[var(--text-tertiary)] mt-8 tracking-[0.01em] animate-fade-in-delay-10">
              Made with ❤️ using Link-in-Bio Tool
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
