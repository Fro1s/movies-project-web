"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MovieCardProps } from "@/lib/types";

export function MovieCard({ title, year, image, crew, rating }: MovieCardProps) {
    return (
        <Card className="w-full bg-background-card max-w-[280px] h-[602px] p-4 flex flex-col justify-between mx-auto hover:shadow-sm hover:border-primary hover:shadow-primary transition-shadow duration-300 ease-in-out cursor-pointer overflow-visible">            <div className="relative w-full h-[372px] rounded-xl">
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
                priority
            />
        </div>

            <CardContent className="p-0 flex flex-col justify-between flex-1 mt-4">
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-semi-black text-base leading-snug">
                        {title}
                    </h3>
                    <p className="text-sm text-semi-black">
                        Ano de lançamento: {year}
                    </p>
                    <p className="text-sm text-gray-700 line-clamp-2">
                        {crew}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-start pt-4">
                    <div className="flex items-center bg-primary/80 rounded-full px-4 py-2">
                        <Star className="size-3 text-white fill-white" />
                        <span className="text-xs font-extralight text-white ml-1">{rating}/10</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
