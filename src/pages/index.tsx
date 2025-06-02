import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Profile from '@/components/about/Profile'
import ProjectCard from '@/components/works/ProjectCard'
import worksData from '@/data/works.json'

const HomePage = () => {
    return (
        <div className="space-y-16">
            <Profile />
            {/* Works Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Works
                </h2>

                <Carousel
                    opts={{
                        align: 'start',
                        loop: true
                    }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {worksData.map((project) => (
                            <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2">
                                <ProjectCard project={project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            {/* Latest Articles Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Latest Posts
                </h2>
                <div className="text-center mb-8">記事はまだありません。</div>
            </section>
        </div>
    )
}

export default HomePage
