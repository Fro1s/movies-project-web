import { ApiResponse, ISearch } from "../types";
import { api } from "./api";

export const moviesService = {
    async list({ page, per_page, search, disablePagination = false }: ISearch & { disablePagination?: boolean }): Promise<ApiResponse> {
        const query = new URLSearchParams();

        if (!disablePagination) {
            if (page) query.append("page", page.toString());
            if (per_page) query.append("limit", per_page.toString());
        } else {
            query.append("limit", "9999"); 
        }

        const response = await api.get<ApiResponse>(`/movies?${query.toString()}`);
        return response.data;
    }
};