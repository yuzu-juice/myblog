import { ShieldCheck } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { formatDate } from '@/lib/utils/formatDate'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import certificationsData from '@/data/certifications.json'

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
    const today = new Date()
    const [openItem, setOpenItem] = useState<string>('')

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

    return (
        <section className="bg-card rounded-sm p-8 shadow-md border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                <ShieldCheck className="w-6 h-6" />
                Certifications
            </h2>
            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
                {Object.entries(certificationsByCategory).map(([category, certs]) => {
                    // Sort certifications by issueDate descending
                    const sortedCerts = certs.slice().sort((a, b) => b.issueDate.getTime() - a.issueDate.getTime())
                    return (
                        <AccordionItem value={category} key={category}>
                            <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                                {category}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3 pt-2">
                                    {sortedCerts.map((cert) => (
                                        <div
                                            key={cert.name}
                                            className="flex flex-col sm:flex-row justify-between sm:items-center p-3 bg-secondary rounded-sm border border-border/50"
                                        >
                                            <div>
                                                <span className="font-medium text-sm">{cert.name}</span>
                                                {category === 'その他' && cert.org && (
                                                    <span className="ml-2 text-muted-foreground text-xs">
                                                        - {cert.org}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-left sm:text-right mt-1 sm:mt-0">
                                                <span className="block text-xs text-muted-foreground">
                                                    発行: {formatDate(cert.issueDate)}
                                                </span>
                                                {cert.expireDate && (
                                                    <span
                                                        className={`block text-xs ${cert.expireDate < today ? 'text-destructive' : 'text-muted-foreground'}`}
                                                    >
                                                        失効: {formatDate(cert.expireDate)}{' '}
                                                        {cert.expireDate < today && '(失効済)'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button variant="outline" size="sm" onClick={() => setOpenItem('')}>
                                        閉じる
                                    </Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </section>
    )
}

export default Certifications
