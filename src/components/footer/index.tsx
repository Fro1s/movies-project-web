import React from "react";
import Logo from "../logo";
import { Separator } from "../ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary py-16 text-accent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <Link href="/" className="flex items-center">
                    <Logo color="white" />
                </Link>

                <Separator />

                <div className="flex flex-col gap-20 md:flex-row md:items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Facebook size={36} />
                        <Twitter size={36} />
                        <Instagram size={36} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
