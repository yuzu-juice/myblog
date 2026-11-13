import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface SectionProps {
    icon: LucideIcon
    title: string
    children: ReactNode
}

const Section = ({ icon: Icon, title, children }: SectionProps) => {
    return (
        <section className="mt-12">
            <div className="flex items-center gap-3 mb-6">
                <Icon className="w-5 h-5 text-primary" />
                <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-primary">{title}</h2>
                <div className="h-px flex-1 bg-border" />
            </div>
            {children}
        </section>
    )
}

export default Section
