import type { Metadata } from "next";
import { New_Rocker, Poppins, Rajdhani, Rubik } from "next/font/google";
import "./globals.css";


const newRocker = New_Rocker({
  variable: "--font-newRocker",
  weight: "400",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Niazul Alam | MERN Stack Developer",
  description: "Portfolio of Niazul Alam, a MERN Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${rubik.variable} ${poppins.variable} ${newRocker.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
