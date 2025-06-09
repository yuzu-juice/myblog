import { useNavigate } from 'react-router-dom'
import PostCard from '@/components/posts/PostCard'
import postsData from '@/data/posts.json'

const PostsPage = () => {
    const navigate = useNavigate()

    const handlePostClick = (postId: string) => {
        navigate(`/posts/${postId}`)
    }

    // 日付の新しい順に並べ替え
    const sortedPosts = [...postsData].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Page Header */}
            <section className="text-center mt-6 sm:mt-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center">
                    Posts
                </h1>
            </section>

            {/* Posts List */}
            <section className="mx-4 sm:mx-8 lg:mx-16">
                <div className="space-y-6">
                    {sortedPosts.map((post) => (
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
