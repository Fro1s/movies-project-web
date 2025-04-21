import Link from "next/link";
import Logo from "../logo";
import Search from "../search";

export function Header() {
    return (
        <header className="py-8 text-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center">
                    <Logo color="white" />
                </Link>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="font-bold text-xl flex items-center">
                        <Logo />
                    </Link>

                    <div className="w-full sm:w-96">
                        <Search
                            handleSetSearch={() => { }}
                            page={1}
                            placeholder="Buscar filmes..."
                            showLabel={false}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}