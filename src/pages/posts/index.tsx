import PostCard from '@/components/posts/PostCard'
import { formatDate } from '@/lib/utils/formatDate'
import posts from '@/data/posts.json'

interface QiitaPost {
    id: string
    title: string
    created_at: string
    tags: { name: string }[]
    url: string
}

const typedPosts = posts as QiitaPost[]

const sortedPosts = [...typedPosts].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
})

const PostsPage = () => {
    return (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <section className="text-center mt-6 sm:mt-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary flex items-center justify-center">Posts</h1>
            </section>

            <section className="mx-4 sm:mx-8 lg:mx-16">
                <div className="space-y-6">
                    {sortedPosts.map((post) => (
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
                    ))}
                </div>
            </section>
        </div>
    )
}

export default PostsPage
