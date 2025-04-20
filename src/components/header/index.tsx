import Link from "next/link";
import Logo from "../logo";

export function Header() {
    return (
        <section>
            <header className="border-b border-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl flex items-center">
                            <Logo />
                        </Link>
                    </div>
                </div>
            </header>
        </section>
    )
}