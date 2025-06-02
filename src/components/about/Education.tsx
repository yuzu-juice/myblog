import { formatDate } from '@/lib/utils/formatDate'
import { GraduationCap } from 'lucide-react'
import educationData from '@/data/education.json'

interface EducationEntry {
    institution: string
    facultyCourse: string
    startDate: string
    endDate: string | null
    homepageUrl: string
}

const Education = () => {
    const generatePeriod = (entry: EducationEntry) => {
        const startFormatted = formatDate(new Date(entry.startDate))
        const endFormatted = entry.endDate ? formatDate(new Date(entry.endDate)) : '現在'
        return `${startFormatted} - ${endFormatted}`
    }

    return (
        <section className="bg-card rounded-sm p-8 shadow-md border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <GraduationCap className="w-6 h-6" />
                Education
            </h2>
            <div className="space-y-6">
                {educationData.map((entry, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="text-xl font-semibold text-foreground">
                            {entry.homepageUrl ? (
                                <a
                                    href={entry.homepageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline hover:text-primary"
                                >
                                    {entry.institution}
                                </a>
                            ) : (
                                entry.institution
                            )}
                        </h3>
                        <p className="text-md text-muted-foreground">{entry.facultyCourse}</p>
                        <p className="text-sm text-muted-foreground/80 mb-1">{generatePeriod(entry)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
