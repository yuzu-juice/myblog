import React from 'react'
import ProjectCard from '@/components/works/ProjectCard'
import projectsData from '@/data/works.json'

const WorksPage: React.FC = () => {
    const projects = projectsData

    return (
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <div className="text-center m-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-primary">Works</h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">つくったもの</p>
            </div>

            <section className="mx-4 sm:mx-8 lg:mx-16">
                <div
                    className={`grid gap-6 sm:gap-8 ${projects.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 lg:grid-cols-2'}`}
                >
                    {projects.map((project) => (
                        <div
                            key={project.nanoid}
                            className={projects.length === 1 ? 'w-full sm:w-3/4 lg:w-1/2 mx-auto' : 'w-full'}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WorksPage
