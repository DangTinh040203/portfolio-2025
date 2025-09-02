import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import ToggleTheme from "@/components/common/ToggleTheme";
import { routing } from "@/configs/i18n/routing";
import { ThemeProvider } from "@/providers/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Showcasing my work and projects",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`
          ${poppins.className}
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <NextIntlClientProvider>
            <ToggleTheme />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
