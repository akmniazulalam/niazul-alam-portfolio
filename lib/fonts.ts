import { New_Rocker, Poppins, Rajdhani, Rubik } from "next/font/google";

const newRocker = New_Rocker({
  variable: "--font-newRocker",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  newRocker,
  rajdhani,
  rubik,
  poppins,
} as const;

export const fontVariables = [
  rajdhani.variable,
  rubik.variable,
  poppins.variable,
  newRocker.variable,
].join(" ");
