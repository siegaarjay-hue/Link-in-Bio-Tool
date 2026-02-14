"use client";

import siteConfig from "@/config/site";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-2 animate-fade-in-delay-9">
      {siteConfig.socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--accent-subtle)] border border-transparent flex items-center justify-center text-[var(--text-secondary)] transition-all duration-200 ease-out hover:bg-[var(--accent-hover)] hover:text-[var(--accent)] hover:-translate-y-[1px]"
            aria-label={social.name}
          >
            <Icon className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px]" />
          </a>
        );
      })}
    </div>
  );
}
