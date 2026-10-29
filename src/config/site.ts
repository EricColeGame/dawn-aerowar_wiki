export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "DAWN AEROWAR Wiki",
  shortName: "DAWN AEROWAR",
  logoText: "DA",
  tagline: "Story, Episodes, Characters & Soundtrack",
  description: "Your DAWN AEROWAR wiki for story, characters, episodes, soundtrack, release details and official sources.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dawn-aerowar.wiki",
  supportEmail: "support@dawn-aerowar.wiki",
  gameUrl: "https://store.steampowered.com/app/2991650/",
  heroVideoId: "iRD_UmFF5sU",
  social: {
    twitter: "https://x.com/dawnaerowar",
    youtube: "https://www.youtube.com/@JosePavli",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
