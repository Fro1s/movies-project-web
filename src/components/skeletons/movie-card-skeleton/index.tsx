import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MovieCardSkeleton() {
    return (
        <Card className="w-full max-w-[280px] h-[602px] p-4 flex flex-col justify-between mx-auto">
            <div className="relative w-full h-[372px] rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full absolute top-0 left-0" />
            </div>

            <CardContent className="p-0 flex flex-col justify-between flex-1 mt-4">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                <div className="mt-auto flex items-center justify-start pt-4">
                    <Skeleton className="h-6 w-[60px] rounded-full" />
                </div>
            </CardContent>
        </Card>
    );
}
