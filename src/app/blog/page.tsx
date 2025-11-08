"use client"

import { useEffect } from 'react';
import MainSection from "./MainSection"

export default function Blog() {
    useEffect(() => {
        // Prefetch the main section data
        const prefetchData = async () => {
            try {
                await fetch('/api/posts', {
                    next: { revalidate: 60 }, // Match the revalidation time in MainSection
                });
            } catch (error) {
                console.error('Failed to prefetch posts:', error);
            }
        };
        
        prefetchData();
    }, []);

    return (
        <main className="flex flex-col w-screen min-h-screen bg-black text-white overflow-hidden">
            <MainSection />
        </main>
    );
}