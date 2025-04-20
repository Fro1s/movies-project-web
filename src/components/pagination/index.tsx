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
        <div className="flex items-center justify-center gap-4">
            <Button
                disabled={pageIndex === 1}
                onClick={() => onPageChange(pageIndex - 1)}
                className="w-12 h-12 gap-2.5 p-4 rounded-lg bg-white text-primary border border-secondary hover:text-white hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={16} />
            </Button>

            {pageIndex > 2 && (
                <span className="text-xl text-primary">...</span>
            )}

            {Array.from({ length: 3 }, (_, index) => pageIndex - 1 + index)
                .filter((page) => page > 0 && page <= totalPages)
                .map((page) => (
                    <Button
                        key={page}
                        disabled={page === pageIndex}
                        onClick={() => onPageChange(page)}
                        className={`w-12 h-12 gap-2.5 p-4 rounded-lg border ${pageIndex === page
                            ? "text-white bg-secondary border-secondary"
                            : "bg-white hover:bg-secondary text-secondary border-secondary hover:text-white"
                            }`}
                    >
                        {page}
                    </Button>
                ))}

            {pageIndex < totalPages - 1 && (
                <span className="text-xl text-primary">...</span>
            )}

            <Button
                disabled={pageIndex === totalPages}
                onClick={() => onPageChange(pageIndex + 1)}
                className="w-12 h-12 gap-2.5 p-4 rounded-lg bg-white text-primary border border-secondary hover:text-white hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight size={16} />
            </Button>
        </div>
    );
}
