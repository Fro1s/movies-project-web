"use client"

import "@/styles/globals.css";
import { queryClient } from "@/lib/react-query";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
