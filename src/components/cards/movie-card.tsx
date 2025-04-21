"use client";

import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MovieCardProps } from "@/lib/types";

export function MovieCard({ title, year, image, crew, rating }: MovieCardProps) {
    const [hasImageError, setHasImageError] = useState(false);

    return (
        <Card className="w-full bg-background-card min-w-[240px] max-w-full md:max-w-[320px] h-[602px] p-4 flex flex-col justify-between mx-auto hover:shadow-sm hover:border-primary hover:shadow-primary transition-shadow duration-300 ease-in-out cursor-pointer overflow-visible">
            <div className="relative w-full h-[372px] rounded-xl overflow-hidden">
                {!hasImageError ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-cover"
                        priority
                        onError={() => setHasImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4 text-center">
                        <Avatar className="w-20 h-20 mb-2">
                            <AvatarFallback className="text-4xl font-bold text-gray-500">
                                {title.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-gray-700">
                            {title}
                        </span>
                        <span className="text-xs text-gray-500">
                            Imagem não disponível
                        </span>
                    </div>
                )}
            </div>

            <CardContent className="p-0 flex flex-col justify-between flex-1 mt-4">
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-semi-black text-base leading-snug">
                        {title}
                    </h3>
                    <p className="text-sm text-semi-black">Ano de lançamento: {year}</p>
                    <p className="text-sm text-gray-700 line-clamp-2">{crew}</p>
                </div>

                <div className="mt-auto flex items-center justify-start pt-4">
                    <div className="flex items-center bg-primary/80 rounded-full px-4 py-2">
                        <Star className="size-3 text-white fill-white" />
                        <span className="text-xs font-extralight text-white ml-1">
                            {rating}/10
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
