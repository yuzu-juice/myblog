import { formatDate } from '@/lib/utils/formatDate'
import { GraduationCap } from 'lucide-react'

interface EducationEntry {
    institution: string
    facultyCourse: string
    period: string
    homepageUrl: string
}

const educationHistory: EducationEntry[] = [
    {
        institution: '放送大学',
        facultyCourse: '教養学部 教養学科 心理と教育コース',
        period: formatDate(new Date('Apr 2023')) + ' - 現在',
        homepageUrl: 'https://www.ouj.ac.jp/'
    },
    {
        institution: '42 Tokyo',
        facultyCourse: 'Common Core',
        period: formatDate(new Date('Apr 2024')) + ' - 現在',
        homepageUrl: 'https://42tokyo.jp/'
    },
    {
        institution: '高知工業高等専門学校',
        facultyCourse: 'ソーシャルデザイン工学科 情報セキュリティコース',
        period: formatDate(new Date('Apr 2017')) + ' - ' + formatDate(new Date('Mar 2022')),
        homepageUrl: 'https://www.kochi-ct.ac.jp/'
    }
]

const Education = () => {
    return (
        <section className="bg-card rounded-sm p-8 shadow-md border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <GraduationCap className="w-6 h-6" />
                Education
            </h2>
            <div className="space-y-6">
                {educationHistory.map((entry, index) => (
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
                        <p className="text-md text-muted-foreground">{entry.facultyCourse}</p>{' '}
                        {/* Updated to use facultyCourse */}
                        <p className="text-sm text-muted-foreground/80 mb-1">{entry.period}</p>
                        {/* Removed entry.description as it's not in the updated interface and data */}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education
