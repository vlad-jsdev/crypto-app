const dev = process.env.NODE_ENV !== "production";
export const SITE_URL = dev
  ? "http://localhost:3000"
  : "https://crypto-app-bay.vercel.app";
