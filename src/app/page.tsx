"use client"

import { useMovies } from "@/lib/hooks/useMovies"
import { MovieCard } from "@/components/cards/movie-card"
import { MovieCardSkeleton } from "@/components/skeletons/movie-card-skeleton"
import { Pagination } from "@/components/pagination"
import { useRouter, useSearchParams } from "next/navigation"
import { CarouselMain } from "@/components/carousel/highlights-carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { z } from "zod"
import Search from "@/components/search"
import { Movie } from "@/lib/types"
import { FocusCards } from "@/components/ui/focus-cards"

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = z.coerce.number().parse(searchParams.get('page') ?? '1')
  const per_page = z.coerce.number().parse(searchParams.get('per_page') ?? '12')

  const [searchDebounced, setSearchDebounced] = useState<string>(
    searchParams.get('search') || ''
  )

  const { movies, isLoadingMovies } = useMovies({
    page,
    per_page,
    search: searchDebounced,
  })

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", newPage.toString())
    router.push(`?${params.toString()}`)
  }

  const filteredMovies = searchDebounced
    ? movies?.data?.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchDebounced.toLowerCase())
    )
    : movies?.data

  const highlights = searchDebounced
    ? filteredMovies
    : movies?.data?.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {isLoadingMovies || !highlights ? (
        <Skeleton />
      ) : (
        highlights.length > 0 && <CarouselMain movies={highlights} />
      )}

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Search
            handleSetSearch={setSearchDebounced}
            page={page}
            placeholder="Buscar filme..."
            showLabel={false}
          />
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        {filteredMovies && filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            <FocusCards>
              {filteredMovies.map((movie, index) => (
                <MovieCard
                  key={index}
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
      </section>

      {filteredMovies && filteredMovies.length > 0 && (
        <div className="py-12 flex justify-center">
          <Pagination
            pageIndex={movies?.pagination?.page ?? 1}
            totalCount={movies?.pagination?.total ?? 0}
            perPage={movies?.pagination?.limit ?? 12}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}
