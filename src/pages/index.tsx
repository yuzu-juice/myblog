import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Profile from '@/components/about/Profile'
import ProjectCard from '@/components/works/ProjectCard'
import worksData from '@/data/works.json'

const HomePage = () => {
    return (
        <div className="space-y-16">
            <Profile />
            {/* Works Section */}
            <section className="m-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Works
                </h2>

                <Carousel
                    opts={{
                        align: 'start',
                        loop: true
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {worksData.map((project) => (
                            <CarouselItem
                                key={project.id}
                                className={`pl-4 ${worksData.length === 1 ? 'basis-full flex justify-center' : 'lg:basis-1/2'}`}
                            >
                                <div className={worksData.length === 1 ? 'w-1/2' : 'w-full'}>
                                    <ProjectCard project={project} />
                                </div>
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
