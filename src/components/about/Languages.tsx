import { Code } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Languages = () => {
    return (
        <section className="bg-card rounded-sm p-8 shadow-md border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Code className="w-6 h-6" />
                Languages
            </h2>
            <div className="flex flex-wrap gap-2">
                {['C', 'TypeScript', 'Python'].map((lang) => (
                    <Badge key={lang} variant="default" className="text-sm px-3 py-1">
                        {lang}
                    </Badge>
                ))}
            </div>
        </section>
    )
}

export default Languages
