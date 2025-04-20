"use client"

import { ApiResponse, ISearch } from "../types";
import { moviesService } from "../services/movies";
import { useQuery } from "@tanstack/react-query";

export function useMovies({ page, per_page, search }: ISearch) {

    const { data: movies, isLoading: isLoadingMovies, isError: isErrorMovies } = useQuery<ApiResponse>({
        queryKey: ['get-movies', page, per_page, search],
        queryFn: () => moviesService.list({ page, per_page, search }),
    })

    return {
        movies,
        isLoadingMovies,
        isErrorMovies
    }
}