import { Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const HomePage = () => {
    return <div className="flex justify-center">まだ作成中です！</div>
    return (
        <div>
            <div className="relative">
                {/* Latest Posts Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center gap-2">
                        <Terminal className="w-7 h-7" />
                        Latest Posts
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Deconstructing React Hooks',
                                description: 'A deep dive into React Hooks and their effective usage patterns.',
                                tags: ['react', 'hooks', 'javascript']
                            }
                        ].map((post, index) => (
                            <Card
                                key={index}
                                className="group relative bg-card border-border hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col"
                            >
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-primary group-hover:underline">
                                        <Link to={`/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="text-card-foreground text-sm">
                                        {post.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-4">
                                        {post.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="default"
                                                className="mr-2 mb-2 bg-primary text-primary-foreground hover:bg-primary/80"
                                            >
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="link" className="p-0 h-auto">
                                        <Link
                                            to={`/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="inline-flex items-center gap-1 font-medium text-sm"
                                        ></Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage
