import { ShieldCheck } from 'lucide-react'
import Section from './Section'
import AccordionList from './AccordionList'
import certificationsData from '@/data/certifications.json'
import { formatMonth, isExpiredMonth as isExpired } from '@/lib/utils/formatDate'

interface Certification {
    name: string
    issueDate: Date
    expireDate?: Date
    org?: string
}

interface CertificationRaw {
    name: string
    issueDate: string
    expireDate?: string
    org?: string
}

const Certifications = () => {
    // Convert JSON data to proper Date objects
    const certificationsByCategory: Record<string, Certification[]> = Object.entries(certificationsData).reduce(
        (acc, [category, certs]) => {
            acc[category] = (certs as CertificationRaw[]).map((cert) => ({
                ...cert,
                issueDate: new Date(cert.issueDate),
                expireDate: cert.expireDate ? new Date(cert.expireDate) : undefined
            }))
            return acc
        },
        {} as Record<string, Certification[]>
    )

    const items = Object.entries(certificationsByCategory).map(([category, certs]) => {
        // Sort certifications by issueDate descending
        const sortedCerts = certs.slice().sort((a, b) => b.issueDate.getTime() - a.issueDate.getTime())

        return {
            value: category,
            trigger: category,
            content: (
                <div className="pt-2">
                    {sortedCerts.map((cert) => (
                        <div
                            key={cert.name}
                            className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 py-3 border-b border-border/40 last:border-b-0"
                        >
                            <div>
                                <span className="font-medium text-sm">{cert.name}</span>
                                {category === 'その他' && cert.org && (
                                    <span className="ml-2 text-muted-foreground text-xs">- {cert.org}</span>
                                )}
                            </div>
                            <div className="text-left sm:text-right mt-1 sm:mt-0">
                                <span className="block text-xs text-muted-foreground">
                                    発行: {formatMonth(cert.issueDate)}
                                </span>
                                {cert.expireDate && (
                                    <span className="block text-xs text-muted-foreground">
                                        失効: {formatMonth(cert.expireDate)}
                                        {isExpired(cert.expireDate) && '（失効済）'}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    })

    return (
        <Section icon={ShieldCheck} title="Certifications">
            <AccordionList
                items={items}
                triggerClassName="text-sm font-semibold text-foreground hover:no-underline"
            />
        </Section>
    )
}

export default Certifications
