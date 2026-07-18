import { Navbar, Footer, BackToTop } from "@/components/layout";
import { fontVariables } from "@/lib/fonts";
import { metadata } from "@/lib/metadata";
import { cn } from "@/utils/cn";

import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fontVariables, "h-full antialiased scroll-smooth")}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
