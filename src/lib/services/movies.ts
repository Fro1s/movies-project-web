"use client"
import { ApiResponse, ISearch } from "../types"
import { api } from "./api"

export const moviesService = {
    async list({ page, per_page, search }: ISearch): Promise<ApiResponse> {
        try {
            const response = await api.get<ApiResponse>(`/movies?page=${page}&limit=${per_page}&search=${search}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching movies:", error);
            throw error;
        }
    }

}