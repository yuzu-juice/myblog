import React from 'react'
import { ArrowLeft } from 'lucide-react'

interface Post {
    nanoid: string
    title: string
    date: string
    tags: string[]
}

interface HeroSectionProps {
    post: Post
    onGoBack: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ post, onGoBack }) => {
    return (
        <div className="py-6 sm:py-12 relative">
            <div className="container mx-auto px-4">
                {/* Back button overlay */}
                <button
                    onClick={onGoBack}
                    className="absolute top-4 left-4 flex items-center gap-2 hover:text-primary bg-black/30 py-2 rounded-full"
                >
                    <ArrowLeft className="w-4 h-4" />
                    戻る
                </button>

                <div className="pt-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-muted-foreground">
                        <span>{post.date}</span>
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-primary/10 px-2 py-1 rounded text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
