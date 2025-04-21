"use client";

import { useMovies } from "@/lib/hooks/useMovies";
import { MovieCard } from "@/components/cards/movie-card";
import { MovieCardSkeleton } from "@/components/skeletons/movie-card-skeleton";
import { Pagination } from "@/components/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { CarouselMain } from "@/components/carousel/highlights-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { z } from "zod";
import Search from "@/components/search";
import { Movie } from "@/lib/types";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = z.coerce.number().parse(searchParams.get("page") ?? "1");
  const per_page = z.coerce.number().parse(searchParams.get("per_page") ?? "12");

  const search = searchParams.get("search") || "";

  const { movies, isLoadingMovies } = useMovies({
    page,
    per_page,
    search,
  });

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const filteredMovies = search
    ? movies?.data?.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    : movies?.data;

  const highlights = search
    ? filteredMovies
    : movies?.data?.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {isLoadingMovies || !highlights ? (
        <Skeleton />
      ) : (
        highlights.length > 0 && <CarouselMain movies={highlights} />
      )}

      <section className="w-full py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMovies && filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              <FocusCards>
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    title={movie.title}
                    year={movie.year.toString()}
                    image={movie.image_url}
                    crew={movie.crew}
                    rating={movie.rating}
                  />
                ))}
              </FocusCards>
            </div>
          ) : isLoadingMovies ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
              {Array.from({ length: 12 }).map((_, index) => (
                <MovieCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Nenhum filme encontrado.</p>
          )}
        </div>
      </section>

      {filteredMovies && filteredMovies.length > 0 && (
        <section className="w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Pagination
                pageIndex={movies?.pagination?.page ?? 1}
                totalCount={movies?.pagination?.total ?? 0}
                perPage={movies?.pagination?.limit ?? 12}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
