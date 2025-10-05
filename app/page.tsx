import { join, extname } from 'node:path';
import { readdir, stat } from 'node:fs/promises';

import { notFound } from 'next/navigation';

const ARTICLES_DIRECTORY = join(process.cwd(), 'app/content/articles');
const SUPPORTED_EXTENSIONS = ['mdx'] as const;
const EXTENSION_SET = new Set(SUPPORTED_EXTENSIONS.map((extension) => `.${extension}`));

type SupportedExtension = (typeof SUPPORTED_EXTENSIONS)[number];

type ArticleCandidate = {
    slug: string;
    extension: SupportedExtension;
    mtimeMs: number;
};

async function findLatestArticle(): Promise<ArticleCandidate | null> {
    let entries;
    try {
        entries = await readdir(ARTICLES_DIRECTORY, { withFileTypes: true });
    } catch {
        return null;
    }

    const candidates = await Promise.all(
        entries
            .filter((entry) => entry.isFile() && EXTENSION_SET.has(extname(entry.name)))
            .map(async (entry) => {
                const extension: SupportedExtension = 'mdx';
                const slug = entry.name.slice(0, -(extension.length + 1));

                try {
                    const fileStats = await stat(join(ARTICLES_DIRECTORY, entry.name));
                    return {
                        slug,
                        extension,
                        mtimeMs: fileStats.mtimeMs,
                    } satisfies ArticleCandidate;
                } catch {
                    return null;
                }
            })
    );

    const validCandidates = candidates.filter((candidate): candidate is ArticleCandidate => candidate !== null);
    if (!validCandidates.length) {
        return null;
    }

    validCandidates.sort((a, b) => b.mtimeMs - a.mtimeMs);
    return validCandidates[0];
}

export default async function Page() {
    const latestArticle = await findLatestArticle();

    if (!latestArticle) {
        notFound();
    }

    const Content = (
        await import(`@/app/content/articles/${latestArticle.slug}.${latestArticle.extension}`)
    ).default;

    return <Content />;
}
