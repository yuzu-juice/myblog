import { Award } from 'lucide-react'

interface Certification {
    name: string
    issueDate: Date
    expireDate?: Date
    org?: string
}

const certificationsByCategory: Record<string, Certification[]> = {
    Google: [
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
            name: 'AWS Certified Machine Learning Engineer – Associate',
            issueDate: new Date('Dec 1, 2024'),
            expireDate: new Date('Dec 1, 2027')
        },
        {
            name: 'AWS Certified AI Practitioner',
            issueDate: new Date('Nov 1, 2024'),
            expireDate: new Date('Nov 1, 2027')
        },
        {
            name: 'AWS Certified Data Engineer – Associate',
            issueDate: new Date('Jun 1, 2024'),
            expireDate: new Date('Jun 1, 2027')
        },
        {
            name: 'AWS Certified Advanced Networking – Specialty',
            issueDate: new Date('Mar 1, 2024'),
            expireDate: new Date('Mar 1, 2027')
        },
        {
            name: 'AWS Certified: SAP on AWS – Specialty',
            issueDate: new Date('Feb 1, 2024'),
            expireDate: new Date('Feb 1, 2027')
        },
        {
            name: 'AWS Certified Data Analytics – Specialty',
            issueDate: new Date('Nov 1, 2023'),
            expireDate: new Date('Nov 1, 2026')
        },
        {
            name: 'AWS Certified DevOps Engineer – Professional',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Machine Learning – Specialty',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Solutions Architect – Professional',
            issueDate: new Date('Oct 1, 2023'),
            expireDate: new Date('Oct 1, 2026')
        },
        {
            name: 'AWS Certified Database – Specialty',
            issueDate: new Date('Sep 1, 2023'),
            expireDate: new Date('Sep 1, 2026')
        },
        {
            name: 'AWS Certified Security – Specialty',
            issueDate: new Date('Jun 1, 2023'),
            expireDate: new Date('Jun 1, 2026')
        },
        {
            name: 'AWS Certified Developer – Associate',
            issueDate: new Date('May 1, 2023'),
            expireDate: new Date('May 1, 2026')
        },
        {
            name: 'AWS Certified SysOps Administrator – Associate',
            issueDate: new Date('Apr 1, 2023'),
            expireDate: new Date('Apr 1, 2026')
        },
        {
            name: 'AWS Certified Cloud Practitioner',
            issueDate: new Date('Feb 1, 2023'),
            expireDate: new Date('May 1, 2026')
        },
        {
            name: 'AWS Certified Solutions Architect – Associate',
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
            expireDate: new Date('Nov 1, 2025')
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
            expireDate: new Date('Oct 1, 2025')
        },
        {
            name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
            issueDate: new Date('Oct 1, 2023')
        },
        {
            name: 'Microsoft Certified: DevOps Engineer Expert',
            issueDate: new Date('Sep 1, 2023'),
            expireDate: new Date('Sep 1, 2025')
        },
        {
            name: 'Microsoft Certified: Azure Administrator Associate',
            issueDate: new Date('Apr 1, 2023'),
            expireDate: new Date('Apr 1, 2025')
        }
    ],
    IPA: [
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
    JDLA: [
        {
            name: 'JDLA Deep Learning for GENERAL 2023 #2',
            issueDate: new Date('May 1, 2023')
        }
    ],
    Others: [
        {
            name: 'メンタルヘルス・マネジメント検定II種',
            issueDate: new Date('Mar 1, 2023'),
            org: '大阪商工会議所'
        }
    ]
}

const formatDate = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })

const Certifications = () => {
    const today = new Date()

    return (
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <Award className="w-6 h-6 text-orange-500" />
                Certifications
            </h2>
            {Object.entries(certificationsByCategory).map(([category, certs]) => {
                // Sort certifications by issueDate ascending
                const sortedCerts = certs.slice().sort((a, b) => a.issueDate.getTime() - b.issueDate.getTime())
                return (
                    <div key={category} className="mb-8">
                        <h3 className="text-xl font-bold mb-4">{category}</h3>
                        <div className="space-y-4">
                            {sortedCerts.map((cert) => (
                                <div
                                    key={cert.name}
                                    className="flex justify-between items-center p-4 bg-orange-50 rounded-lg"
                                >
                                    <div>
                                        <span className="text-gray-700 font-medium">{cert.name}</span>
                                        {category === 'Others' && cert.org && (
                                            <span className="ml-2 text-gray-500 text-sm">{cert.org}</span>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xs text-gray-500">
                                            Issued {formatDate(cert.issueDate)}
                                        </span>
                                        {cert.expireDate && (
                                            <span className="block text-xs text-gray-500">
                                                Expires {formatDate(cert.expireDate)}{' '}
                                                {cert.expireDate < today && '(expired)'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Certifications
