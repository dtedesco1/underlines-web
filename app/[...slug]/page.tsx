import { existsSync } from 'fs';
import { join } from 'path';

import { notFound } from 'next/navigation';

const CONTENT_DIRECTORY = join(process.cwd(), 'app/content');
const SUPPORTED_EXTENSIONS = ['mdx', 'md'] as const;

export default async function Page({ params }: { params: Promise<{ slug?: string[] | string }> }) {
    const { slug } = await params;
    const segments = Array.isArray(slug) ? slug : slug ? [slug] : [];
    const path = segments.length ? segments.join('/') : 'index';

    for (const extension of SUPPORTED_EXTENSIONS) {
        const filePath = join(CONTENT_DIRECTORY, `${path}.${extension}`);
        if (!existsSync(filePath)) {
            continue;
        }

        try {
            const contentModule = await import(`@/app/content/${path}.${extension}`);
            const Content = contentModule.default;
            return <Content />;
        } catch (error) {
            continue;
        }
    }

    notFound();
}
