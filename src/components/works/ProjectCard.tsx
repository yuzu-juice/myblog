import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface Project {
    id: number
    title: string
    description: string
    image: string
    link: string
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className="hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <CardHeader>
                <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
            </CardContent>

            <CardFooter className="justify-end">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary font-medium transition-colors duration-300 flex items-center gap-1"
                >
                    View project <ArrowRight className="w-4 h-4" />
                </a>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
