"use client";

import "@/styles/globals.css";
import { queryClient } from "@/lib/react-query";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <QueryClientProvider client={queryClient}>
          <main className="flex-1">
            <Suspense fallback={<Skeleton />}>
              {children}
            </Suspense>
          </main>
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}