import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import HeroSection from '@/components/works/HeroSection'
import ContentSection from '@/components/works/ContentSection'
import worksData from '@/data/works.json'

const WorkDetail: React.FC = () => {
    const { nanoid } = useParams<{ nanoid: string }>()
    const navigate = useNavigate()
    const [markdownContent, setMarkdownContent] = useState<string>('')
    const [loading, setLoading] = useState(true)

    const project = worksData.find((work) => work.nanoid === nanoid)

    useEffect(() => {
        if (project) {
            // Markdownファイルをテキストとして読み込み
            fetch(`/src/data/worksDetails/${project.nanoid}.md`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Markdown file not found')
                    }
                    return response.text()
                })
                .then((text) => {
                    setMarkdownContent(text)
                    setLoading(false)
                })
                .catch(() => {
                    setMarkdownContent('詳細情報が見つかりませんでした。')
                    setLoading(false)
                })
        }
    }, [project])

    const handleGoBack = () => {
        navigate(-1)
    }

    if (!project) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="min-h-screen bg-background">
            <HeroSection project={project} onGoBack={handleGoBack} />

            <div className="container mx-auto px-4 py-12">
                <ContentSection
                    markdownContent={markdownContent}
                    loading={loading}
                    techStack={project.techStack}
                    links={project.links}
                />
            </div>
        </div>
    )
}

export default WorkDetail
