import InteractiveDisclosure from '@/components/interactive-disclosure'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        Disclosure: InteractiveDisclosure,
        ...components,
    }
}
