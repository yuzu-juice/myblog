import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ProjectCard from '@/components/works/ProjectCard'

interface Project {
    nanoid: string
    title: string
    description: string
    image: string
    techStack: string[]
    links: Array<{
        name: string
        url: string
        icon: string
    }>
}

interface ProjectCarouselProps {
    projects: Project[]
    showControls?: boolean
    className?: string
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
    projects,
    showControls = true,
    className = "mx-4 sm:mx-8 lg:mx-16 mb-8"
}) => {
    return (
        <section className={className}>
            <Carousel
                className="w-full"
            >
                <CarouselContent className="-ml-2 sm:-ml-4">
                    {projects.map((project) => (
                        <CarouselItem
                            key={project.nanoid}
                            className="pl-2 sm:pl-4 basis-auto flex justify-center"
                        >
                            <ProjectCard project={project} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {showControls && (
                    <>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </>
                )}
            </Carousel>
        </section>
    )
}

export default ProjectCarousel
