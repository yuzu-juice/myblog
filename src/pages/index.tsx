import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Profile from '@/components/about/Profile'
import ProjectCard from '@/components/works/ProjectCard'
import worksData from '@/data/works.json'

const HomePage = () => {
    return (
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <Profile />
            {/* Works Section */}
            <section className="mx-4 sm:mx-8 lg:mx-16">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Works
                </h2>

                <Carousel
                    opts={{
                        align: 'start',
                        loop: true
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                        {worksData.map((project) => (
                            <CarouselItem
                                key={project.id}
                                className={`pl-2 sm:pl-4 ${worksData.length === 1 ? 'basis-full flex justify-center' : 'basis-full sm:basis-4/5 lg:basis-1/2'}`}
                            >
                                <div className={worksData.length === 1 ? 'w-full sm:w-3/4 lg:w-1/2' : 'w-full'}>
                                    <ProjectCard project={project} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </section>
            {/* Latest Articles Section */}
            <section className="mx-4 sm:mx-8 lg:mx-16">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center text-primary flex items-center justify-center gap-2">
                    Latest Posts
                </h2>
                <div className="text-center mb-8 text-base sm:text-lg">記事はまだありません。</div>
            </section>
        </div>
    )
}

export default HomePage
