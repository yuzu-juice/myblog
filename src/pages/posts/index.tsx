import { useState, useEffect } from 'react'
import PostCard from '@/components/posts/PostCard'
import { formatDate } from '@/lib/utils/formatDate'

interface QiitaPost {
    id: string
    title: string
    created_at: string
    tags: { name: string }[]
    url: string
}

const PostsPage = () => {
    const [posts, setPosts] = useState<QiitaPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://qiita.com/api/v2/users/yuzu_juice/items')
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.error('Error fetching posts from Qiita:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    // 日付の新しい順に並べ替え
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Page Header */}
            <section className="text-center mt-6 sm:mt-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center">Posts</h1>
            </section>

            {/* Posts List */}
            <section className="mx-4 sm:mx-8 lg:mx-16">
                <div className="space-y-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        sortedPosts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={{
                                    nanoid: post.id,
                                    title: post.title,
                                    date: formatDate(new Date(post.created_at)),
                                    tags: post.tags.map((tag) => tag.name)
                                }}
                                url={post.url}
                            />
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}

export default PostsPage
