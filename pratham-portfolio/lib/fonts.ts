import { Inter } from "next/font/google";

// No `weight` list: Next.js serves Inter as a single variable font file that
// covers every weight used (300–900), instead of one file per weight.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
