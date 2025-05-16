import { FooterColumnType, LinkType, Option } from "@/types/types";

export const NAV_LINKS: LinkType[] = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/shows" },
  { name: "Genre", path: "/genre" },
];

export const TRENDING_TYPES: Option[] = [
  { label: "All", value: "all" },
  { label: "Movies", value: "movies" },
  { label: "TV Shows", value: "tvshows" },
];

export const FOOTER_CONTENT: FooterColumnType[] = [
  {
    title: "About",
    links: [{ name: "About Us", path: "/" }],
  },
  {
    title: "Account",
    links: [
      { name: "Sign In", path: "/" },
      { name: "Account Settings", path: "/" },
    ],
  },
  {
    title: "Legal Information",
    links: [
      { name: "Privacy Policy", path: "/" },
      { name: "Terms of Service", path: "/" },
      { name: "Copyright Notice", path: "/" },
    ],
  },
  {
    title: "Contact",
    links: [{ name: "Contact Us", path: "/" }],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "Trending", path: "/" },
      { name: "Movies", path: "/" },
      { name: "TV Shows", path: "/" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { name: "FAQ", path: "/" },
      { name: "Help Center", path: "/" },
    ],
  },
];
