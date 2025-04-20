/* eslint-disable no-unused-vars */
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Search = ({
    placeholder,
    page,
    handleSetSearch,
    showLabel = true,
}: {
    placeholder: string;
    page: number;
    handleSetSearch: Dispatch<SetStateAction<string>>;
    showLabel?: boolean;
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState<string>(
        searchParams.get('search') || '',
    );

    useEffect(() => {
        const handler = setTimeout(() => {
            handleSetSearch(searchTerm);

            const params = new URLSearchParams(window.location.search);
            params.set('search', searchTerm);
            if (!searchTerm) params.delete('search');
            if (searchTerm !== '') params.set('page', '1');

            router.push(`${window.location.pathname}?${params.toString()}`);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm, router, handleSetSearch]);

    return (
        <div className="flex flex-col gap-4 relative">
            {showLabel && (
                <Label htmlFor="search-input">
                    <span>Search...</span>
                </Label>
            )}
            <Input
                placeholder={placeholder}
                id="search-input"
                className="hover:border-primary focus:border-primary focus:ring-0 focus:outline-none"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm !== '' && (
                <Button
                    onClick={() => setSearchTerm('')}
                    className="absolute bottom-0 right-0 hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary"
                    variant={'ghost'}
                    size="icon"
                >
                    <X className="size-5 text-primary" />
                </Button>
            )}
        </div>
    );
};

export default Search;
