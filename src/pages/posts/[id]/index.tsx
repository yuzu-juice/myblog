import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import HeroSection from '@/components/posts/HeroSection'
import ContentSection from '@/components/posts/ContentSection'
import postsData from '@/data/posts.json'

const markdownModules = import.meta.glob('/src/data/postsDetails/*.md', {
    as: 'raw',
    eager: true
})

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [markdownContent, setMarkdownContent] = useState<string>('')
    const [loading, setLoading] = useState(true)

    const post = postsData.find((post) => post.nanoid === id)

    useEffect(() => {
        if (post) {
            const markdownPath = `/src/data/postsDetails/${post.nanoid}.md`
            const content = markdownModules[markdownPath]

            if (content) {
                setMarkdownContent(content)
            } else {
                setMarkdownContent('記事の詳細が見つかりませんでした。')
            }
            setLoading(false)
        }
    }, [post])

    const handleGoBack = () => {
        navigate(-1)
    }

    if (!post) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="min-h-screen bg-background">
            <HeroSection post={post} onGoBack={handleGoBack} />

            <div className="container mx-auto px-4 py-6">
                <ContentSection
                    markdownContent={markdownContent}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default PostDetail
