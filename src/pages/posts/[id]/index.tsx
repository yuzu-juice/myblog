import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import postsData from '@/data/posts.json'

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [markdownContent, setMarkdownContent] = useState<string>('')
    const [loading, setLoading] = useState(true)

    const post = postsData.find((post) => post.nanoid === id)

    useEffect(() => {
        const loadMarkdown = async () => {
            if (post) {
                try {
                    const module = await import(`/src/data/postsDetails/${post.nanoid}.md?raw`)
                    setMarkdownContent(module.default)
                } catch (error) {
                    setMarkdownContent('記事の詳細が見つかりませんでした。')
                }
                setLoading(false)
            }
        }

        loadMarkdown()
    }, [post])

    const handleGoBack = () => {
        navigate(-1)
    }

    if (!post) {
        return <Navigate to="/404" replace />
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
                <div className="container mx-auto px-4">
                    <Button
                        variant="ghost"
                        onClick={handleGoBack}
                        className="mb-8 hover:bg-primary/10"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        戻る
                    </Button>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-muted-foreground">
                        <span>{post.date}</span>
                        <span>読了時間: {post.readTime}</span>
                        <div className="flex gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-primary/10 px-2 py-1 rounded text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {loading ? (
                        <div className="text-center py-8">
                            <p>読み込み中...</p>
                        </div>
                    ) : (
                        <div className="prose prose-lg max-w-none">
                            <pre className="whitespace-pre-wrap">{markdownContent}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PostDetail
