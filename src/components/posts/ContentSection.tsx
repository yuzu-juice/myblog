import React from 'react'
import MarkdownRenderer from '@/components/utils/MarkdownRenderer'

interface ContentSectionProps {
    markdownContent: string
    loading: boolean
}

const ContentSection: React.FC<ContentSectionProps> = ({ markdownContent, loading }) => {
    return (
        <div className="max-w-4xl mx-auto">
            {loading ? (
                <div className="text-center py-8">
                    <p>読み込み中...</p>
                </div>
            ) : (
                <MarkdownRenderer
                    content={markdownContent}
                    className="prose prose-lg max-w-none"
                />
            )}
        </div>
    )
}

export default ContentSection
