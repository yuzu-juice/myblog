import { ShieldCheck } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { formatDate } from '@/lib/utils/formatDate'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface Certification {
    name: string
    issueDate: Date
    expireDate?: Date
    org?: string
}

const certificationsByCategory: Record<string, Certification[]> = {
    Google: [
        {
            name: 'Professional Machine Learning Engineer',
            issueDate: new Date('May 1, 2025'),
            expireDate: new Date('May 1, 2027')
        },
        {
            name: 'Associate Google Workspace Administrator Certification',
            issueDate: new Date('Mar 1, 2025'),
            expireDate: new Date('Mar 1, 2028')
        },
        {
            name: 'Professional Cloud Database Engineer Certification',
            issueDate: new Date('Mar 1, 2025'),
            expireDate: new Date('Mar 1, 2027')
        },
        {
            name: 'Professional Cloud Network Engineer',
            issueDate: new Date('Feb 1, 2025'),
            expireDate: new Date('Feb 1, 2027')
        },
        {
            name: 'Associate Data Practitioner Certification',
            issueDate: new Date('Feb 1, 2025'),
            expireDate: new Date('Feb 1, 2028')
        },
        {
            name: 'Professional Data Engineer',
            issueDate: new Date('Feb 1, 2025'),
            expireDate: new Date('Feb 1, 2027')
        },
        {
            name: 'Professional Cloud DevOps Engineer',
            issueDate: new Date('Jan 1, 2025'),
            expireDate: new Date('Jan 1, 2027')
        },
        {
            name: 'Professional Google Workspace Administrator Certification',
            issueDate: new Date('Sep 1, 2024'),
            expireDate: new Date('Sep 1, 2026')
        },
        {
            name: 'Professional Cloud Developer',
            issueDate: new Date('Jul 1, 2024'),
            expireDate: new Date('Jul 1, 2026')
        },
        {
            name: 'Professional Cloud Architect',
            issueDate: new Date('Feb 1, 2024'),
            expireDate: new Date('Feb 1, 2026')
        },
        {
            name: 'Associate Cloud Engineer',
            issueDate: new Date('Nov 1, 2023'),
            expireDate: new Date('Nov 1, 2026')
        },
        {
            name: 'Professional Cloud Security Engineer',
            issueDate: new Date('Nov 1, 2023'),
            expireDate: new Date('Nov 1, 2025')
        },
        {
            name: 'Cloud Digital Leader',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        }
    ],
    AWS: [
        {
            name: 'AWS Certified Machine Learning Engineer - Associate',
            issueDate: new Date('Dec 1, 2024'),
            expireDate: new Date('Dec 1, 2027')
        },
        {
            name: 'AWS Certified AI Practitioner',
            issueDate: new Date('Nov 1, 2024'),
            expireDate: new Date('Nov 1, 2027')
        },
        {
            name: 'AWS Certified Data Engineer - Associate',
            issueDate: new Date('Jun 1, 2024'),
            expireDate: new Date('Jun 1, 2027')
        },
        {
            name: 'AWS Certified Advanced Networking - Specialty',
            issueDate: new Date('Mar 1, 2024'),
            expireDate: new Date('Mar 1, 2027')
        },
        {
            name: 'AWS Certified: SAP on AWS - Specialty',
            issueDate: new Date('Feb 1, 2024'),
            expireDate: new Date('Feb 1, 2027')
        },
        {
            name: 'AWS Certified Data Analytics - Specialty',
            issueDate: new Date('Nov 1, 2023'),
            expireDate: new Date('Nov 1, 2026')
        },
        {
            name: 'AWS Certified DevOps Engineer - Professional',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Machine Learning - Specialty',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Solutions Architect - Professional',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Database - Specialty',
            issueDate: new Date('Sep 1, 2023'),
            expireDate: new Date('Sep 1, 2026')
        },
        {
            name: 'AWS Certified Security - Specialty',
            issueDate: new Date('Jun 1, 2023'),
            expireDate: new Date('Jun 1, 2026')
        },
        {
            name: 'AWS Certified Developer - Associate',
            issueDate: new Date('May 1, 2023'),
            expireDate: new Date('May 1, 2026')
        },
        {
            name: 'AWS Certified SysOps Administrator - Associate',
            issueDate: new Date('Apr 1, 2023'),
            expireDate: new Date('Apr 1, 2026')
        },
        {
            name: 'AWS Certified Cloud Practitioner',
            issueDate: new Date('Feb 1, 2023'),
            expireDate: new Date('May 1, 2026')
        },
        {
            name: 'AWS Certified Solutions Architect - Associate',
            issueDate: new Date('Feb 1, 2023'),
            expireDate: new Date('Feb 1, 2026')
        }
    ],
    Microsoft: [
        {
            name: 'Microsoft Certified: Azure Data Fundamentals',
            issueDate: new Date('Feb 1, 2024')
        },
        {
            name: 'Microsoft 365 Certified: Fundamentals',
            issueDate: new Date('Nov 1, 2023')
        },
        {
            name: 'Microsoft Certified: Azure AI Fundamentals',
            issueDate: new Date('Nov 1, 2023')
        },
        {
            name: 'Microsoft Certified: Cybersecurity Architect Expert',
            issueDate: new Date('Nov 1, 2023'),
            expireDate: new Date('Nov 1, 2026')
        },
        {
            name: 'Microsoft Certified: Power Platform Fundamentals',
            issueDate: new Date('Nov 1, 2023')
        },
        {
            name: 'Microsoft Certified: Azure Fundamentals',
            issueDate: new Date('Oct 1, 2023')
        },
        {
            name: 'Microsoft Certified: Azure Security Engineer Associate',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
            issueDate: new Date('Oct 1, 2023')
        },
        {
            name: 'Microsoft Certified: DevOps Engineer Expert',
            issueDate: new Date('Sep 1, 2023'),
            expireDate: new Date('Sep 1, 2026')
        },
        {
            name: 'Microsoft Certified: Azure Administrator Associate',
            issueDate: new Date('Apr 1, 2023'),
            expireDate: new Date('Apr 1, 2026')
        }
    ],
    情報処理推進機構: [
        {
            name: '応用情報技術者',
            issueDate: new Date('Apr 1, 2024')
        },
        {
            name: '情報セキュリティマネジメント',
            issueDate: new Date('Sep 1, 2023')
        },
        {
            name: '基本情報技術者',
            issueDate: new Date('Apr 1, 2023')
        },
        {
            name: 'ITパスポート',
            issueDate: new Date('Aug 1, 2022')
        }
    ],
    その他: [
        {
            name: 'メンタルヘルス・マネジメント検定II種',
            issueDate: new Date('Mar 1, 2023'),
            org: '大阪商工会議所'
        },
        {
            name: 'JDLA Deep Learning for GENERAL 2023 #2',
            issueDate: new Date('May 1, 2023'),
            org: 'JDLA'
        },
        {
            name: 'TOEIC L&R (Score: 820)',
            issueDate: new Date('Aug 1, 2024'),
            org: 'IIBC'
        }
    ]
}

const Certifications = () => {
    const today = new Date()
    const [openItem, setOpenItem] = useState<string>('')

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
