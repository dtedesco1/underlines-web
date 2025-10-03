import './globals.css';

import type { Metadata } from 'next';
import Link from 'next/link';

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
        <html lang="en">
            <body className="min-h-screen bg-stone-100 text-ink antialiased dark:bg-stone-950 dark:text-stone-100">
                <div className="flex min-h-screen flex-col">
                    <header className="border-b border-stone-300 bg-white/80 shadow-insetLine backdrop-blur dark:border-stone-700 dark:bg-stone-900/80">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="flex flex-col items-center gap-6 py-12 text-center">
                                <p className="text-[0.65rem] uppercase tracking-widecaps text-ink-muted dark:text-stone-400">
                                    Founded MMXXIV · Independent & Uncompromised
                                </p>
                                <div className="newspaper-ornament px-6 pb-6">
                                    <h1 className="font-masthead text-4xl uppercase tracking-tight text-ink md:text-6xl lg:text-[4.25rem] dark:text-stone-100">
                                        Underlines
                                    </h1>
                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted dark:text-stone-400">
                                        The Contextual Record of Global Affairs
                                    </p>
                                </div>
                                <nav className="flex w-full flex-wrap justify-center gap-5 border-y border-stone-200 py-3 text-[0.75rem] font-semibold uppercase tracking-tightercaps text-ink-muted dark:border-stone-700 dark:text-stone-300">
                                    <Link className="hover:text-ink" href="/">
                                        Front Page
                                    </Link>
                                    <Link className="hover:text-ink" href="/world">
                                        World
                                    </Link>
                                    <Link className="hover:text-ink" href="/briefings">
                                        Briefings
                                    </Link>
                                    <Link className="hover:text-ink" href="/archives">
                                        Archives
                                    </Link>
                                    <Link className="hover:text-ink" href="/methodology">
                                        Methodology
                                    </Link>
                                    <Link className="hover:text-ink" href="/subscribe">
                                        Subscribe
                                    </Link>
                                </nav>
                                <div className="flex w-full flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6">
                                    <p className="max-w-xl text-xs uppercase tracking-[0.24em] text-ink-muted dark:text-stone-400">
                                        Join discerning readers receiving global context in their inbox each morning.
                                    </p>
                                    <Link
                                        className="inline-flex items-center justify-center border border-stone-400 bg-white px-6 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-ink transition hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                                        href="/subscribe"
                                    >
                                        Subscribe Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1">
                        <div className="mx-auto w-full max-w-4xl px-6 py-12">
                            <article className="prose prose-lg prose-stone mx-auto max-w-3xl font-serif dark:prose-invert">
                                {children}
                            </article>
                        </div>
                    </main>
                    <footer className="border-t border-stone-300 bg-white/80 py-12 text-sm text-ink-muted shadow-insetLine backdrop-blur dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-400">
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                                <div>
                                    <h2 className="font-masthead text-base uppercase tracking-tightercaps text-ink dark:text-stone-100">
                                        Subscribe to Underlines
                                    </h2>
                                    <p className="mt-2 max-w-lg text-xs uppercase tracking-[0.22em] text-ink-muted dark:text-stone-400">
                                        Receive curated analysis and historical context delivered with restraint and rigor.
                                    </p>
                                </div>
                                <Link
                                    className="inline-flex items-center justify-center border border-stone-400 bg-white px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-ink transition hover:bg-amber-50 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800"
                                    href="/subscribe"
                                >
                                    Become a Subscriber
                                </Link>
                            </div>
                            <div className="mt-10 grid gap-8 text-center sm:grid-cols-3 sm:text-left">
                                <div>
                                    <h3 className="font-masthead text-sm uppercase tracking-tightercaps text-ink dark:text-stone-100">Editorial Desk</h3>
                                    <p className="mt-3 leading-relaxed">
                                        newsroom@underlines.com
                                        <br />
                                        +1 (202) 555-0142
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-masthead text-sm uppercase tracking-tightercaps text-ink dark:text-stone-100">Follow The Story</h3>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <Link href="https://www.linkedin.com/company/underlines">LinkedIn</Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.x.com/underlines">X (Twitter)</Link>
                                        </li>
                                        <li>
                                            <Link href="/rss">RSS</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-masthead text-sm uppercase tracking-tightercaps text-ink dark:text-stone-100">Publishing Notes</h3>
                                    <p className="mt-3 leading-relaxed">
                                        Independent journalism funded by readers. Fact-checked, bias-audited, and historically grounded.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-10 text-[0.65rem] uppercase tracking-widecaps text-ink-faint dark:text-stone-500">
                                © {year} Underlines Media Cooperative · All Rights Reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}