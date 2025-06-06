import React from 'react'
import { ExternalLink, Github, FileText, Link } from 'lucide-react'

interface ProjectLink {
    name: string
    url: string
    icon: string
}

interface ProjectSidebarProps {
    techStack: string[]
    links: ProjectLink[]
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
    techStack,
    links
}) => {
    // アイコンのマッピング
    const getIcon = (iconName: string) => {
        const iconMap = {
            ExternalLink: ExternalLink,
            GitHub: Github,
            FileText: FileText,
            Link: Link
        }
        const IconComponent = iconMap[iconName as keyof typeof iconMap] || ExternalLink
        return <IconComponent className="w-4 h-4" />
    }

    return (
        <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                            {getIcon(link.icon)}
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectSidebar
