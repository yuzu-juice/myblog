import React from 'react'
import MarkdownRenderer from '@/components/utils/MarkdownRenderer'
import { Spinner } from '@/components/ui/spinner'

interface ContentSectionProps {
    markdownContent: string
    loading: boolean
}

const ContentSection: React.FC<ContentSectionProps> = ({ markdownContent, loading }) => {
    return (
        <div>
            {loading ? (
                <div className="flex justify-center py-8">
                    <Spinner className="size-8" />
                </div>
            ) : (
                <MarkdownRenderer content={markdownContent} className="prose prose-sm sm:prose-lg max-w-none" />
            )}
        </div>
    )
}

export default ContentSection
