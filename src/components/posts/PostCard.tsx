import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Post {
    nanoid: string
    title: string
    date: string
    tags: string[]
}

interface PostCardProps {
    post: Post
    url: string
}

const PostCard = ({ post, url }: PostCardProps) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[140px] sm:min-h-[120px] flex flex-col">
                <CardHeader className="pb-3 flex-1">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors h-auto min-h-[4rem] sm:min-h-[3.5rem] md:h-14 flex items-start">
                                <span className="line-clamp-4 sm:line-clamp-3 md:line-clamp-2">{post.title}</span>
                            </CardTitle>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>
                </CardHeader>
                <CardContent className="pt-0 flex-shrink-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}

export default PostCard
