import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface PaginationProps {
    pageIndex: number;
    totalCount: number;
    perPage: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    pageIndex,
    totalCount,
    perPage,
    onPageChange,
}: PaginationProps) {
    const totalPages = Math.ceil(totalCount / perPage);

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
            <Button
                disabled={pageIndex === 1}
                onClick={() => onPageChange(pageIndex - 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 gap-2.5 p-2 sm:p-4 rounded-lg bg-white text-primary border border-primary hover:text-white hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="size-7 sm:h-7 sm:w-7" />
            </Button>

            {pageIndex > 2 && (
                <span className="text-sm sm:text-xl text-primary">...</span>
            )}

            {Array.from({ length: 4 }, (_, index) => pageIndex - 1 + index)
                .filter((page) => page > 0 && page <= totalPages)
                .map((page) => (
                    <Button
                        key={page}
                        disabled={page === pageIndex}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 sm:w-12 sm:h-12 gap-2.5 p-2 sm:p-4 rounded-lg border ${pageIndex === page
                                ? "text-white bg-primary border-primary"
                                : "bg-white hover:bg-primary text-secondary border-primary hover:text-white"
                            }`}
                    >
                        {page}
                    </Button>
                ))}

            {pageIndex < totalPages - 1 && (
                <span className="text-sm sm:text-xl text-primary">...</span>
            )}

            <Button
                disabled={pageIndex === totalPages}
                onClick={() => onPageChange(pageIndex + 1)}
                className="w-10 h-10 sm:w-12 sm:h-12 gap-2.5 p-2 sm:p-4 rounded-lg bg-white text-primary border border-primary hover:text-white hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="size-7 sm:h-7 sm:w-7" />
            </Button>
        </div>
    );
}