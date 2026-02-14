"use client";

import { LinkItem } from "@/config/site";

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const Icon = link.icon;
  const delayClass = `animate-fade-in-delay-${Math.min(index + 4, 10)}`;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full rounded-xl bg-[var(--link-bg)] border border-[var(--link-border)] px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-200 ease-out hover:bg-[var(--link-hover-bg)] hover:border-[var(--link-hover-border)] hover:-translate-y-[1px] hover:shadow-sm active:translate-y-0 active:shadow-none group ${delayClass}`}
    >
      <div className="flex items-center gap-3.5">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--accent-hover)]">
          <Icon className="w-[18px] h-[18px] text-[var(--accent)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[var(--text-primary)] text-[14px] sm:text-[15px] truncate leading-tight tracking-[-0.01em]">
            {link.title}
          </h3>
          {link.description && (
            <p className="text-[12px] text-[var(--text-secondary)] truncate mt-0.5 leading-tight">
              {link.description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 text-[var(--text-tertiary)] transition-all duration-200 group-hover:text-[var(--text-secondary)] group-hover:translate-x-0.5">
          <svg
            className="w-4 h-4"
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
        </div>
      </div>
    </a>
  );
}
