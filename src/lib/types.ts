
export interface Movie {
    title: string
    image_url: string
    rating: number
    year: number
    crew: string
}

export interface MovieCardProps {
    title: string;
    year: string;
    image: string;
    crew: string;
    rating: number;
};

export interface ISearch {
    search?: string;
    per_page?: number;
    page?: number;
}

export interface IPaginate {
    pagination: {
        total: number
        page: number
        limit: number
        maxPage: number
    }
}

export interface ApiResponse extends IPaginate {
    error: boolean;
    message: string;
    data: Movie[]
}


