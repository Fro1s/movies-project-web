import React from 'react';
import Logo from '../logo';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';


export function Footer() {
    return (
        <section>
            <div className="bg-primary px-4 md:px-12 xl:px-28 py-16 space-y-12">
                <Logo color="white" />
                <Separator />
                <div className="flex flex-col gap-20 md:flex-row md:items-center justify-between text-accent">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <p>Terms & Conditions</p>

                        <p>Privacy Policy</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Facebook size='36'/>
                        <Twitter size='36'/>
                        <Instagram size='36' />
                    </div>
                </div>
            </div>
        </section>

    );
}
