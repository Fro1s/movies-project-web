'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselSteps,
} from '@/components/ui/carousel';
import { Movie } from '@/lib/types';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface CarouselMainProps {
    movies: Movie[];
}

export function CarouselMain({ movies }: CarouselMainProps) {
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    const handleImageError = (index: number) => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
    };

    useEffect(() => {
        setImageErrors({});
    }, [movies]);

    if (!movies || movies.length === 0) return null;

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="relative"
        >
            <CarouselContent>
                {movies.map((movie: Movie, index: number) => (
                    <CarouselItem key={index}>
                        <div className="relative w-screen h-[700px] before:bg-black/30 before:content-center before:size-full before:absolute">
                            {!imageErrors[index] ? (
                                <Image
                                    src={movie.image_url}
                                    alt="Movie banner"
                                    width={1440}
                                    height={577.2}
                                    className="size-full object-cover"
                                    onError={() => handleImageError(index)}
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4 text-center">
                                    <Avatar className="w-32 h-32">
                                        <AvatarFallback className="text-4xl font-bold text-gray-500">
                                            {movie.title.charAt(0).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-semibold text-gray-700">
                                        {movie.title}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Imagem não disponível
                                    </span>
                                </div>
                            )}

                            <div className="absolute bottom-1/4 left-[15%] space-y-4">
                                <div className="flex flex-col gap-2">
                                    <span className="text-accent dark:text-white">
                                        Destaque do Mês
                                    </span>
                                    <h2 className="max-w-[75vw] md:max-w-[700px] leading-tight text-4xl md:text-6xl text-accent font-bold dark:text-white">
                                        {movie.title}
                                    </h2>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-4 max-w-[75vw] dark:text-white font-bold">
                                    <Badge className="px-4 py-2 rounded-xl w-fit bg-primary/80 ">
                                        <Star className="size-4 mr-1 fill-accent dark:text-white dark:fill-white" />
                                        <span className="font-extralight text-sm dark:text-white">{movie.rating}/10</span>
                                    </Badge>
                                    <span className="text-accent font-semibold leading-relaxed dark:text-white">
                                        {movie.crew}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselSteps
                size={movies.length || 3}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
            />

            <CarouselPrevious className="absolute left-2 md:left-6 xl:left-24 top-1/2 bottom-1/2" />
            <CarouselNext className="absolute right-2 md:right-6 xl:right-24 top-1/2 bottom-1/2" />
        </Carousel>
    );
}