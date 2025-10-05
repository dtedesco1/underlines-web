import './globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Commissioner, Newsreader, Cormorant_Garamond } from 'next/font/google';

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

const display = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '500', '600', '700'],
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
                    <header className="border-b border-ink/10 bg-white/90">
                        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
                            <div className="flex flex-wrap items-center justify-between gap-8">
                                <Link className="flex items-center gap-4 text-ink no-underline" href="/" title="Return to Underlines home">
                                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink/10 bg-parchment/90 p-3">
                                        <Image
                                            alt="Underlines monogram"
                                            className="object-contain"
                                            fill
                                            priority
                                            sizes="56px"
                                            src="/underlines-logo.svg"
                                        />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="font-masthead text-3xl uppercase tracking-[0.28em] leading-none">Underlines</span>
                                        <span className="text-sm text-ink-muted">Context with clarity in world affairs</span>
                                    </span>
                                    <span className="sr-only">Underlines front page</span>
                                </Link>
                                <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.18em] text-ink-muted">
                                    <Link className="no-underline transition-colors hover:text-ink" href="/about">
                                        About
                                    </Link>
                                    <Link className="no-underline transition-colors hover:text-ink" href="/archive">
                                        Archive
                                    </Link>
                                    <Link
                                        className="inline-flex items-center gap-2 rounded-full bg-oxblood px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white no-underline transition hover:bg-oxblood/90"
                                        href="/subscribe"
                                    >
                                        Subscribe
                                    </Link>
                                </nav>
                            </div>
                            <div className="grid gap-10 rounded-3xl border border-ink/10 bg-parchment/70 px-8 py-10 shadow-sm lg:grid-cols-[1.1fr_1fr]">
                                <div className="space-y-6">
                                    <p className="font-serif text-lg leading-relaxed text-ink">
                                        Underlines cuts through the noise to deliver what matters in global news, combining rigorous bias-checking with rich historical context and diverse viewpoints.
                                    </p>
                                    <div className="space-y-3">
                                        <h2 className="font-masthead text-sm uppercase tracking-[0.18em] text-ink">Our Promise</h2>
                                        <p className="text-sm leading-relaxed text-ink-muted">
                                            No clickbait. No sensationalism. No partisan spin. Just clear, contextual coverage that helps you understand what matters and why.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid gap-8">
                                    <section className="space-y-3">
                                        <h2 className="font-masthead text-sm uppercase tracking-[0.18em] text-ink">What Sets Us Apart</h2>
                                        <ul className="space-y-3 text-sm leading-relaxed text-ink-muted">
                                            <li>
                                                <span className="font-semibold text-ink">Beyond Headlines:</span> Each story includes verified facts, historical context, and analysis of how it fits into broader global trends.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-ink">Multiple Perspectives:</span> We analyze coverage from multiple viewpoints—left, right, international, and local media—to give you the full picture.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-ink">Historical Context:</span> Every event is placed within its historical timeline, helping you understand not just what happened, but why it matters.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-ink">Clear Structure:</span> Consistent formatting makes complex news digestible with focusing facts, deep context, and perspectives that illuminate.
                                            </li>
                                        </ul>
                                    </section>
                                </div>
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
                    <footer className="mt-auto border-t border-ink/10 bg-parchment">
                        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
                            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
                                <div className="space-y-6">
                                    <span className="font-masthead text-3xl uppercase tracking-[0.28em] text-ink">Underlines</span>
                                    <p className="max-w-xl text-sm leading-relaxed text-ink">
                                        Subscribe to join thousands of readers who want news that informs rather than inflames, and analysis that illuminates rather than obscures.
                                    </p>
                                    <Link
                                        className="inline-flex w-fit items-center gap-2 rounded-full bg-oxblood px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white no-underline transition hover:bg-oxblood/90"
                                        href="/subscribe"
                                    >
                                        Subscribe for full access
                                    </Link>
                                </div>
                                <div className="grid gap-10 sm:grid-cols-2">
                                    <section className="space-y-3 text-sm leading-relaxed text-ink">
                                        <h3 className="font-masthead text-xs uppercase tracking-[0.18em] text-ink">Why Subscribe?</h3>
                                        <ul className="space-y-2 text-ink-muted">
                                            <li>Save Time: Get comprehensive coverage of major global events in one carefully curated daily brief.</li>
                                            <li>Think Deeper: Understand not just what happened, but the historical patterns, systemic forces, and varying viewpoints shaping events.</li>
                                            <li>Stay Truly Informed: Move beyond echo chambers with our analysis of diverse media perspectives.</li>
                                            <li>Build Context: Each edition connects current events to historical patterns and future implications.</li>
                                            <li>Access Archives: Build a searchable knowledge base of clear, contextual coverage of major events.</li>
                                        </ul>
                                    </section>
                                    <section className="space-y-3 text-sm leading-relaxed text-ink">
                                        <h3 className="font-masthead text-xs uppercase tracking-[0.18em] text-ink">Perfect For</h3>
                                        <ul className="space-y-2 text-ink-muted">
                                            <li>Professionals who need to stay informed but value their time.</li>
                                            <li>Critical thinkers who want to understand multiple perspectives.</li>
                                            <li>Anyone tired of sensationalized news and seeking deeper context.</li>
                                            <li>Leaders who need to understand how today&apos;s events shape tomorrow&apos;s world.</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="grid gap-10 border-t border-ink/10 pt-10 sm:grid-cols-[1.1fr_1fr]">
                                <div className="space-y-3 text-sm leading-relaxed text-ink">
                                    <h3 className="font-masthead text-xs uppercase tracking-[0.18em] text-ink">Our Promise</h3>
                                    <p className="text-ink-muted">
                                        No clickbait. No sensationalism. No partisan spin. Just clear, contextual coverage that helps you understand what matters and why.
                                    </p>
                                    <p className="text-ink-muted">
                                        “The best time to understand history is while it&apos;s happening. The second best time is now.”
                                    </p>
                                </div>
                                <div className="space-y-3 text-sm leading-relaxed text-ink">
                                    <h3 className="font-masthead text-xs uppercase tracking-[0.18em] text-ink">Stay Connected</h3>
                                    <p className="text-ink-muted">
                                        Subscribe to get full access to the newsletter and publication archives. Every edition includes focusing facts, deep context, and perspectives that illuminate the world stage.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-ink/10 pt-6 text-xs uppercase tracking-[0.18em] text-ink-muted">
                                <p>© {year} Underlines. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
