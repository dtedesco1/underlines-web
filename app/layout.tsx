import './globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Commissioner, Newsreader, Libre_Caslon_Text } from 'next/font/google';

const sans = Commissioner({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

const serif = Newsreader({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

const display = Libre_Caslon_Text({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Underlines — Context with Clarity',
    description:
        'Underlines delivers global reporting with historical depth, rigorous verification, and perspectives from across the spectrum.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const year = new Date().getFullYear();
    return (
        <html className={`${sans.variable} ${serif.variable} ${display.variable}`} lang="en">
            <body className="relative min-h-screen bg-transparent text-ink antialiased">
                <div className="relative flex min-h-screen flex-col">
                    <header className="border-b border-ink/10 bg-white/80 backdrop-blur">
                        <div className="mx-auto w-full max-w-6xl px-6 py-6">
                            <div className="flex items-center justify-between gap-6">
                                <Link
                                    className="group flex items-center gap-4 text-ink no-underline"
                                    href="/"
                                    title="Return to Underlines home"
                                >
                                    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-parchment/80 p-2.5 shadow-sm transition group-hover:border-ink/20">
                                        <Image
                                            alt="Underlines monogram"
                                            className="object-contain"
                                            fill
                                            priority
                                            sizes="48px"
                                            src="/underlines-logo-enhanced.png"
                                        />
                                    </span>
                                    <span className="flex min-w-0 flex-col">
                                        <span className="font-masthead text-2xl uppercase tracking-[0.28em] leading-none">
                                            Underlines
                                        </span>
                                        <span className="truncate text-xs text-ink-muted">Bureau of record in world affairs</span>
                                    </span>
                                    <span className="sr-only">Underlines front page</span>
                                </Link>
                                <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-ink-muted">
                                    <Link className="no-underline transition-colors hover:text-ink" href="/about">
                                        About
                                    </Link>
                                    <Link className="no-underline transition-colors hover:text-ink" href="/archive">
                                        Archive
                                    </Link>
                                    <Link
                                        className="inline-flex items-center gap-2 rounded-full bg-oxblood px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white no-underline transition hover:bg-oxblood/90"
                                        href="/subscribe"
                                    >
                                        Subscribe
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <main className="relative flex-1">
                        <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-16">
                            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/95 px-8 pb-12 pt-10 shadow-sm">
                                <article className="prose prose-lg prose-ink mx-auto max-w-3xl">
                                    {children}
                                </article>
                            </div>
                        </div>
                    </main>
                    <footer className="mt-auto border-t border-ink/10 bg-parchment/80">
                        <div className="mx-auto w-full max-w-6xl px-6 py-10">
                            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                                <Link className="flex items-center gap-3 text-ink no-underline" href="/">
                                    <span className="font-masthead text-2xl uppercase tracking-[0.28em]">Underlines</span>
                                    <span className="hidden text-xs text-ink-muted sm:inline">Est. MMXXV</span>
                                </Link>
                                <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
                                    <Link className="no-underline transition-colors hover:text-ink" href="/about">
                                        About
                                    </Link>
                                    <Link className="no-underline transition-colors hover:text-ink" href="/archive">
                                        Archive
                                    </Link>
                                    <Link className="no-underline transition-colors hover:text-ink" href="/subscribe">
                                        Subscribe
                                    </Link>
                                    <Link className="no-underline transition-colors hover:text-ink" href="/contact">
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                            <div className="mt-6 border-t border-ink/10 pt-6 text-xs uppercase tracking-[0.18em] text-ink-muted">
                                <p>© {year} Three Rules LLC. Independent reporting with historical depth.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
