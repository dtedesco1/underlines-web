'use client'

import { Disclosure, Transition } from '@headlessui/react'
import type { PropsWithChildren } from 'react'

export type InteractiveDisclosureProps = PropsWithChildren<{
    title: string
    defaultOpen?: boolean
}>

export function InteractiveDisclosure({ title, defaultOpen = false, children }: InteractiveDisclosureProps) {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => (
                <div className="border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm">
                    <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left">
                        <span className="text-base font-semibold uppercase tracking-widest text-neutral-900">
                            {title}
                        </span>
                        <span
                            aria-hidden
                            className={`inline-flex h-5 w-5 items-center justify-center text-neutral-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        >
                            ▾
                        </span>
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-in"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="border-t border-neutral-200 px-4 py-4 text-sm leading-relaxed text-neutral-700">
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    )
}

export default InteractiveDisclosure
