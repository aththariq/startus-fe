export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "StartUs | Unlock Your Potential",
  description:
    "Empowering high school students to discover their potential and plan their future through self-discovery tools, mentorship, and skill-building workshops.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Roadmaps",
      href: "/roadmaps",
    },
    {
      label: "Mentorship",
      href: "/mentorship",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
