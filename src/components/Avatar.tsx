"use client";

import siteConfig from "@/config/site";

export default function Avatar() {
  const { name, avatarUrl } = siteConfig.profile;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="animate-fade-in">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-[var(--divider)]">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
