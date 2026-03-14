import React from 'react'
import MarkdownRenderer from '@/components/utils/MarkdownRenderer'
import ProjectSidebar from './ProjectSidebar'
import { Spinner } from '@/components/ui/spinner'

interface ProjectLink {
    name: string
    url: string
    icon: string
}

interface ContentSectionProps {
    markdownContent: string
    loading: boolean
    techStack: string[]
    links: ProjectLink[]
}

const ContentSection: React.FC<ContentSectionProps> = ({ markdownContent, loading, techStack, links }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2">
                <div className="prose prose-invert prose-lg max-w-none">
                    {loading ? (
                        <div className="flex items-center justify-center h-32">
                            <Spinner className="size-8" />
                        </div>
                    ) : (
                        <MarkdownRenderer content={markdownContent} />
                    )}
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <ProjectSidebar techStack={techStack} links={links} />
            </div>
        </div>
    )
}

export default ContentSection
