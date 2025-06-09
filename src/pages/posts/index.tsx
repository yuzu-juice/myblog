import { FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PostCard from '@/components/posts/PostCard'
import postsData from '@/data/posts.json'

const PostsPage = () => {
    const navigate = useNavigate()

    const handlePostClick = (postId: string) => {
        navigate(`/posts/${postId}`)
    }

    return (
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Page Header */}
            <section className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
                    <FileText className="w-10 h-10" />
                    Posts
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    技術に関する記事や学んだことをまとめています。
                </p>
            </section>

            {/* Posts List */}
            <section className="mx-4 sm:mx-8 lg:mx-16">
                <div className="space-y-6">
                    {postsData.map((post) => (
                        <PostCard
                            key={post.nanoid}
                            post={post}
                            onClick={() => handlePostClick(post.nanoid)}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default PostsPage
