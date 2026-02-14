import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import {
  FiGlobe,
  FiMail,
  FiFileText,
  FiShoppingBag,
  FiBookOpen,
  FiCode,
} from "react-icons/fi";
import { IconType } from "react-icons";

// ============================================================
// 🔧 CONFIGURATION FILE
// Edit this file to customize your link-in-bio page!
// ============================================================

export interface LinkItem {
  title: string;
  url: string;
  icon: IconType;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface SiteConfig {
  profile: {
    name: string;
    username: string;
    bio: string;
    avatarUrl?: string;
  };
  links: LinkItem[];
  socials: SocialLink[];
  theme: {
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

const siteConfig: SiteConfig = {
  // ──────────────────────────────────────────────
  // 👤 Profile Information
  // ──────────────────────────────────────────────
  profile: {
    name: "Alex Johnson",
    username: "@alexjohnson",
    bio: "Full-stack developer & designer. Building beautiful things for the web. ✨",
    // Replace with your avatar URL or leave undefined for default
    avatarUrl: undefined,
  },

  // ──────────────────────────────────────────────
  // 🔗 Links (displayed as buttons)
  // ──────────────────────────────────────────────
  links: [
    {
      title: "My Portfolio",
      url: "https://example.com",
      icon: FiGlobe,
      description: "Check out my latest work",
    },
    {
      title: "Latest Blog Post",
      url: "https://blog.example.com",
      icon: FiBookOpen,
      description: "Read my thoughts on tech",
    },
    {
      title: "Open Source Projects",
      url: "https://github.com/example",
      icon: FiCode,
      description: "Explore my GitHub repos",
    },
    {
      title: "Newsletter",
      url: "https://newsletter.example.com",
      icon: FiMail,
      description: "Subscribe for weekly updates",
    },
    {
      title: "My Resume",
      url: "https://resume.example.com",
      icon: FiFileText,
      description: "Download my CV",
    },
    {
      title: "Merch Store",
      url: "https://store.example.com",
      icon: FiShoppingBag,
      description: "Get some cool swag",
    },
  ],

  // ──────────────────────────────────────────────
  // 📱 Social Media Links (icon row)
  // ──────────────────────────────────────────────
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: FaGithub,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: FaLinkedin,
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: FaYoutube,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      icon: FaTiktok,
    },
  ],

  // ──────────────────────────────────────────────
  // 🎨 Theme Colors (Tailwind gradient classes)
  // ──────────────────────────────────────────────
  theme: {
    gradientFrom: "from-violet-600",
    gradientVia: "via-purple-500",
    gradientTo: "to-fuchsia-500",
  },
};

export default siteConfig;
