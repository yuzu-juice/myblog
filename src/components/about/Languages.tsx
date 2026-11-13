import { Code } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Section from './Section'
import languages from '@/data/languages.json'

const Languages = () => {
    return (
        <Section icon={Code} title="Main Languages">
            <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                    <Badge key={lang} variant="default" className="text-sm px-3 py-1">
                        {lang}
                    </Badge>
                ))}
            </div>
        </Section>
    )
}

export default Languages
