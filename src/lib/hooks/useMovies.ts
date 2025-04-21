"use client";

import { useQuery } from "@tanstack/react-query";
import { moviesService } from "../services/movies";
import { ApiResponse, ISearch } from "../types";

export function useMovies({ page, per_page, search }: ISearch) {
    const disablePagination = !!search; 

    const { data: movies, isLoading: isLoadingMovies, isError: isErrorMovies } = useQuery<ApiResponse>({
        queryKey: ['get-movies', page, per_page, search],
        queryFn: () => moviesService.list({ page, per_page, search, disablePagination }),
    });

    return {
        movies,
        isLoadingMovies,
        isErrorMovies
    };
}