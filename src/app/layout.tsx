"use client";

import "@/styles/globals.css";
import { queryClient } from "@/lib/react-query";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Movies Project Web</title>
        <meta name="description" content="Projeto de catálogo de filmes, permitindo listar e visualizar os filmes mais bem avaliados com informações como título, ano de lançamento, elenco e nota." />
        <meta name="keywords" content="catalogo de filmes, filmes bem avaliados, Next.js, React, Tailwind CSS, Cypress, filmes" />
        <meta name="author" content="Seu Nome ou Nome da Equipe" />
        <meta property="og:title" content="Movies Project Web - Catálogo de Filmes" />
        <meta property="og:description" content="Exiba os melhores filmes, com destaque para avaliações, ano de lançamento, elenco e muito mais. Moderno e responsivo!" />
        <meta name="twitter:title" content="Movies Project Web - Catálogo de Filmes" />
        <meta name="twitter:description" content="Projeto de catálogo de filmes, permitindo listar e visualizar os filmes mais bem avaliados com informações como título, ano de lançamento, elenco e nota." />
      </Head>
      <body className="min-h-screen flex flex-col antialiased">
        <Suspense fallback={<Skeleton />}>
          <Header />
          <QueryClientProvider client={queryClient}>
            <main className="flex-1 min-h-[calc(100vh-8rem)]">
              {children}
            </main>
          </QueryClientProvider>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}