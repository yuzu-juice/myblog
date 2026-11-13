import { formatDate } from '@/lib/utils/formatDate'
import { GraduationCap } from 'lucide-react'
import Section from './Section'
import educationData from '@/data/educations.json'

interface EducationPhase {
    name: string
    startDate: string
    endDate: string | null
}

interface EducationEntry {
    institution: string
    facultyCourse?: string
    startDate: string
    endDate: string | null
    homepageUrl: string
    phases?: EducationPhase[]
}

const generatePeriod = (startDate: string, endDate: string | null) => {
    const startFormatted = formatDate(new Date(startDate))
    const endFormatted = endDate ? formatDate(new Date(endDate)) : '現在'
    return `${startFormatted} - ${endFormatted}`
}

const Education = () => {
    return (
        <Section icon={GraduationCap} title="Educational background">
            <div className="space-y-6">
                {educationData.map((entry: EducationEntry) => (
                    <div key={entry.institution} className="border-l-2 border-primary/60 pl-4">
                        <h3 className="text-xl text-foreground">
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

                        {entry.phases ? (
                            <ul className="mt-2 space-y-1 border-l border-border/60 pl-4">
                                {entry.phases.map((phase) => (
                                    <li key={phase.name} className="text-base font-normal text-muted-foreground">
                                        <span>{phase.name}</span>
                                        <span className="ml-2 text-sm text-muted-foreground/80">
                                            {generatePeriod(phase.startDate, phase.endDate)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <>
                                <p className="text-base text-muted-foreground">{entry.facultyCourse}</p>
                                <p className="text-sm text-muted-foreground/80 mb-1">
                                    {generatePeriod(entry.startDate, entry.endDate)}
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Education
