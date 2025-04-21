import Link from "next/link";
import Logo from "../logo";
import Search from "../search"; 

export function Header() {
    return (
        <section className="bg-white border-b border-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
                </header>
            </div>
        </section>
    );
}
